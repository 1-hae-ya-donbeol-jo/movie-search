import { loadMovie, searchMovie } from "./movie.js";

loadMovie();

const searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", event => {
  event.preventDefault();

  searchMovie();
});

const movieList = document.querySelector(".movie-list");
movieList.addEventListener("click", event => {
  let li = event.target.closest("li");

  if (li) {
    window.location.href = `detail.html?movieId=${li.id}`;
  }
});

// toQueryString({movieId: li.id, language: 'kr'})

//detail에서 id 값을 받아서 출력해준다.
// window.location.href = `/movie/${movieItem.id}`;

/*
movieList.addEventListener("click", event => {
  let li = event.target.closest("li");
  // elem.closest(selector) 메서드는 elem의 상위 요소 중 selector와 일치하는 가장 근접한 조상 요소를 반환합니다.
  위 코드에선 이벤트가 발생한 요소부터 시작해 위로 올라가며 가장 가까운 <li> 요소를 찾습니다.

  if (!li) return; // event.target이 <li>안에 있지 않으면 그 즉시 null을 반환하므로 아무 작업도 일어나지 않습니다.
  if (movieList.contains(li)) {
    console.log("li 클릭");
  } // 중첩 테이블이 있는 경우 event.target은 현재 테이블 바깥에 있는 <li>가 될 수도 있습니다. 이런 경우를 처리하기 위해 <li>가 팔괘도 안에 있는지를 확인합니다.
});
*/
