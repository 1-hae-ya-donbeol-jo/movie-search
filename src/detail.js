import { getDetailMovie } from "../apis/movie.js";

const searchParams = new URLSearchParams(location.search);
const movieId = searchParams.get("sample");

const renderDetail = async () => {
  const movieDetail = await getDetailMovie(movieId);

  const movieDetailElement = document.querySelector(".movie-detail");
  movieDetailElement.innerHTML = `
    <div>${movieDetail.title}</div>
  `;
};

renderDetail();
