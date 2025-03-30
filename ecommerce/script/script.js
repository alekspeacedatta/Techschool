const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
function showSlide(index) {
    if(index >= slides.length - 3){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex += slides.length - 3; 
    }
    else{
        slideIndex = index;
    }
    slider.style.transform = `translateX(-${slideIndex * 336}px)`;
}
document.getElementById('prev').addEventListener('click', () => showSlide(slideIndex -= 1));
document.getElementById('next').addEventListener('click', () => showSlide(slideIndex += 1));

const slider1 = document.getElementById('slider1');
const slides1 = document.querySelectorAll('.slide1');
let slideIndex1 = 0;
function showSlide1(index) {
    if(index >= slides1.length - 3){
        slideIndex1 = 0;
    }
    else if(index < 0){
        slideIndex1 += slides1.length - 3; 
    }
    else{
        slideIndex1 = index;
    }
    slider1.style.transform = `translateX(-${slideIndex1 * 336}px)`;
}
document.getElementById('prev1').addEventListener('click', () => showSlide1(slideIndex1 -= 1));
document.getElementById('next1').addEventListener('click', () => showSlide1(slideIndex1 += 1));