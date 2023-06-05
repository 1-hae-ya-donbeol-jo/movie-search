import { renderPopularMovie, renderSearchMovie } from "./movie.js";

renderPopularMovie();

const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", event => {
  event.preventDefault();

  renderSearchMovie();
});

const movieList = document.querySelector(".movie-list");
movieList.addEventListener("click", event => {
  let movieItem = event.target.closest("li");

  if (movieItem) {
    window.location.href = `detail.html?movieId=${movieItem.id}`;
  }
});
