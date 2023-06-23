document.addEventListener("DOMContentLoaded", function () {
   var video = document.getElementById("myVideo");
   var videoContainer = document.getElementById("videoContainer");
   var imageContainer = document.getElementById("imageContainer");

   video.onended = function () {
      videoContainer.style.display = "none";
      imageContainer.style.display = "block";
   };
});

const swiper = new Swiper('.swiper', {
   direction: 'horizontal',
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   autoplay: {
      delay: 2000,
   },

   speed: 800,
   effect: 'slider',
   slidesPerView: 1.5,
   centeredSlides: true,
   spaceBetween: 10,
});

const toggleButtons = document.querySelectorAll('.footer__toggle');
const blocks = document.querySelectorAll('.footer__block');

toggleButtons.forEach((button, index) => {
   button.addEventListener('click', () => {
      blocks[index].classList.toggle('expanded');
   });
});

function handleResize() {
   if (window.innerWidth <= 700) {
      blocks.forEach((block) => {
         block.classList.remove('expanded');
      });
   } else {
      blocks.forEach((block) => {
         block.classList.add('expanded');
      });
   }
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);