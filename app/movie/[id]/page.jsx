import Link from "next/link";
import { getMovieDetails } from "../../../lib/omdb.js";

export default async function MovieDetails({ params }) {
  let movie;
  try {
    movie = await getMovieDetails(params.id);
  } catch (err) {
    return (
      <main className="min-h-screen bg-[#0B0D0F] p-8 text-[#F5EFE6]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[#F5EFE6]/70">
            Could not load this title. It may have been removed or the id is
            invalid.
          </p>
          <Link href="/" className="text-[#C9A227] underline">
            Back to browsing
          </Link>
        </div>
      </main>
    );
  }

  const rating =
    movie.imdbRating && movie.imdbRating !== "N/A" ? movie.imdbRating : "—";

  return (
    <main className="min-h-screen bg-[#0B0D0F] p-6 text-[#F5EFE6] sm:p-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#F5EFE6]/50 transition hover:text-[#C9A227]"
        >
          ← Back to browsing
        </Link>

        <div className="grid gap-10 md:grid-cols-[320px_1fr]">
          <img
            src={
              movie.Poster && movie.Poster !== "N/A"
                ? movie.Poster
                : "https://placehold.co/320x480/15181B/F5EFE6?text=No+Poster"
            }
            alt={movie.Title}
            className="w-full rounded-lg ring-1 ring-[#F5EFE6]/10"
          />

          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="rounded-full bg-[#15181B] px-3 py-1 font-mono text-xs text-[#C9A227] ring-1 ring-[#C9A227]/30">
                ★ {rating}
              </span>
              <span className="font-mono text-xs text-[#F5EFE6]/50">
                {movie.Year}
              </span>
            </div>

            <h1 className="mb-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {movie.Title}
            </h1>

            <p className="mb-6 leading-relaxed text-[#F5EFE6]/80">
              {movie.Plot && movie.Plot !== "N/A"
                ? movie.Plot
                : "No synopsis available."}
            </p>

            <dl className="grid grid-cols-2 gap-4 border-t border-[#F5EFE6]/10 pt-5 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-[#F5EFE6]/40">
                  Genre
                </dt>
                <dd className="mt-1">{movie.Genre || "—"}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-[#F5EFE6]/40">
                  Runtime
                </dt>
                <dd className="mt-1">{movie.Runtime || "—"}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-[#F5EFE6]/40">
                  Director
                </dt>
                <dd className="mt-1">{movie.Director || "—"}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-[#F5EFE6]/40">
                  Cast
                </dt>
                <dd className="mt-1">{movie.Actors || "—"}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
