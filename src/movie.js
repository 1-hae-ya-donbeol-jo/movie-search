import { getPopularMovieList, getSearchMovieList, getNowPlayingMovie } from "./apis/movie.js";

export const drawMovieList = (movieList, className) => {
  const movieListElement = document.querySelector(className);

  movieListElement.innerHTML = movieList.reduce((newMovieList, movieItem) => {
    const { poster_path, title, vote_average, id } = movieItem;

    return (newMovieList += `
      <li class="movie-item" id=${id}>
        <div class="poster-movie">
          <img src="https://image.tmdb.org/t/p/w200/${poster_path}" alt="${title}" />
          <span class="movie-rating">Rating : ${vote_average}</span>
        </div>
        <h2 class="movie-title">${title}</h2>
      </li>
        `);
  }, "");
};

export const renderPopularMovie = async () => {
  const movieList = await getPopularMovieList();
  const nowMovieList = await getNowPlayingMovie();

  drawMovieList(movieList, ".movie-list");
  drawMovieList(nowMovieList, ".now-movie-list");
};

export const renderSearchMovie = async () => {
  const searchInput = document.querySelector(".search-box");
  const searchKeyword = searchInput.value;

  const searchMovieList = await getSearchMovieList(searchKeyword);

  if (searchMovieList.length > 0) {
    drawMovieList(searchMovieList, ".now-movie-list");
  } else {
    alert("검색된 결과가 없습니다.");
  }
};
