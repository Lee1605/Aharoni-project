const pro_link = document.querySelector('.pro-link');
const pro_box = document.getElementById('mobile-projects');
const contain = document.getElementById('contain');
const burger = document.getElementById('burger');
const mobile_nav = document.getElementById('mobile-nav');
const body = document.getElementById('body');
const close_nav = document.getElementById('close');




contain.addEventListener('click', (event) => {
  if(pro_box.classList.contains('active')) {
    pro_box.style.height = '6rem';
    pro_box.style.overflow = 'auto';
    pro_box.classList.remove('active');
  } else {
    pro_box.style.height = '0';
    pro_box.style.overflow = 'hidden';
    pro_box.classList.add('active');
  }
})

burger.addEventListener('click', (event)=> {
  if(mobile_nav.classList.contains('active')) {
    mobile_nav.style.height = '50vh';
    mobile_nav.style.overflow = 'auto';
    mobile_nav.classList.remove('active');
    close_nav.style.opacity = '1';
    burger.style.opacity = '0';
    burger.style.zIndex = '-1';
    close_nav.style.zIndex = '1';
  } 
})

close_nav.addEventListener('click', (event) => {
  if(!mobile_nav.classList.contains('active')) {
    mobile_nav.style.height = '0';
    mobile_nav.style.overflow = 'hidden';
    mobile_nav.classList.add('active');
    close_nav.style.opacity = '0';
    burger.style.opacity = '1';
    burger.style.zIndex = '1';
    close_nav.style.zIndex = '-1';
    burger.style.transition = 'all 0.4s ease-in';
  }
})




// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     // loop: true,
//     // autoplay: {
//     //     delay: 4500,
//     //     disableOnInteraction: false,
//     // },
    
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
    
  // });


  var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
      slidesPerView: 2,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    