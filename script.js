const burger = document.querySelector(".burger__img");
const navMobile = document.querySelector(".nav--mobile__ul");
const arrowDown = document.querySelector(".hero__icon--down");
const h1 = document.querySelector("h1");
const firstSection = document.querySelector('.first__section')

burger.addEventListener("click", function () {
  navMobile.classList.toggle("nav--mobile__ul--display");
  arrowDown.classList.toggle("display__none");
  h1.classList.toggle("display__none");
});

arrowDown.addEventListener('click', function() {
    firstSection.scrollIntoView({behavior: 'smooth'})
})