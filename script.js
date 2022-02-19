window.sr = ScrollReveal();
sr.reveal('.img_ga, .img_happy, .img_price, p, h2, i, ul, .img, h3',{delay:300})

window.onload = ()=>{
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", topFunction);
} 


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let burgerBtn = document.querySelector('.burger_btn');
const nav = document.querySelector('nav');
const burgerBarA = document.querySelector('.burger_barA');
const burgerBarB = document.querySelector('.burger_barB');
const burgerBarC = document.querySelector('.burger_barC');

burgerBtn = document.addEventListener('click', () =>{
  nav.classList.toggle('nav_on')
  burgerBarA.classList.toggle('burger_barA_On')
  burgerBarB.classList.toggle('burger_barB_On')
  burgerBarC.classList.toggle('burger_barC_On')

})