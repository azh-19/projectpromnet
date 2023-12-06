var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

/* function init(){
    let tmbl_heart = document.querySelector('#tmbl_heart');

    tmbl_heart.addEventListener('click', () => {
    alert(' Dimasukkan ke Favorite ');
    });
} 

window.addEventListener('load', init()); */

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}