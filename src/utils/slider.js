let nowSlide = 0;
const movieList = document.querySelector(".movie-list");
export const nextSlide = () => {
  nowSlide -= 100; // max 값 없이 없어서 무한정 넘어감
  if (nowSlide >= -300) {
    movieList.style.transform = `translateX(${nowSlide}%)`;
    return nowSlide;
  } else nowSlide += 100;
};
// movieList.style.transform = "translateX(-100%)"; 한번만 이동하고 다음 작동 안됨
// movieList.style.transform = `translateX(${nowSlide}%)`; 설정값 변수 설정

export const prevSlide = () => {
  nowSlide += 100;
  if (nowSlide <= 0) {
    movieList.style.transform = `translateX(${nowSlide}%)`;
    return nowSlide;
  } else nowSlide -= 100;
};
