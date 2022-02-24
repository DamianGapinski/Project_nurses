window.sr = ScrollReveal();
sr.reveal('.img_ga, .img_happy, .img_price, p, h2, i,ul, .img, h3',{delay:300})



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

});

const what_we_do = document.querySelector('.what_we_do')
const for_patients = document.querySelector('.for_patients')
const prise = document.querySelector('.prise')
const cadre = document.querySelector('.cadre')
const contact = document.querySelector('.contact')

what_we_do.addEventListener('click',()=>{
  window.scrollTo({
    top:320,
    left:0,
    behavior:"smooth"
  })
})

for_patients.addEventListener('click',()=>{
  window.scrollTo({
    top:1350,
    left:0,
    behavior:"smooth"
  })
})
prise.addEventListener('click',()=>{
  window.scrollTo({
    top:2500,
    left:0,
    behavior:"smooth"
  })
})
cadre.addEventListener('click',()=>{
  window.scrollTo({
    top:3550,
    left:0,
    behavior:"smooth"
  })
})
contact.addEventListener('click',()=>{
  window.scrollTo({
    top:4800,
    left:0,
    behavior:"smooth"
  })
})