const btnBurger = document.querySelectorAll(".header__nav__burger");

btnBurger.forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".header__nav__list")
      .classList.toggle("header__nav__list--hidden");
    btnBurger[0].classList.toggle("header__nav__burger--hidden");
    btnBurger[1].classList.toggle("header__nav__burger--hidden");
  });
});
