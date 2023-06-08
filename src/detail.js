import { getDetailMovie, getDetailMovieImages } from "./apis/movie.js";

const searchParams = new URLSearchParams(location.search);
const movieId = searchParams.get("movieId");

const renderDetail = async () => {
  const movieDetail = await getDetailMovie(movieId);

  // genres, production_countries, production_companies 배열 정보 가져오는 데에 map 함수 사용
  const genres = movieDetail.genres.map(genre => `${genre.name}`).join(", ");
  const productionCountries = movieDetail.production_countries
    .map(country => `${country.name}`)
    .join(", ");
  const productionCompanies = movieDetail.production_companies
    .map(company => `${company.name}`)
    .join(", ");

  // revenue, vote_count에는 읽기 쉽도록 숫자 형식 지정: 천 단위 기준 쉼표
  const revenue = movieDetail.revenue.toLocaleString();
  const voteCount = movieDetail.vote_count.toLocaleString();

  const movieDetailElement = document.querySelector(".movie-detail");
  movieDetailElement.innerHTML = `
  <img class="detail-movie-poster" src="https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}" alt="${movieDetail.title} 포스터"/> 
  
  <figure class="detail-movie-box">
  <section class="detail-movie-main">
  <h2 class="detail-movie-title">${movieDetail.title}</h2>
  <span class="detail-movie-status-box">
  <p class="detail-movie-status">${movieDetail.status}</p>
  </span>
  </section>
  
  <p class="detail-movie-overview">${movieDetail.overview}</p>
  
  <section class="detail-movie-info">
  <div class="detail-movie-left">
  <p> 개봉일자: ${movieDetail.release_date}</p>
  <p> 장르: ${genres}</p>
  <p> 러닝타임: ${movieDetail.runtime}분</p>
  <p> 수익: ${revenue}달러</p>
  </div>
  
  <div class="detail-movie-right">
  <p> 평점: ★ ${movieDetail.vote_average}점</p>
  <p> 투표 수: ${voteCount}개</p>
        <p> 국가: ${productionCountries}</p>
        <p> 제작사: ${productionCompanies}</p>
        </div>
        </section>
        </figure>
        `;
};

renderDetail();

// 햇님 로고 클릭 -> 메인 페이지로 이동
const mainLogo = document.querySelector(".main-logo");
mainLogo.addEventListener("click", event => {
  window.location.href = "./index.html";
});

// 영화 상세 이미지 나열
const renderDetailImages = async () => {
  const movieDetailImages = await getDetailMovieImages(movieId);

  const movieDetailImagesCount = document.querySelector(".detail-counts");
  movieDetailImagesCount.innerHTML = `${movieDetailImages.length}`;

  const movieDetailImagesElement = document.querySelector(".detail-images");
  movieDetailImagesElement.innerHTML = `
  <div class="movie-images-box">
    <ul class="movie-images-list">
      ${movieDetailImages.reduce((newMovieImages, { file_path }) => {
        return (newMovieImages += `
      <li class="movie-images-items">
      <img src="https://image.tmdb.org/t/p/w200/${file_path}">
      </li>`);
      }, "")}
    </ul>
  </div>
  `;
};
renderDetailImages();
