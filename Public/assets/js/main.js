/**
 * Main JavaScript Entry Point
 * Loads all modules in order
 */

// Load modules sequentially (since we can't use ES6 imports in static HTML)
(function() {
  // Navigation module
  const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

  if(navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }

  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }

  const navLink = document.querySelectorAll('.nav__link')
  function linkAction () {
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))

  const sections = document.querySelectorAll('section[id]')
  function scrollActive () {
    const scrollY = window.pageYOffset
    sections.forEach( current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50
      const sectionId = current.getAttribute('id')
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)

  function scrollHeader () {
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) {
      nav.classList.add('scroll-header')
    } else {
      nav.classList.remove('scroll-header')
    }
  }
  window.addEventListener('scroll', scrollHeader)

  // Skills module
  const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

  function toggleSkills () {
    let itemClass = this.parentNode.className
    if (itemClass === 'skills__content skills__close') {
      this.parentNode.className = 'skills__content skills__open'
    } else {
      this.parentNode.className = 'skills__content skills__close'
    }
  }
  skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
  })

  // Services module
  const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

  let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
  }

  modalBtns.forEach((modalBtn,index) => {
    modalBtn.addEventListener('click', () => {
      modal(index)
    })
  })

  modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
      modalViews.forEach(modalView => {
        modalView.classList.remove('active-modal')
      })
    })
  })

  // Portfolio module
  let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  // Theme module
  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'uil-sun'

  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

  // Default to dark mode if no preference is saved
  if (selectedTheme === null) {
    document.body.classList.add(darkTheme)
    document.documentElement.classList.add(darkTheme)
    themeButton.classList.add(iconTheme) // Show sun icon (to switch to light)
    localStorage.setItem('selected-theme', 'dark')
    localStorage.setItem('selected-icon', 'uil-sun')
  } else {
    // Apply saved preference
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    document.documentElement.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
  }

  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    document.documentElement.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  })

  // Scroll module
  function scrollUpHelper () {
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 580) {
      scrollUp.classList.add('show-scroll')
    } else {
      scrollUp.classList.remove('show-scroll')
    }
  }
  window.addEventListener('scroll', scrollUpHelper)

  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
  });

  sr.reveal('.home__scroll',{delay: 200});
  sr.reveal('.home__img',{dalay: 200});
  sr.reveal('.about__img',{});
  sr.reveal('.about__data',{delay: 400});
  sr.reveal('.skills__header',{}); 
  sr.reveal('.skills__data',{interval: 200}); 
  sr.reveal('.project__data',{});
  sr.reveal('.project__img',{delay: 200});
  sr.reveal('.contact__information',{interval: 100});
  sr.reveal('.contact__content',{interval: 100});
  sr.reveal('.testimonial__content',{});

  const sr2 = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: false
  });

  sr2.reveal('.home__data',{delay: 200});
  sr2.reveal('.home__social-icon',{ interval: 200});
})();
