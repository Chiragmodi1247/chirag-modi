/**
 * Data Loader Module
 * Loads and populates content from JSON data files
 */

class DataLoader {
  constructor() {
    this.data = {};
  }

  async loadData() {
    try {
      // Determine base path - handle both file:// and http:// protocols
      let basePath = './';
      if (window.location.protocol === 'file:') {
        // For file:// protocol, use relative path
        const pathParts = window.location.pathname.split('/');
        pathParts.pop(); // Remove index.html
        basePath = pathParts.join('/') + '/';
      } else if (window.location.pathname.includes('index.html')) {
        basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
      }
      
      const [personalInfo, about, skills, services, projects, testimonials] = await Promise.all([
        fetch(`${basePath}data/personal-info.json`).then(r => {
          if (!r.ok) throw new Error(`Failed to load personal-info.json: ${r.status}`);
          return r.json();
        }),
        fetch(`${basePath}data/about.json`).then(r => {
          if (!r.ok) throw new Error(`Failed to load about.json: ${r.status}`);
          return r.json();
        }),
        fetch(`${basePath}data/skills.json`).then(r => {
          if (!r.ok) throw new Error(`Failed to load skills.json: ${r.status}`);
          return r.json();
        }),
        fetch(`${basePath}data/services.json`).then(r => {
          if (!r.ok) throw new Error(`Failed to load services.json: ${r.status}`);
          return r.json();
        }),
        fetch(`${basePath}data/projects.json`).then(r => {
          if (!r.ok) throw new Error(`Failed to load projects.json: ${r.status}`);
          return r.json();
        }),
        fetch(`${basePath}data/testimonials.json`).then(r => {
          if (!r.ok) throw new Error(`Failed to load testimonials.json: ${r.status}`);
          return r.json();
        })
      ]);

      this.data = {
        personalInfo,
        about,
        skills,
        services,
        projects,
        testimonials
      };

      this.populateContent();
      console.log('Data loaded successfully:', this.data);
    } catch (error) {
      console.error('Error loading data:', error);
      // Fallback: try with simpler paths
      try {
        const [personalInfo, about, skills, services, projects, testimonials] = await Promise.all([
          fetch('./data/personal-info.json').then(r => r.json()),
          fetch('./data/about.json').then(r => r.json()),
          fetch('./data/skills.json').then(r => r.json()),
          fetch('./data/services.json').then(r => r.json()),
          fetch('./data/projects.json').then(r => r.json()),
          fetch('./data/testimonials.json').then(r => r.json())
        ]);
        this.data = { personalInfo, about, skills, services, projects, testimonials };
        this.populateContent();
        console.log('Data loaded with fallback paths');
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        console.error('%c⚠️ IMPORTANT: You must use a local server!', 'color: red; font-size: 16px; font-weight: bold;');
        console.error('Browsers block file:// protocol requests. Use one of these:');
        console.error('1. Python: cd Public && python3 -m http.server 8000');
        console.error('2. Node: cd Public && npx http-server -p 8000');
        console.error('3. VS Code: Install "Live Server" extension');
        console.error('Then open: http://localhost:8000');
      }
    }
  }

  populateContent() {
    this.populatePersonalInfo();
    this.populateAbout();
    this.populateSkills();
    this.populateServices();
    this.populateProjects();
    this.populateTestimonials();
  }

