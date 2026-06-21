"use client";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import MovieGrid from "../components/MovieGrid.jsx";
import Pagination from "../components/Pagination.jsx";
import Footer from "../components/Footer.jsx";
import Loading from "../components/Loading.jsx";
import EmptyState from "../components/EmptyState.jsx";
import ErrorState from "../components/ErrorState.jsx";

import useFavorites from "../hooks/useFavorites.js";
import { searchMovies } from "../lib/omdb.js";

export default function Home() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 400);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    let cancelled = false;

    const getMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await searchMovies(debouncedQuery, page);
        if (cancelled) return;

        setMovies(data.movies);
        setHasNext(data.hasNext);
        setHasPrev(data.hasPrev);
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        setError(err.message || "Failed to load movies.");
        setMovies([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    getMovies();
    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, page, retryCount]);

  const retry = () => setRetryCount((c) => c + 1);

  return (
    <main className="min-h-screen bg-[#0B0D0F] text-[#F5EFE6]">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto mb-10 max-w-xl">
          <SearchBar
            value={query}
            onChange={(e) => {
              setPage(1);
              setQuery(e.target.value);
            }}
          />
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorState message={error} onRetry={retry} />
        ) : movies.length === 0 ? (
          <EmptyState query={debouncedQuery} />
        ) : (
          <>
            <MovieGrid
              movies={movies}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />

            <Pagination
              page={page}
              setPage={setPage}
              hasNext={hasNext}
              hasPrev={hasPrev}
            />
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}
