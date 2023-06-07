import { renderPopularMovie, renderSearchMovie } from "./movie.js";
import { prevSlide, nextSlide } from "./utils/slider.js";
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

  if (movieItem) {
    window.location.href = `detail.html?movieId=${movieItem.id}`;
  }
});

const sortMenu = document.querySelector("#sortOpt");
sortMenu.addEventListener("change", () => {
  drawSortMovieList();
});

const nextBtn = document.querySelector(".moveSilde");
nextBtn.addEventListener("click", event => {
  // event.target == nextBtn.firstElementChild ? console.log("이전버튼") : console.log("다음버튼");
  if (event.target == nextBtn.firstElementChild) {
    prevSlide();
  } else if (event.target == nextBtn.lastElementChild) {
    nextSlide();
  }
  // event.target == nextBtn.firstElementChild ? prevSlide() : nextSlide();
});
