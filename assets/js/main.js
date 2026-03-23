/**
* Template Name: Personal - v4.10.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  /**
   * i18n — fetches data.json over HTTP (GitHub Pages), falls back to
   * window.SITE_DATA when opened via file:// (local development).
   */
  let currentLang = localStorage.getItem('lang') || 'pt';

  const boot = async () => {
    let data;
    try {
      // Works on http:// (GitHub Pages). Fails silently on file://.
      const res = await fetch('data.json');
      if (!res.ok) throw new Error('fetch failed');
      data = await res.json();
    } catch (_) {
      // Fallback: inline data embedded in index.html for file:// usage
      data = window.SITE_DATA;
    }
    if (!data) return;
    window.SITE_DATA = data; // normalise so renderContent always reads from here
    renderContent(currentLang);
  };

  const updateText = (element, key, data) => {
    const keys = key.split('.');
    let value = data;
    for (const k of keys) {
      if (value == null || value[k] === undefined) return;
      value = value[k];
    }
    element.innerHTML = value;
  };

  const tag = (text, cls = 'tag-default') =>
    `<span class="${cls}">${text}</span>`;

  const renderContent = (lang) => {
    const siteData = window.SITE_DATA;
    if (!siteData || !siteData[lang]) return;
    const data = siteData[lang];

    // Static text nodes via data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      updateText(el, el.getAttribute('data-i18n'), data);
    });

    // ── Skills progress bars ──────────────────────────────
    const skillsContainer = document.getElementById('dynamicSkills');
    if (skillsContainer && data.skills) {
      skillsContainer.innerHTML = '';
      const half = Math.ceil(data.skills.length / 2);
      const col1 = document.createElement('div'); col1.className = 'col-lg-6';
      const col2 = document.createElement('div'); col2.className = 'col-lg-6';

      data.skills.forEach((skill, i) => {
        const html = `
          <div class="progress">
            <span class="skill">${skill.name} <i class="val">${skill.level}%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar"
                aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100"
                style="width:${skill.level}%"></div>
            </div>
          </div>`;
        (i < half ? col1 : col2).innerHTML += html;
      });
      skillsContainer.appendChild(col1);
      skillsContainer.appendChild(col2);
    }

    // ── Soft Skills tags ──────────────────────────────────
    const softEl = document.getElementById('dynamicSoftSkills');
    if (softEl && data.soft_skills) {
      softEl.innerHTML = data.soft_skills.map(s => tag(s, 'tag-soft')).join('');
    }

    // ── Tech Stack tags ───────────────────────────────────
    const stackEl = document.getElementById('dynamicTechStack');
    if (stackEl && data.tech_stack) {
      stackEl.innerHTML = data.tech_stack.map(s => tag(s, 'tag-tech')).join('');
    }

    // ── Language badges ───────────────────────────────────
    const langEl = document.getElementById('dynamicLanguages');
    if (langEl && data.languages) {
      langEl.innerHTML = data.languages.map(l =>
        `<span class="lang-badge"><strong>${l.name}</strong> <em>${l.level}</em></span>`
      ).join('');
    }

    // ── Education ─────────────────────────────────────────
    const eduEl = document.getElementById('dynamicEducation');
    if (eduEl && data.education) {
      eduEl.innerHTML = data.education.map(e => `
        <div class="resume-item">
          <h4>${e.degree}</h4>
          <h5>${e.period}</h5>
          <p><em>${e.institution}</em></p>
          <p>${e.description}</p>
        </div>`).join('');
    }

    // ── Professional Experience ───────────────────────────
    const expEl = document.getElementById('dynamicExperience');
    if (expEl && data.professional_experience) {
      expEl.innerHTML = data.professional_experience.map(e => `
        <div class="resume-item">
          <h4>${e.role}</h4>
          <h5>${e.period}</h5>
          <p><em>${e.company} — ${e.location}</em></p>
          <p>${e.description}</p>
        </div>`).join('');
    }

    // ── Projects ──────────────────────────────────────────
    const projEl = document.getElementById('dynamicProjects');
    if (projEl && data.projects) {
      projEl.innerHTML = data.projects.map(p => `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="project-card glass-card h-100">
            <div class="project-card-body">
              <h4 class="project-title">${p.name}</h4>
              <span class="project-period">${p.period}</span>
              <p class="project-desc">${p.description}</p>
            </div>
            ${p.link ? `<div class="project-card-footer">
              <a href="${p.link}" target="_blank" class="project-link">
                <i class="bi bi-box-arrow-up-right me-1"></i>Ver mais
              </a>
            </div>` : ''}
          </div>
        </div>`).join('');
    }

    // ── Contact Details ───────────────────────────────────
    if (data.personal_info) {
      const pi = data.personal_info;
      const el = (id) => document.getElementById(id);
      if (el('contactAddress')) el('contactAddress').textContent = pi.address;
      if (el('contactEmail'))   el('contactEmail').textContent   = pi.email;
      if (el('contactPhone'))   el('contactPhone').textContent   = pi.phone;

      const socials = `
        <a href="${pi.linkedin}" target="_blank" class="linkedin btn-social"><i class="bi bi-linkedin"></i></a>
        <a href="https://wa.me/${pi.whatsapp}" target="_blank" class="whatsapp btn-social"><i class="bi bi-whatsapp"></i></a>
        <a href="https://github.com/edgar3g" target="_blank" class="github btn-social"><i class="bi bi-github"></i></a>
        <a href="${pi.website}" target="_blank" class="website btn-social"><i class="bi bi-globe"></i></a>`;
      ['headerSocials', 'contactSocials'].forEach(id => {
        if (el(id)) el(id).innerHTML = socials;
      });
    }

    // ── Toggle button label ───────────────────────────────
    const btn = document.getElementById('langToggleBtn');
    if (btn) btn.textContent = lang === 'pt' ? 'EN' : 'PT';
  };

  // Language switch
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentLang = currentLang === 'pt' ? 'en' : 'pt';
      localStorage.setItem('lang', currentLang);
      renderContent(currentLang);
    });
  }

  // Boot: fetch data.json (HTTP) or fall back to inline SITE_DATA (file://)
  boot();

})()
