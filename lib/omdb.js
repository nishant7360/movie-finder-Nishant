import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

const omdb = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

const PAGE_SIZE = 12;
const OMDB_PAGE_SIZE = 10;

async function fetchOmdbPage(query, omdbPage) {
  if (omdbPage < 1) return { Response: "False", Search: [] };

  const { data } = await omdb.get("", {
    params: {
      apikey: API_KEY,
      s: query,
      page: omdbPage,
      type: "movie",
    },
  });

  return data;
}

export const searchMovies = async (query, uiPage = 1) => {
  if (!query?.trim()) {
    return { movies: [], hasNext: false, hasPrev: false, totalResults: 0 };
  }

  const startIndex = (uiPage - 1) * PAGE_SIZE;
  const firstOmdbPage = Math.floor(startIndex / OMDB_PAGE_SIZE) + 1;
  const secondOmdbPage = firstOmdbPage + 1;

  const [firstRes, secondRes] = await Promise.all([
    fetchOmdbPage(query, firstOmdbPage),
    fetchOmdbPage(query, secondOmdbPage),
  ]);

  if (firstRes.Response === "False") {
    if (firstRes.Error && firstRes.Error.toLowerCase().includes("not found")) {
      return {
        movies: [],
        hasNext: false,
        hasPrev: uiPage > 1,
        totalResults: 0,
      };
    }
    throw new Error(firstRes.Error || "Failed to fetch movies");
  }

  const combined = [...(firstRes.Search || []), ...(secondRes.Search || [])];

  const offsetWithinCombined = startIndex % OMDB_PAGE_SIZE;
  const pageOfMovies = combined.slice(
    offsetWithinCombined,
    offsetWithinCombined + PAGE_SIZE,
  );

  const totalResults = Number(firstRes.totalResults || 0);
  const hasNext = uiPage * PAGE_SIZE < totalResults;
  const hasPrev = uiPage > 1;

  return { movies: pageOfMovies, hasNext, hasPrev, totalResults };
};

export const getMovieDetails = async (id) => {
  const { data } = await omdb.get("", {
    params: {
      apikey: API_KEY,
      i: id,
      plot: "full",
    },
  });

  if (data.Response === "False") {
    throw new Error(data.Error || "Movie not found");
  }

  return data;
};
