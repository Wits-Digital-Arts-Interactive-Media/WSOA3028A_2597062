const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalID = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
if(slides.length> 0 ){
    slides[slideIndex].classList.add("displaySlide");
intervalID = setInterval(nextSlide, 5000);
console.log(intervalID);
}


}
function showSlide( index){

}
function prevSlide(){

}
function nextSlide(){
    
}