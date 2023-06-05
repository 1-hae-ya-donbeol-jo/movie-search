import { getDetailMovie } from "./apis/movie.js";

const searchParams = new URLSearchParams(location.search);
const movieId = searchParams.get("movieId");

const renderDetail = async () => {
  const movieDetail = await getDetailMovie(movieId);

  const movieDetailElement = document.querySelector(".movie-detail");
  movieDetailElement.innerHTML = `
    <div>${movieDetail.title}</div>
    <div>${movieDetail.overview}</div>
    <img src="https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}"/>
  `;
};

renderDetail();
