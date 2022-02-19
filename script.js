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