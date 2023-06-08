import { renderPopularMovie, renderSearchMovie } from "./movie.js";
import { prevSlide, nextSlide } from "./utils/slider.js";
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

const nextBtn = document.querySelectorAll(".move-slide");
Array.from(nextBtn).forEach(btn => {
  btn.addEventListener("click", event => {
    if (event.target == event.currentTarget.firstElementChild) {
      prevSlide();
    } else if (event.target == event.currentTarget.lastElementChild) {
      nextSlide();
    }
  });
});

const moreBtn = document.querySelector(".now-movie > button");
const nowList = document.querySelector(".now-movie-list");
moreBtn.addEventListener("click", () => {
  nowList.style.height = "auto";
  moreBtn.style.display = "none";
});
