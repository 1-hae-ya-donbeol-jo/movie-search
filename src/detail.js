import { getDetailMovie, getDetailMovieImages } from "./apis/movie.js";
import { getSimilarMovie } from "./apis/movie.js";
import { drawMovieList } from "./movie.js";

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

// 관련 영화 추천 [김채현]
// similar api 가져오기
export const renderSimilar = async () => {
  const similarMovie = await getSimilarMovie(movieId);

  drawMovieList(similarMovie, ".similar-movies-list");
};

renderSimilar();

// 영화 상세 이미지 나열
const renderDetailImages = async () => {
  const movieDetailImages = await getDetailMovieImages(movieId);

  const movieDetailImagesCount = document.querySelector(".detail-counts");
  movieDetailImagesCount.innerHTML = `${movieDetailImages.length}`;

  const movieDetailImagesElement = document.querySelector(".movie-images-list");
  movieDetailImagesElement.innerHTML = movieDetailImages.reduce((newMovieImages, { file_path }) => {
    return (newMovieImages += `
      <li class="movie-images-items">
        <img src="https://image.tmdb.org/t/p/w200/${file_path}">
      </li>
  `);
  }, "");
};

renderDetailImages();

// localStorage 댓글
const setBtn = document.querySelector("#setForm");
let countComment = 0;

// localStorage POST 기능
setBtn.addEventListener("submit", event => {
  event.preventDefault();
  let nameValue = document.querySelector("#userName");
  let commentValue = document.querySelector("#userComment");
  localStorage.setItem(`userName${countComment}`, nameValue.value);
  localStorage.setItem(`userComment${countComment}`, commentValue.value);
  nameValue.value = "";
  commentValue.value = "";
  return (countComment += 1);
});

// localStorage GET 기능 삭제와 연동되면 오류 발생
const commentList = document.querySelector(".comment-list");
const getComment = () => {
  commentList.innerHTML = "";
  for (let i = 0; i < localStorage.length / 2; i++) {
    let name = localStorage.getItem(`userName${i}`);
    let comment = localStorage.getItem(`userComment${i}`);

    commentList.innerHTML += `
    <li>
      <form action="" id="commentNum${i}">
        <label for="writeName">이름</label>
        <data id="writeName">${name}</data>
        <label for="writeComment">후기</label>
        <data id="writeComment">${comment}</data>
        <input id="writeComment" value="" style="display: none" />
        <button id="editBtn">수정</button>
        <button id="deleteBtn">삭제</button>
        </form>
    </li>
    `;
  }
};

// 댓글 추가했을때 애드이벤트 함수 실행 필요!

//로컬스토리지 EDIT PATCH 작동안됨

const editBtn = document.querySelector("#editBtn");
editBtn.addEventListener("click", event => {
  event.preventDefault();
  const prevSib = event.currentTarget.previousElementSibling;
  const prevSib2 = event.currentTarget.previousElementSibling.previousElementSibling;
  const writeBtn = event.currentTarget;
  const cancelBtn = event.currentTarget.nextElementSibling;

  prevSib.style.display = "block";
  prevSib2.style.display = "none";

  writeBtn.innerHTML = "작성";
  cancelBtn.innerHTML = "취소";
  event.target.parentNode.addEventListener("submit", event => {
    event.preventDefault();
    //수정되면 새로고침 되어버림.
    //폼 id에서 넘버값 빼와야됨 킵해두고 삭제부터
    console.log(event.target);
    localStorage.setItem(`userName${countComment}`, nameValue.value);
    localStorage.setItem(`userComment${countComment}`, commentValue.value);
  });
});

//로컬스토리지 DELETE  댓글 GET의 for에서 오류

const deleteBtn = document.querySelectorAll("#deleteBtn");
Array.from(deleteBtn).forEach(btn => {
  btn.addEventListener("click", event => {
    event.preventDefault();
    let commentId = btn.parentElement.id;
    let num = commentId.replace("commentNum", "");
    localStorage.removeItem(`userName${num}`);
    localStorage.removeItem(`userComment${num}`);
  });
});
getComment();
