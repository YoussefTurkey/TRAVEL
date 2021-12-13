let searchBtn = document.getElementById('search-btn'),
    searchBar = document.querySelector('.search-bar-container'),
    formBtn = document.getElementById('login-btn'),
    loginForm = document.querySelector('.login-form-container'),
    formClose = document.getElementById('form-close'),
    menu = document.getElementById('menu-bar'),
    navBar = document.querySelector('.navbar'),
    videoBtn = document.querySelectorAll('.vid-btn');

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    }
});

window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');

});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.getElementById('video-slider').src = src;
    })
})