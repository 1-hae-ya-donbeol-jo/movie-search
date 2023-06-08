import { getNowPlayingMovie } from "./apis/movie.js";
import { drawMovieList } from "./movie.js";

export const drawSortMovieList = async () => {
  const movieList = await getNowPlayingMovie();
  const sortOpt = document.querySelector("#sortOpt");

  switch (sortOpt.value) {
    case "vote":
      movieList.sort((a, b) => b.vote_average - a.vote_average);
      break;
    case "title":
      movieList.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "day":
      movieList.sort((a, b) => b.release_date.localeCompare(a.release_date));
      break;
  }

  drawMovieList(movieList, ".now-movie-list");
};
