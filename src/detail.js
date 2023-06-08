import { addComment } from "./apis/comment.js";
import { getDetailMovie, getDetailMovieImages, getSimilarMovie } from "./apis/movie.js";
import { Slider } from "./models/Slider.js";
import { drawMovieList } from "./movie.js";

const searchParams = new URLSearchParams(location.search);
const movieId = searchParams.get("movieId");

const renderDetail = async () => {
  const movieDetail = await getDetailMovie(movieId);
  // genres, production_countries, production_companies 배열 정보 가져오는 데에 map 함수 사용
  const genres = movieDetail.genres.map(genre => `${genre.name}`).join(", ");
  console.log(genres);
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
    <div class="detail-movie-info-box">
      <img class="detail-movie-poster" src="https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}" alt="${movieDetail.title} 포스터"/>
    
      <div class="detail-movie-box">
        <div class="detail-movie-main">
          <h2 class="detail-movie-title">${movieDetail.title}</h2>

          <span class="detail-movie-status-box">
            <p class="detail-movie-status">${movieDetail.status}</p>
          </span>
        </div>

        
        <dl class="detail-movie-info">
          <dt>개봉일자</dt>
          <dd>${movieDetail.release_date}</dd>
          
          <dt>장르</dt>
          <dd>${genres}</dd>
          
          <dt>러닝타임</dt>
          <dd>${movieDetail.runtime}분</dd>
          
          <dt>수익</dt>
          <dd>${revenue}달러</dd>
          
          <dt>평점</dt>
          <dd>${movieDetail.vote_average}점</dd>
          
          <dt>투표 수</dt>
          <dd>${voteCount}개</dd>
          
          <dt>국가</dt>
          <dd>${productionCountries}</dd>
          
          <dt>제작사</dt>
          <dd>${productionCompanies}</dd>
        </dl>
      </div>
    </div>

    <h3 class="overview-title">줄거리</h3>
    <p class="detail-movie-overview">${movieDetail.overview}</p>
  `;
};
renderDetail();

// 관련 영화 추천 [김채현]: similar api 가져오기
export const renderSimilar = async () => {
  const similarMovie = await getSimilarMovie(movieId);

  drawMovieList(similarMovie, ".similar-movies-list");
};

renderSimilar();

// 영화 상세 포토 가져오기
const renderDetailMovieImages = async () => {
  const detailImages = await getDetailMovieImages(movieId);
  const detailImagesCount = document.querySelector(".detail-counts");
  detailImagesCount.innerHTML = `${detailImages.length}`;
  const detailImagesList = document.querySelector(".detail-image-list");
  const detailImageContent = detailImages.reduce((_detailImages, { file_path }) => {
    return (
      _detailImages +
      ` 
      <li class="detail-image-item">
      <figure class="detail-image-box">
      <img src="https://image.tmdb.org/t/p/w500/${file_path}"/>
      </figure>
      </li>
      `
    );
  }, "");
  detailImagesList.innerHTML = detailImageContent;
};
await renderDetailMovieImages();

// 영화 상세 포토 슬라이드 버튼
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const sliderList = document.querySelector(".detail-image-list");

const slider = new Slider(prevButton, nextButton, sliderList, 8);
slider.connect();

// 로고 클릭 시 메인 페이지 이동
const gotoMainPage = document.querySelector("#logo");
gotoMainPage.addEventListener("click", () => {
  window.location.href = "/";
});

// localStorage 댓글
const commentForm = document.querySelector("#setForm");

// localStorage POST 기능
commentForm.addEventListener("submit", event => {
  event.preventDefault();

  const data = {};

  const inputs = document.querySelectorAll("#setForm input");
  inputs.forEach(input => {
    data[input.name] = input.value;
    input.value = "";
  });

  addComment(movieId, data);

  const commentList = document.querySelector(".comment-list");
  commentList.insertAdjacentHTML(
    "afterend",
    `
    <li>
      <p>${data.userName}</p>
      <p>${data.userComment}</p>
    </li>
  `
  );
});

// let userList = [];

// const saveComment = () => {
// const userId = document.querySelector("#password").value;
// const userName = document.querySelector("#name").value;
// const userPassword = document.querySelector("#password").value;
// const userComment = document.querySelector("#comment").value;

// const userObjItem = {
// name: userName,
// password: userPassword,
// comment: userComment,
// id: userList.length + 1
// };

// userList.push(userObjItem);
// localStorage.setItem(`${userId}`, JSON.stringify(userList));
// console.log(userList);
// };

//<div class="detail-movie-info">
// <div class="detail-movie-left">
//   <p> 개봉일자: ${movieDetail.release_date}</p>
//   <p> 장르: ${genres}</p>
//   <p> 러닝타임: ${movieDetail.runtime}분</p>
//   <p> 수익: ${revenue}달러</p>
// </div>

// <div class="detail-movie-right">
//   <p> 평점: ★ ${movieDetail.vote_average}점</p>
//   <p> 투표 수: ${voteCount}개</p>
//   <p> 국가: ${productionCountries}</p>
//   <p> 제작사: ${productionCompanies}</p>
// </div>
// </div>
