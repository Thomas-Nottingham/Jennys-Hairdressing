const track = document.querySelector('.testimonial-track')
const slides = Array.from(track.children)
const next_btn = document.querySelector('.next-btn')
const previous_btn = document.querySelector('.prev-btn')

const Width_of_Single_Slide = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

function MoveSlide(track,currentSlide,targetSlide) {
    //we need to get the currentindex we know FindIndex we know that we want to return the index for slide that eqausl tagetindex so we need to use slides
    const targetIndex = slides.findIndex(function(slide) {
        return slide === targetSlide;
    })
    //calculate the amount to move
    const amountToMove = targetIndex * Width_of_Single_Slide; 
    track.style.transform = 'translateX(-' + amountToMove + 'px)';
    currentIndex = targetIndex; 
}

next_btn.addEventListener('click', function(){
    const currentSlide = slides[currentIndex];
    let nextSlide = currentSlide.nextElementSibling;
    if(!nextSlide){
        nextSlide = slides[0];
    }
    MoveSlide(track,currentSlide,nextSlide)
});

previous_btn.addEventListener('click', function(){
    const currentSlide = slides[currentIndex];
    let prevSlide = currentSlide.previousElementSibling;
    if(!prevSlide){
        prevSlide = slides[slides.length - 1];
    }
    MoveSlide(track,currentSlide,prevSlide);
});

