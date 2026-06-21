"use client";

import { useEffect, useState } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let stored = [];
    try {
      stored = JSON.parse(localStorage.getItem("favorites")) || [];
      if (!Array.isArray(stored)) stored = [];
    } catch {
      stored = [];
    }
    setFavorites(stored);
  }, []);

  const toggleFavorite = (movie) => {
    const exists = favorites.some((fav) => fav.imdbID === movie.imdbID);

    const updated = exists
      ? favorites.filter((fav) => fav.imdbID !== movie.imdbID)
      : [...favorites, movie];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (id) => favorites.some((fav) => fav.imdbID === id);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
