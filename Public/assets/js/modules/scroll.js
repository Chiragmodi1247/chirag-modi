/*==================== SHOW SCROLL UP ====================*/ 

function scrollUpHelper () {
  const scrollUp = document.getElementById('scroll-up')
  if(this.scrollY >= 580) {
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUpHelper)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: false
});

/*SCROLL HOME*/
sr.reveal('.home__scroll',{delay: 200});
sr.reveal('.home__img',{dalay: 200});

/*SCROLL ABOUT*/
sr.reveal('.about__img',{});
sr.reveal('.about__data',{delay: 400});

/*SCROLL SKILLS*/
sr.reveal('.skills__header',{}); 
sr.reveal('.skills__data',{interval: 200}); 

// SCROLL SERVICES
sr.reveal('.project__data',{});
sr.reveal('.project__img',{delay: 200});

/*SCROLL CONTACT*/
sr.reveal('.contact__information',{interval: 100});
sr.reveal('.contact__content',{interval: 100});

// SCROLL TESTIMONIAL
sr.reveal('.testimonial__content',{});

const sr2 = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: false
});

sr2.reveal('.home__data',{delay: 200});
sr2.reveal('.home__social-icon',{ interval: 200});

