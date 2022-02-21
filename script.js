window.sr = ScrollReveal();
sr.reveal('.img_ga, .img_happy, .img_price, p, h2, i, ul, .img, h3',{delay:300})



const burger_btn = document.querySelector('.burger_btn');

const nav = document.querySelector('nav');
const burgerBarA = document.querySelector('.burger_barA');
const burgerBarB = document.querySelector('.burger_barB');
const burgerBarC = document.querySelector('.burger_barC');

burger_btn.addEventListener('click',  () =>{
  nav.classList.toggle('nav_on');
  burgerBarA.classList.toggle('burger_barA_On');
  burgerBarB.classList.toggle('burger_barB_On');
  burgerBarC.classList.toggle('burger_barC_On');

})