import type { Movie } from "./models/Movie";
import type { MovieExt } from "./models/MovieExt";
import { getMovieById } from "./services/movieService";

export const createHtml = (movies: Movie[]) => {
  const moviesSection = document.getElementById("movies");

  if (moviesSection) {
    moviesSection.innerHTML = "";
  }
};
