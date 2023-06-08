import { renderPopularMovie, renderSearchMovie } from "./movie.js";
import { nextSlide } from "./utils/slider.js";
import { drawSortMovieList } from "./sort.js";

renderPopularMovie();

const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", event => {
  event.preventDefault();

  renderSearchMovie();
});

const movieList = document.querySelector(".movie-list");
movieList.addEventListener("click", event => {
  let movieItem = event.target.closest("li");
  console.log("🚀 ~ file: main.js:15 ~ movieItem:", movieItem);

  if (movieItem) {
    window.location.href = `detail.html?movieId=${movieItem.id}`;
  }
});

const sortMenu = document.querySelector("#sortOpt");
sortMenu.addEventListener("change", () => {
  drawSortMovieList();
});
