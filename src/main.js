import { Snail } from "./models/Snail.js";
import { renderPopularMovie, renderSearchMovie } from "./movie.js";
import { drawSortMovieList } from "./sort.js";

renderPopularMovie();

const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", event => {
  event.preventDefault();

  renderSearchMovie();
});

const movieList = [
  document.querySelector(".movie-list"),
  document.querySelector(".now-movie-list")
];
movieList.forEach(list => {
  list.addEventListener("click", event => {
    let movieItem = event.target.closest("li");

    if (movieItem) {
      window.location.href = `detail.html?movieId=${movieItem.id}`;
    }
  });
});

const sortMenu = document.querySelector("#sortOpt");
sortMenu.addEventListener("click", event => {
  drawSortMovieList(event);
});

const moreBtn = document.querySelector(".now-movie > button");
const nowList = document.querySelector(".now-movie-list");
moreBtn.addEventListener("click", () => {
  nowList.style.height = "auto";
  moreBtn.style.display = "none";
});

const snail = new Snail();
snail.add();
