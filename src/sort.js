import { getNowPlayingMovie } from "./apis/movie.js";
import { drawMovieList } from "./movie.js";

export const drawSortMovieList = async event => {
  const movieList = await getNowPlayingMovie();

  switch (event.target) {
    case document.querySelector("#day"):
      movieList.sort((a, b) => b.vote_average - a.vote_average);
      break;
    case document.querySelector("#title"):
      movieList.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case document.querySelector("#평점순"):
      movieList.sort((a, b) => b.release_date.localeCompare(a.release_date));
      break;
  }

  drawMovieList(movieList, ".now-movie-list");
};
