// mobile menu
;(function () {
  const menuBurger = document.querySelector(".toggle-menu")
  const mobileMenu = document.querySelector(".mobile-menu")

  menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("toggle")
    mobileMenu.classList.toggle("active")
  })
})()

// swiper run

// ;(function () {
//   const swiper = new Swiper(".review-block", {
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 10,
    
//     navigation: {
//         nextEl: '.review-arrow__right',
//         prevEl: '.review-arrow__left',
//     }    
//   })
// })()
// var swiper = new Swiper(".mySwiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


  
window.onload = function () {
    var reviewsSwiper = new Swiper('.reviews-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true, 
    
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.review-arrow__right',
            prevEl: '.review-arrow__left',
        },
    });
};

