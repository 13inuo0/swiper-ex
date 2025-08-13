window.addEventListener("load", function () {
  // 비주얼 스와이퍼
  //  var swiper = new Swiper(".mySwiper", {});
  const visualSwiper = new Swiper(".visualSwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //  swiper는 function은 안 넣어도 된다. 이미 스와이퍼를 뜻하고 있어서
  const itemSwiper = new Swiper(".item-swiper", {
    loop:true,
    slidesPerView: 1.5,
    spaceBetween:20,
    breackpoints: {
        590:{
                slidesPerView: 2.5
        },
        768:{
                slidesPerView: 3.5
        },
        1200:{
            slidesPerView: 5.5
    }},
  });
});
