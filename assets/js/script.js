// mobile menu
;(function () {
  const menuBurger = document.querySelector(".toggle-menu")
  const mobileMenu = document.querySelector(".mobile-menu")

  menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("toggle")
    mobileMenu.classList.toggle("active")
  })
})();

// swiper
(function () {
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true, 

    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

})();

// modal
(function () {
  const showBtn = document.querySelector(".show-modal");
  const maskModal = document.querySelector(".mask-modal");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".close-modal");
  
  showBtn.addEventListener("click", () => {
    maskModal.classList.add("active");
    modal.classList.add("modal-active");
  });
  closeBtn.addEventListener("click", closeModal);
  maskModal.addEventListener("click", closeModal);
  
  function closeModal() {
    maskModal.classList.remove("active");
    modal.classList.remove("modal-active");
  }
  
  document.addEventListener("keyup", (e) => {
    if (e.keyCode == 27) closeModal();
  });
  

})();