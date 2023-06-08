let nowSlide = 0;
const movieList = document.querySelector(".movie-list");
export const nextSlide = () => {
  nowSlide -= 100;
  if (nowSlide >= -300) {
    movieList.style.transform = `translateX(${nowSlide}%)`;
    return nowSlide;
  } else nowSlide += 100;
};

export const prevSlide = () => {
  nowSlide += 100;
  if (nowSlide <= 0) {
    movieList.style.transform = `translateX(${nowSlide}%)`;
    return nowSlide;
  } else nowSlide -= 100;
};
