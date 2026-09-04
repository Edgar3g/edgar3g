(function () {
  'use strict';

  const fallbackData = {
    "pt": {
      "header": { "status": "Software Engineer @ Nossa Seguros" },
      "nav": { "thesis": "01 // Tese", "stack": "02 // Arquitetura & Stack", "work": "03 // Casos de Estudo", "trajectory": "04 // Trajetória & Formação", "community": "05 // Comunidade" },
      "hero": {
        "title": "Arquitetura pragmática de software, integrações empresariais e sistemas seguros.",
        "lede": "Construo sistemas corporativos de missão crítica: desde monólitos modulares bem delimitados a camadas BFF sobre legados, fluxos financeiros seguros e arquiteturas orientadas a eventos.",
        "cta_work": "Ver casos de estudo",
        "cv_pt": "CV PT",
        "cv_en": "CV EN",
        "availability": "OPEN TO GLOBAL WORK"
      },
      "kpi": { "years": "anos a entregar software em produção", "insurance": "Integrações & Backend", "core": "DevEx sobre core Cleva", "community": "IDC + DEV'S.AO" },
      "thesis": {
        "label": "ENGINEERING THESIS",
        "title": "Software pragmático e seguro para o mundo real.",
        "one_title": "Resiliência & Trade-offs",
        "one": "Não existem soluções genéricas. Monólitos modulares, microsserviços ou BFFs são escolhidos com base em trade-offs reais, idempotência e custo operacional.",
        "two_title": "Segurança & Conformidade por Desenho",
        "two": "Numa era de automação e IA, a segurança não é um detalhe. Autenticação forte (OAuth2/JWT), encriptação, sanitização de dados e auditoria são premissas em cada API.",
        "three_title": "Modernização sem Ruptura",
        "three": "Camadas de BFF estabelecem uma fronteira de proteção entre interfaces ágeis e sistemas legados que não podem parar."
      },
      "stack": { "label": "SYSTEM MAP", "title": "A minha superfície de engenharia." },
      "work": { "label": "SELECTED WORK", "title": "Casos que explicam o impacto." },
      "trajectory": { "label": "CAREER & EDUCATION SIGNAL", "title": "Experiência e formação construídas com rigor.", "tab_exp": "Experiência Profissional", "tab_edu": "Formação & Mentoria" },
      "community": { "title": "Conhecimento só escala quando circula.", "text": "Além de construir sistemas, ajudo a construir o ecossistema. Sou administrador da DEV'S.AO e co-fundador do IMETRO DEV CLUB." },
      "filters": { "all": "Todos", "enterprise": "Enterprise", "fintech": "Fintech & Segurança", "community": "Comunidade" },
      "stack_cards": [
        { "title": "Enterprise Integrations & Fintech", "items": ["MuleSoft / API-Led", "Cleva Insurance Platform", "AppyPay / GPO Express", "Stripe", "Strapi CMS"] },
        { "title": "Core Backend & Security", "items": ["Java 21 / Spring Boot 3", "TypeScript / NestJS", "Python", "OAuth2 / JWT / RBAC", "Kafka / RabbitMQ"] },
        { "title": "Persistência, Cache & Armazenamento", "items": ["PostgreSQL", "MongoDB", "Redis (Cache & Session)", "MinIO / S3", "Flyway / Prisma"] },
        { "title": "DevOps, Segurança & Qualidade", "items": ["Azure DevOps (CI/CD)", "Docker / Kubernetes", "Rancher / Linux", "SonarQube / OWASP", "Integration testing"] }
      ],
      "projects": [
        { "category": "enterprise", "name": "Insurtech Core BFF & API Security", "description": "Camada BFF para desacoplar o core legado Cleva, padronizar permissões e servir aplicações internas com APIs REST protegidas.", "stack": "MuleSoft · Cleva · OAuth2 · REST · Azure DevOps" },
        { "category": "fintech", "name": "Gateway de Pagamento Resiliente e Seguro", "description": "Integração de pagamentos por referência e GPO Express com idempotência, assinatura de webhooks, conciliação e cifragem.", "stack": "NestJS / Spring Boot · AppyPay · Stripe · Redis · Security" },
        { "category": "enterprise", "name": "Arquitetura Distribuída & Mensageria", "description": "Fluxos assíncronos para comunicação desacoplada entre serviços de elevado tráfego, garantindo resiliência e observabilidade.", "stack": "Java / Spring Boot · Kafka · RabbitMQ · Docker" },
        { "category": "enterprise", "name": "KoboFace ID & Biometria em Campo", "description": "Lógica aplicada para identificação biométrica facial segura em ambientes de campo com conectividade limitada.", "stack": "Python · KoboToolbox · Biometrics · Pipeline automation" },
        { "category": "community", "name": "DEV'S.AO & IMETRO DEV CLUB", "description": "Administração de uma comunidade nacional de desenvolvedores e co-fundação de um núcleo académico de aceleração tecnológica.", "stack": "Comunidade · Educação · Angola" }
      ],
      "experience": [
        { "period": "2026 – Atual", "role": "Software Engineer", "level": "ESCOPO ATUAL", "company": "Nossa Seguros", "description": "Integrações corporativas com MuleSoft e Cleva, segurança de APIs, gateway financeiro e pipelines Azure DevOps.", "signal": "Missão crítica · Integrações enterprise · Segurança & Backend" },
        { "period": "2024 – 2026", "role": "Desenvolvedor de Software / Tech Lead", "level": "LIDERANÇA TÉCNICA", "company": "Cinapse SA", "description": "Liderança técnica de backend em Java/Spring Boot, definição de arquiteturas seguras e pragmáticas, padrões de código e auditoria.", "signal": "Arquitetura · Decisão técnica · Liderança" },
        { "period": "2025 – Atual", "role": "Desenvolvedor Backend", "level": "BACKEND OWNERSHIP", "company": "Mountain Light Business", "description": "Desenvolvimento de APIs RESTful e serviços backend com TypeScript/NestJS, PostgreSQL, MongoDB e Docker.", "signal": "APIs · Serviços Backend · Deployment" },
        { "period": "2024 – 2025", "role": "Consultor de Integração de Sistemas & Pagamentos", "level": "CONSULTORIA FREELANCE", "company": "PITEU", "description": "Integração entre plataformas de pagamento e sistemas de gestão internos com validação rigorosa de segurança e conciliação.", "signal": "Gateways de Pagamento · Segurança Transacional · FinTech" },
        { "period": "2021 – 2022", "role": "Desenvolvedor de Software Jr.", "level": "PRIMEIRA EXPERIÊNCIA", "company": "Znattech", "description": "Desenvolvimento full-stack com Vue.js, Django e Odoo, integração de APIs externas e entregas iterativas em equipa ágil.", "signal": "Full-stack · Entrega iterativa · Agilidade" },
        { "period": "2020 – Atual", "role": "Desenvolvedor Freelancer", "level": "BASE & AUTONOMIA", "company": "Projetos independentes", "description": "Construção autónoma de plataformas web, sistemas de gestão e APIs com TypeScript, Python, Java e C/C++.", "signal": "Autonomia · Produtos digitais · Versatilidade" }
      ],
      "education": [
        { "period": "2022 – Atual", "degree": "Licenciatura em Ciências da Computação", "institution": "IMETRO: Instituto Superior Politécnico Metropolitano de Angola", "description": "Foco académico em Sistemas Distribuídos, Algoritmos Avançados, Segurança e Engenharia de Software.", "badge": "ENSINO SUPERIOR" },
        { "period": "2018 – 2022", "degree": "Técnico de Informática", "institution": "Instituto Médio Politécnico Alda Lara (IMPAL)", "description": "Formação de base sólida em desenvolvimento de software, arquitetura de computadores e redes de comunicação.", "badge": "FORMAÇÃO TÉCNICA MÉDIA" },
        { "period": "2020 – 2022", "degree": "Instrutor & Mentor de Programação", "institution": "Formação de Quadros", "description": "Capacitação técnica de jovens em Lógica de Programação, Algoritmos e incentivo à carreira em Engenharia de Software.", "badge": "CAPACITAÇÃO & MENTORIA" }
      ]
    },
    "en": {
      "header": { "status": "Software Engineer @ Nossa Seguros" },
      "nav": { "thesis": "01 // Thesis", "stack": "02 // Architecture & Stack", "work": "03 // Selected Work", "trajectory": "04 // Trajectory & Education", "community": "05 // Community" },
      "hero": {
        "title": "Pragmatic software architecture, enterprise integrations and secure systems.",
        "lede": "I build mission-critical corporate systems: from well-bounded modular monoliths to BFF layers over legacy cores, secure financial flows, and event-driven architectures.",
        "cta_work": "View selected work",
        "cv_pt": "CV PT",
        "cv_en": "CV EN",
        "availability": "OPEN TO GLOBAL WORK"
      },
      "kpi": { "years": "years shipping production software", "insurance": "Integrations & Backend", "core": "DevEx over Cleva core", "community": "IDC + DEV'S.AO" },
      "thesis": {
        "label": "ENGINEERING THESIS",
        "title": "Pragmatic and secure software built for the real world.",
        "one_title": "Resilience & Trade-offs",
        "one": "There are no one-size-fits-all architectures. Modular monoliths, microservices, or BFFs are chosen based on real trade-offs, idempotency, and operational cost.",
        "two_title": "Security & Compliance by Design",
        "two": "In the era of rapid AI integration, security is paramount. Robust authentication (OAuth2/JWT), encryption, input sanitization, and audit trails are mandatory for every API.",
        "three_title": "Modernization without Rupture",
        "three": "BFF layers create a secure boundary between fast interfaces and legacy systems that cannot stop."
      },
      "stack": { "label": "SYSTEM MAP", "title": "My engineering surface." },
      "work": { "label": "SELECTED WORK", "title": "Cases that explain the impact." },
      "trajectory": { "label": "CAREER & EDUCATION SIGNAL", "title": "Experience and education built with rigor.", "tab_exp": "Professional Experience", "tab_edu": "Education & Mentorship" },
      "community": { "title": "Knowledge scales when it circulates.", "text": "Beyond building systems, I help build the ecosystem. I administer DEV'S.AO and co-founded IMETRO DEV CLUB." },
      "filters": { "all": "All", "enterprise": "Enterprise", "fintech": "Fintech & Security", "community": "Community" },
      "stack_cards": [
        { "title": "Enterprise Integrations & Fintech", "items": ["MuleSoft / API-Led", "Cleva Insurance Platform", "AppyPay / GPO Express", "Stripe", "Strapi CMS"] },
        { "title": "Core Backend & Security", "items": ["Java 21 / Spring Boot 3", "TypeScript / NestJS", "Python", "OAuth2 / JWT / RBAC", "Kafka / RabbitMQ"] },
        { "title": "Persistence, Cache & Storage", "items": ["PostgreSQL", "MongoDB", "Redis (Cache & Session)", "MinIO / S3", "Flyway / Prisma"] },
        { "title": "DevOps, Security & Quality", "items": ["Azure DevOps (CI/CD)", "Docker / Kubernetes", "Rancher / Linux", "SonarQube / OWASP", "Integration testing"] }
      ],
      "projects": [
        { "category": "enterprise", "name": "Insurtech Core BFF & API Security", "description": "A BFF layer decoupling the Cleva legacy core, standardizing authorization and serving internal apps with secure REST APIs.", "stack": "MuleSoft · Cleva · OAuth2 · REST · Azure DevOps" },
        { "category": "fintech", "name": "Resilient & Secure Payment Gateway", "description": "Reference and GPO Express payment integrations with idempotency, signed webhooks, reconciliation, and data encryption.", "stack": "NestJS / Spring Boot · AppyPay · Stripe · Redis · Security" },
        { "category": "enterprise", "name": "Distributed Architecture & Messaging", "description": "Asynchronous flows for decoupled communication between high-traffic services, ensuring resilience and observability.", "stack": "Java / Spring Boot · Kafka · RabbitMQ · Docker" },
        { "category": "enterprise", "name": "KoboFace ID & Field Biometrics", "description": "Applied logic for secure facial biometric identification in field environments with limited connectivity.", "stack": "Python · KoboToolbox · Biometrics · Pipeline automation" },
        { "category": "community", "name": "DEV'S.AO & IMETRO DEV CLUB", "description": "Administration of a national developer community and co-founding an academic tech acceleration hub.", "stack": "Community · Education · Angola" }
      ],
      "experience": [
        { "period": "2026 – Present", "role": "Software Engineer", "level": "CURRENT SCOPE", "company": "Nossa Seguros", "description": "Enterprise integrations with MuleSoft and Cleva, API security, financial gateway, and Azure DevOps pipelines.", "signal": "Mission-critical · Enterprise integration · Security & Backend" },
        { "period": "2024 – 2026", "role": "Software Developer / Tech Lead", "level": "TECHNICAL LEADERSHIP", "company": "Cinapse SA", "description": "Technical leadership of the backend team in Java/Spring Boot, secure architecture design, coding standards, and security audits.", "signal": "Architecture · Technical decisions · Leadership" },
        { "period": "2025 – Present", "role": "Backend Developer", "level": "BACKEND OWNERSHIP", "company": "Mountain Light Business", "description": "Development of RESTful APIs and backend services with TypeScript/NestJS, PostgreSQL, MongoDB, and Docker.", "signal": "APIs · Backend Services · Deployment" },
        { "period": "2024 – 2025", "role": "Systems & Payment Integration Consultant", "level": "FREELANCE CONSULTING", "company": "PITEU", "description": "Integration between payment platforms and internal management systems, ensuring strict security validation and reconciliation.", "signal": "Payment Gateways · Transactional Security · FinTech" },
        { "period": "2021 – 2022", "role": "Jr. Software Developer", "level": "FIRST PROFESSIONAL ROLE", "company": "Znattech", "description": "Full-stack development with Vue.js, Django, and Odoo, third-party API integrations, and iterative delivery in an agile team.", "signal": "Full-stack · Iterative delivery · Agility" },
        { "period": "2020 – Present", "role": "Freelance Developer", "level": "FOUNDATION & AUTONOMY", "company": "Independent projects", "description": "Independent delivery of web platforms, management systems, and APIs with TypeScript, Python, Java, and C/C++.", "signal": "Autonomy · Digital products · Versatility" }
      ],
      "education": [
        { "period": "2022 – Present", "degree": "B.Sc. in Computer Science", "institution": "IMETRO: Metropolitan Polytechnic Institute of Angola", "description": "Academic focus on Distributed Systems, Advanced Algorithms, Security, and Software Engineering.", "badge": "HIGHER EDUCATION" },
        { "period": "2018 – 2022", "degree": "Computer Technician Degree", "institution": "Alda Lara Polytechnic Institute (IMPAL)", "description": "Solid technical foundation in software development, computer architecture, and networking.", "badge": "HIGH SCHOOL DIPLOMA" },
        { "period": "2020 – 2022", "degree": "Programming Instructor & Mentor", "institution": "Formação de Quadros", "description": "Teaching youth programming logic, algorithms, and encouraging careers in Software Engineering.", "badge": "TRAINING & MENTORSHIP" }
      ]
    }
  };

  let lang = localStorage.getItem('lang') || 'pt';

  const get = (obj, path) => path.split('.').reduce((val, key) => (val && val[key] !== undefined ? val[key] : null), obj);

  const renderStack = (cards) => {
    const container = document.getElementById('dynamicStack');
    if (!container || !cards) return;
    container.innerHTML = cards.map((card, i) => `
      <article class="stack-card">
        <h3><span>0${i + 1} / MODULE</span>${card.title}</h3>
        <div class="tags">
          ${card.items.map(item => `<span class="tag">${item}</span>`).join('')}
        </div>
      </article>
    `).join('');
  };

  const renderProjects = (projects) => {
    const container = document.getElementById('dynamicProjects');
    if (!container || !projects) return;
    container.innerHTML = projects.map((project, i) => `
      <article class="project-card" data-category="${project.category}">
        <span class="project-index">0${i + 1} / ${project.category.toUpperCase()}</span>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <span class="project-meta">${project.stack}</span>
      </article>
    `).join('');
  };

  const renderExperience = (experience) => {
    const container = document.getElementById('dynamicExperience');
    if (!container || !experience) return;
    const total = experience.length;
    container.innerHTML = experience.map((item, index) => `
      <article class="timeline-item">
        <span class="timeline-step">0${total - index}</span>
        <div class="timeline-content">
          <span class="timeline-period">${item.period}</span>
          ${item.level ? `<span class="timeline-level">${item.level}</span>` : ''}
          <h3>${item.role}</h3>
          <strong class="timeline-company">${item.company}</strong>
          <p>${item.description}</p>
          ${item.signal ? `<span class="timeline-signal">${item.signal}</span>` : ''}
        </div>
      </article>
    `).join('');
  };

  const renderEducation = (education) => {
    const container = document.getElementById('dynamicEducation');
    if (!container || !education) return;
    container.innerHTML = education.map((item) => `
      <article class="education-card">
        <div class="education-header">
          <span class="education-period">${item.period}</span>
          ${item.badge ? `<span class="education-badge">${item.badge}</span>` : ''}
        </div>
        <h3>${item.degree}</h3>
        <span class="education-institution">${item.institution}</span>
        <p>${item.description}</p>
      </article>
    `).join('');
  };

  const render = (data) => {
    document.documentElement.lang = lang === 'pt' ? 'pt-AO' : 'en';

    // Update text i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = get(data, el.dataset.i18n);
      if (val) el.textContent = val;
    });

    renderStack(data.stack_cards);
    renderProjects(data.projects);
    renderExperience(data.experience);
    renderEducation(data.education);

    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
  };

  const boot = async () => {
    // 1. Render fallback immediately so nothing is ever blank!
    const defaultData = fallbackData[lang] || fallbackData.pt;
    render(defaultData);

    // 2. Try fetching data.json for dynamic updates
    try {
      const res = await fetch('data.json');
      if (res.ok) {
        const json = await res.json();
        const langData = json[lang] || json.pt;
        render(langData);
      }
    } catch (err) {
      console.log('Running on fallback dataset:', err);
    }
  };

  // Language Toggle
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      lang = lang === 'pt' ? 'en' : 'pt';
      localStorage.setItem('lang', lang);
      boot();
    });
  }

  // Work Filter Tabs
  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      document.querySelectorAll('.project-card').forEach((card) => {
        card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
      });
    });
  });

  // Trajectory vs Education Tabs
  document.querySelectorAll('.trajectory-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.trajectory-btn').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const tab = button.dataset.tab;
      const expContainer = document.getElementById('dynamicExperience');
      const eduContainer = document.getElementById('dynamicEducation');

      if (tab === 'experience') {
        expContainer.classList.remove('is-hidden');
        eduContainer.classList.add('is-hidden');
      } else {
        expContainer.classList.add('is-hidden');
        eduContainer.classList.remove('is-hidden');
      }
    });
  });

  // Copy Email Toast
  const copyBtn = document.getElementById('copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', async (event) => {
      try {
        const email = event.currentTarget.dataset.email || 'dikengeofficial@gmail.com';
        await navigator.clipboard.writeText(email);
        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = lang === 'pt' ? 'E-mail copiado com sucesso!' : 'Email copied to clipboard!';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2200);
        }
      } catch (_) {}
    });
  }

  // Mobile Menu Toggle
  const menuButton = document.getElementById('menuButton');
  const siteHeader = document.querySelector('.site-header');
  if (menuButton && siteHeader) {
    menuButton.addEventListener('click', () => {
      const open = siteHeader.classList.toggle('menu-open');
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close menu when clicking nav link
    document.querySelectorAll('#siteNav a').forEach((link) => {
      link.addEventListener('click', () => {
        siteHeader.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll Reveal Animations
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );

      revealElements.forEach((el) => observer.observe(el));
    } else {
      // Fallback for older browsers
      revealElements.forEach((el) => el.classList.add('revealed'));
    }

    // Safety fallback: reveal all elements after 1.5s just in case
    setTimeout(() => {
      revealElements.forEach((el) => el.classList.add('revealed'));
    }, 1500);
  };

  // ScrollSpy Active Link Highlighting
  const initScrollSpy = () => {
    const navLinks = [...document.querySelectorAll('#siteNav a')];
    const sections = document.querySelectorAll('main section[id]');

    if ('IntersectionObserver' in window) {
      const spyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              navLinks.forEach((link) => {
                link.classList.toggle('active', link.hash === `#${entry.target.id}`);
              });
            }
          });
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );

      sections.forEach((sec) => spyObserver.observe(sec));
    }
  };

  // Boot
  boot();
  initScrollReveal();
  initScrollSpy();
})();
