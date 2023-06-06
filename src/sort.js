import { getPopularMovieList } from "./apis/movie.js";

const sortMenu = document.querySelector("#sortMenu");
sortMenu.addEventListener("change", () => {
  drawSortMovieList(event);
});

const drawSortMovieList = async event => {
  const movieList = await getPopularMovieList();

  if (event.target === document.querySelector("#radio1")) {
    movieList.sort((a, b) => b.vote_average - a.vote_average);
  } else if (event.target === document.querySelector("#radio2")) {
    movieList.sort((a, b) => a.title.localeCompare(b.title));
  } else if (event.target === document.querySelector("#radio3")) {
    movieList.sort((a, b) => b.release_date.localeCompare(a.release_date));
  }

  const movieListElement = document.querySelector(".movie-list");
  movieListElement.innerHTML = movieList.reduce((newMovieList, movieItem) => {
    const { poster_path, title, overview, vote_average, id } = movieItem;

    return (newMovieList += `
          <li class="movie-item" id=${id}>
              <img class="movie-poster" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title} 포스터" />
              <h2 class="movie-title">${title}</h2>
              <p class="movie-desc">${overview}</p>
              <p class="movie-rating">Rating : ${vote_average}</p>
          </li>
        `);
  }, "");
};
