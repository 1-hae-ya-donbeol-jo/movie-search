// id moveSlide class 명으로 변경
const nextBtn = document.querySelectorAll("#moveSlide");
console.log("1", nextBtn);
console.log("2", Array.from(nextBtn));

Array.from(nextBtn).forEach(btn => {
  let classValue = btn.previousElementSibling.firstElementChild.className;

  btn.addEventListener("click", event => {
    if (event.target == event.currentTarget.firstElementChild) {
      prevSlide(classValue);
    } else if (event.target == event.currentTarget.lastElementChild) {
      nextSlide(classValue);
    }
  });
});

let nowSlide = 0;

export const prevSlide = classValue => {
  const movieList = document.querySelector(`.${classValue}`);

  nowSlide += 100;

  if (nowSlide <= 0) {
    movieList.style.transform = `translateX(${nowSlide}%)`;

    return nowSlide;
  } else nowSlide -= 100;
};

export const nextSlide = classValue => {
  const movieList = document.querySelector(`.${classValue}`);

  nowSlide -= 100;

  if (nowSlide >= -300) {
    movieList.style.transform = `translateX(${nowSlide}%)`;

    return nowSlide;
  } else nowSlide += 100;
};
