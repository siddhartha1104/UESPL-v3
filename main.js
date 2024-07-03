// menu btn
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});


// video navigation
const btns = document.querySelector(".nav-btn");
const slides = document.querySelector(".video-slide");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    // slides.forEach((slide) => {
    //     slide.classList.remove("active");
    // });

    btns[manual].classList.add("active");
    // slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});