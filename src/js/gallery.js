new Swiper('.swiper', {
    slidesPerView: 2,  
    spaceBetween: 14,  
    loop: true,       
    navigation: {
      nextEl: '.swiper-button-next',  
      prevEl: '.swiper-button-prev',  
    },
    pagination: {
      el: '.swiper-pagination',  
      clickable: true,           
    },
  });