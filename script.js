const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let current = 0;

function updateSlider(){
    slider.style.transform = `translateX(-${current * 100}%)`;
}

next.addEventListener('click', () => {
    current++;
    if(current >= slides.length){
        current = 0;
    }
    updateSlider();
});

prev.addEventListener('click', () => {
    current--;
    if(current < 0){
        current = slides.length - 1;
    }
    updateSlider();
});

/* AUTO SLIDE */
setInterval(() => {
    current++;
    if(current >= slides.length){
        current = 0;
    }
    updateSlider();
}, 7000);

/* MOBILE MENU CORRIGIDO */
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileHeader = document.querySelector('.mobile-header'); // Seleciona o header mobile

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileHeader.classList.toggle('active'); // Liga/desliga o efeito do botão X
});

/* FECHAR O MENU AO CLICAR EM UM LINK (BOA PRÁTICA) */
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileHeader.classList.remove('active');
    });
});