  populatePersonalInfo() {
    const info = this.data.personalInfo;
    
    // Update meta tags
    document.querySelector('title').textContent = info.name;
    document.querySelector('meta[property="og:title"]').setAttribute('content', info.title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', info.description);
    document.querySelector('meta[property="twitter:title"]').setAttribute('content', info.title);
    document.querySelector('meta[property="twitter:description"]').setAttribute('content', info.description);

    // Update home section
    const homeTitle = document.querySelector('.home__title');
    const homeSubtitle = document.querySelector('.home__subtitle');
    const homeDescription = document.querySelector('.home__description');
    
    if (homeTitle) homeTitle.textContent = `Hi, I'm ${info.name.split(' ')[0]}`;
    if (homeSubtitle) homeSubtitle.textContent = info.title;
    if (homeDescription) homeDescription.textContent = info.description;

    // Update social links
    const socialLinks = document.querySelectorAll('.home__social-icon');
    socialLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes('linkedin')) link.setAttribute('href', info.socialLinks.linkedin);
      if (href && href.includes('github')) link.setAttribute('href', info.socialLinks.github);
      if (href && href.includes('video')) link.setAttribute('href', info.socialLinks.portfolio);
    });

    // Update footer
    const footerTitle = document.querySelector('.footer__title');
    const footerSubtitle = document.querySelector('.footer__subtitle');
    if (footerTitle) footerTitle.textContent = info.name.split(' ')[0];
    if (footerSubtitle) footerSubtitle.textContent = info.title;

    // Update footer social links
    const footerSocials = document.querySelectorAll('.footer__social');
    footerSocials.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes('linkedin')) link.setAttribute('href', info.socialLinks.linkedin);
      if (href && href.includes('instagram')) link.setAttribute('href', info.socialLinks.instagram);
      if (href && href.includes('twitter')) link.setAttribute('href', info.socialLinks.twitter);
    });

    // Update contact info
    const contactPhone = document.querySelector('a[href^="tel:"]');
    const contactEmail = document.querySelector('a[href^="mailto:"]');
    const contactInformations = document.querySelectorAll('.contact__information');
    
    if (contactPhone) {
      contactPhone.setAttribute('href', `tel:${info.phone}`);
      const phoneSubtitle = contactPhone.querySelector('.contact__subtitle');
      if (phoneSubtitle) phoneSubtitle.textContent = info.phone;
    }
    if (contactEmail) {
      contactEmail.setAttribute('href', `mailto:${info.email}`);
      const emailSubtitle = contactEmail.querySelector('.contact__subtitle');
      if (emailSubtitle) emailSubtitle.textContent = info.email;
    }
    
    // Update location (third contact information, not in an anchor)
    contactInformations.forEach((contactInfo, index) => {
      if (index === 2) { // Location is the third one
        const locationSubtitle = contactInfo.querySelector('.contact__subtitle');
        if (locationSubtitle) locationSubtitle.textContent = info.location;
      }
    });
  }

  populateAbout() {
    const about = this.data.about;
    
    const description = document.querySelector('.about__description');
    if (description) description.textContent = about.description;

    const stats = document.querySelectorAll('.about__info-title');
    const labels = document.querySelectorAll('.about__info-name');
    
    if (stats[0]) stats[0].textContent = about.stats.experience.value;
    if (labels[0]) labels[0].innerHTML = about.stats.experience.label.replace(' ', '<br>');
    
    if (stats[1]) stats[1].textContent = about.stats.projects.value;
    if (labels[1]) labels[1].innerHTML = about.stats.projects.label.replace(' ', '<br>');
    
    if (stats[2]) stats[2].textContent = about.stats.companies.value;
    if (labels[2]) labels[2].innerHTML = about.stats.companies.label.replace(' ', '<br>');
  }

  populateSkills() {
    const skills = this.data.skills;
    const skillSections = document.querySelectorAll('.skills__content');
    
    // Update Backend Skills (first section - reordered to match resume focus)
    if (skillSections[0] && skills.backend) {
      const backendTitle = skillSections[0].querySelector('.skills__title');
      const backendSubtitle = skillSections[0].querySelector('.skill__subtitle');
      const backendList = skillSections[0].querySelector('.skills__list');
      
      if (backendTitle) backendTitle.textContent = skills.backend.title;
      if (backendSubtitle) backendSubtitle.textContent = skills.backend.experience;
      
      if (backendList && skills.backend.skills) {
        backendList.innerHTML = skills.backend.skills.map(skill => {
          const skillClass = skill.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
          return `
            <div class="skills__data">
              <div class="skills__title">
                <h3 class="skills__name">${skill.name}</h3>
                <span class="skills__number">${skill.percentage}%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__${skillClass}" style="width: ${skill.percentage}%"></span>
              </div>
            </div>
          `;
        }).join('');
      }
    }
    
    // Update Frontend Skills (second section)
    if (skillSections[1] && skills.frontend) {
      const frontendTitle = skillSections[1].querySelector('.skills__title');
      const frontendSubtitle = skillSections[1].querySelector('.skill__subtitle');
      const frontendList = skillSections[1].querySelector('.skills__list');
      
      if (frontendTitle) frontendTitle.textContent = skills.frontend.title;
      if (frontendSubtitle) frontendSubtitle.textContent = skills.frontend.experience;
      
      if (frontendList && skills.frontend.skills) {
        frontendList.innerHTML = skills.frontend.skills.map(skill => {
          const skillClass = skill.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
          return `
            <div class="skills__data">
              <div class="skills__title">
                <h3 class="skills__name">${skill.name}</h3>
                <span class="skills__number">${skill.percentage}%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__${skillClass}" style="width: ${skill.percentage}%"></span>
              </div>
            </div>
          `;
        }).join('');
      }
    }
    
    // Update Architecture & DevOps Skills (third section)
    if (skillSections[2] && skills.architecture) {
      const archTitle = skillSections[2].querySelector('.skills__title');
      const archSubtitle = skillSections[2].querySelector('.skill__subtitle');
      const archList = skillSections[2].querySelector('.skills__list');
      
      if (archTitle) archTitle.textContent = skills.architecture.title;
      if (archSubtitle) archSubtitle.textContent = skills.architecture.experience;
      
      if (archList && skills.architecture.skills) {
        archList.innerHTML = skills.architecture.skills.map(skill => {
          const skillClass = skill.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
          return `
            <div class="skills__data">
              <div class="skills__title">
                <h3 class="skills__name">${skill.name}</h3>
                <span class="skills__number">${skill.percentage}%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__${skillClass}" style="width: ${skill.percentage}%"></span>
              </div>
            </div>
          `;
        }).join('');
      }
    }
  }

  populateServices() {
    const services = this.data.services;
    const serviceContents = document.querySelectorAll('.services__content');
    
    services.services.forEach((service, index) => {
      if (serviceContents[index]) {
        const icon = serviceContents[index].querySelector('.services__icon');
        const title = serviceContents[index].querySelector('.services__title');
        const modalTitle = serviceContents[index].querySelector('.services__modal-title');
        const modalServices = serviceContents[index].querySelector('.services__modal-services');
        
        if (icon) icon.className = `uil ${service.icon} services__icon`;
        if (title) title.innerHTML = service.title.replace(' ', '<br>');
        if (modalTitle) modalTitle.innerHTML = service.modal.title.replace(' ', '<br>');
        
        if (modalServices && service.modal.items) {
          modalServices.innerHTML = service.modal.items.map(item => `
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>${item}</p>
            </li>
          `).join('');
        }
      }
    });
  }

  populateProjects() {
    const projects = this.data.projects;
    const portfolioContainer = document.querySelector('.swiper-wrapper');
    
    if (!portfolioContainer) return;

    portfolioContainer.innerHTML = projects.map((project, index) => `
      <div class="portfolio__content grid swiper-slide">
        <img src="${project.image}" alt="${project.title}" class="portfolio__img">
        <div class="portfolio__data">
          <h3 class="portfolio__title">${project.title}</h3>
          <p class="portfolio__description">${project.description}</p>
          <a href="${project.link}" target="_blank" class="button button--flex button--small portfolio__button">
            Demo
            <i class="uil uil-arrow-right button__icon"></i>
          </a>
        </div>
      </div>
    `).join('');

    // Reinitialize Swiper after content update
    if (typeof Swiper !== 'undefined') {
      setTimeout(() => {
        if (window.swiperPortfolio) {
          window.swiperPortfolio.destroy(true, true);
        }
        window.swiperPortfolio = new Swiper(".portfolio__container", {
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
      }, 100);
    }
  }

  populateTestimonials() {
    const testimonials = this.data.testimonials;
    const testimonialContainer = document.querySelector('.testimonial__container > div');
    
    if (testimonialContainer && testimonials.testimonials) {
      testimonialContainer.innerHTML = testimonials.testimonials.map(testimonial => {
        const stars = Array(testimonial.rating).fill(0).map(() => 
          '<i class="uil uil-star testimonial__icon-star"></i>'
        ).join('');
        
        return `
          <div class="testimonial__content">
            <div class="testimonial__data">
              <div class="testimonial__header">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial__img">
                <div>
                  <h3 class="testimonial__name">${testimonial.name}</h3>
                  <span class="testimonial__client">${testimonial.role}</span>
                </div>
              </div>
              <div>
                ${stars}
              </div>
            </div>
            <p class="testimonial__description">${testimonial.description}</p>
          </div>
        `;
      }).join('');
    }
  }
}

// Initialize data loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const loader = new DataLoader();
  loader.loadData();
});

