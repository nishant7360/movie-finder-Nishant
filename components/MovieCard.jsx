"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function MovieCard({ movie, isFavorite, toggleFavorite }) {
  const rating =
    movie.imdbRating && movie.imdbRating !== "N/A" ? movie.imdbRating : "—";

  return (
    <div className="group overflow-hidden rounded-lg bg-[#15181B] ring-1 ring-[#F5EFE6]/10 transition duration-300 hover:-translate-y-1 hover:ring-[#C9A227]/40">
      <Link href={`/movie/${movie.imdbID}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden bg-[#0B0D0F]">
          <img
            src={
              movie.Poster && movie.Poster !== "N/A"
                ? movie.Poster
                : "https://placehold.co/300x450/15181B/F5EFE6?text=No+Poster"
            }
            alt={movie.Title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-[#0B0D0F]/80 px-2 py-1 font-mono text-xs text-[#C9A227] backdrop-blur-sm">
            ★ {rating}
          </div>
        </div>
      </Link>

      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h2 className="line-clamp-2 font-display text-sm font-semibold leading-snug text-[#F5EFE6]">
            {movie.Title}
          </h2>

          <button
            onClick={() => toggleFavorite(movie)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            aria-pressed={isFavorite}
            className="shrink-0 text-[#F5EFE6]/40 transition hover:text-[#E8483A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8483A]"
          >
            <Heart
              size={18}
              fill={isFavorite ? "#E8483A" : "none"}
              stroke={isFavorite ? "#E8483A" : "currentColor"}
            />
          </button>
        </div>

        <p className="mt-1 font-mono text-xs text-[#F5EFE6]/50">{movie.Year}</p>
      </div>
    </div>
  );
}
