import { getNowPlayingMovie } from "./apis/movie.js";
import { drawNowMovieList } from "./movie.js";

const sortMenu = document.querySelector("#sortOpt");
sortMenu.addEventListener("change", () => {
  drawSortMovieList();
});

const drawSortMovieList = async () => {
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

  drawNowMovieList(movieList);
};
