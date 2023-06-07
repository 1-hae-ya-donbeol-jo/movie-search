import { getPopularMovieList, getSearchMovieList } from "./apis/movie.js";

export const drawMovieList = movieList => {
  const movieListElement = document.querySelector(".movie-list");

  movieListElement.innerHTML = movieList.reduce((newMovieList, movieItem) => {
    const { poster_path, title, overview, vote_average, id } = movieItem;

    return (newMovieList += `
          <li class="movie-item" id=${id}>
              <div class="item-poster">
                <div class="poster-movie">
                  <img src="https://image.tmdb.org/t/p/w200/${poster_path}" alt="${title}" />
                  <span class="movie-rating">Rating : ${vote_average}</span>
                </div>
                <div class="poster-info">
                </div>
              </div>
              <h2 class="movie-title">${title}</h2>
              <p class="movie-desc" style="display: none;">${overview}</p>
          </li>
        `);
  }, "");
};

export const renderPopularMovie = async () => {
  const movieList = await getPopularMovieList();

  drawMovieList(movieList);
};

export const renderSearchMovie = async () => {
  const searchInput = document.querySelector(".search-box");
  const searchKeyword = searchInput.value;

  const searchMovieList = await getSearchMovieList(searchKeyword);

  if (searchMovieList.length > 0) {
    drawMovieList(searchMovieList);
  } else {
    alert("검색된 결과가 없습니다.");
  }
};
