(function () {
  'use strict';

  const fallbackData = {
    "pt": {
      "header": { "status": "Software Engineer & Consultor de Integração @ Nossa Seguros" },
      "nav": { "thesis": "01 // Tese", "stack": "02 // Arquitetura & Stack", "work": "03 // Casos de Estudo", "trajectory": "04 // Trajetória & Formação", "community": "05 // Comunidade" },
      "hero": {
        "title": "Arquitetura pragmática de software, microsserviços e integrações empresariais robustas.",
        "lede": "Engenheiro de Software com experiência consolidada desde 2020 na construção de soluções digitais eficientes, escaláveis e de alto desempenho. Especialista em TypeScript (Nest.js), Python, Java e C/C++, com foco em sistemas de missão crítica, refatoração de código legado e deploy em Docker e Kubernetes (K8s).",
        "cta_work": "Ver casos de estudo",
        "cv_pt": "CV PT",
        "cv_en": "CV EN",
        "availability": "OPEN TO GLOBAL WORK"
      },
      "kpi": { "years": "anos a entregar software em produção", "insurance": "Integrações & Backend", "core": "BFF & Microsserviços", "community": "IDC + DEV'S.AO + TPC" },
      "thesis": {
        "label": "ENGINEERING THESIS",
        "title": "Software pragmático e seguro para o mundo real.",
        "one_title": "Resiliência & Trade-offs",
        "one": "Não existem soluções genéricas. Monólitos modulares, microsserviços ou BFFs são definidos com base em trade-offs reais, idempotência, segurança e custo operacional.",
        "two_title": "Segurança & Boas Práticas por Desenho",
        "two": "Numa era de rápida automação e IA, qualidade e segurança são inegociáveis. Clean Code, Design Patterns, autenticação OAuth2/JWT e testes rigorosos são premissas de engenharia.",
        "three_title": "Modernização & Escalabilidade sem Ruptura",
        "three": "Camadas modernas de integração e refatoração estratégica estabelecem a ponte ideal entre interfaces ágeis e sistemas legados corporativos que não podem parar."
      },
      "stack": { "label": "SYSTEM MAP", "title": "A minha superfície de engenharia." },
      "work": { "label": "SELECTED WORK", "title": "Casos que explicam o impacto." },
      "trajectory": { "label": "CAREER & EDUCATION SIGNAL", "title": "Experiência e formação construídas com rigor.", "tab_exp": "Experiência Profissional", "tab_edu": "Formação & Mentoria" },
      "community": { "title": "Conhecimento só escala quando circula.", "text": "Além de construir sistemas corporativos de alto impacto, dedico-me ativamente a fortalecer o ecossistema tecnológico. Atuo como co-fundador do IMETRO DEV CLUB (IDC), administrador da DEV'S.AO e idealizador do projeto 'Todos Podem Codar'." },
      "filters": { "all": "Todos", "enterprise": "Enterprise", "fintech": "Fintech & Segurança", "community": "Comunidade" },
      "stack_cards": [
        { "title": "Linguagens & Princípios OOP", "items": ["Java", "Python", "TypeScript / JavaScript (ES6+)", "C / C++", "Clean Code & Design Patterns"] },
        { "title": "Frameworks & Arquitetura Backend", "items": ["Java / Spring Boot", "Node.js / NestJS", "Python / Django", "APIs RESTful, GraphQL & gRPC", "Microsserviços & Monólitos Modulares"] },
        { "title": "Bases de Dados, Caching & Armazenamento", "items": ["PostgreSQL", "MySQL", "MongoDB", "Redis (Cache & Session)", "MinIO (S3 Storage)", "H2 & SQLite"] },
        { "title": "Containerização, DevOps & Mensageria", "items": ["Docker & Kubernetes (K8s)", "Apache Kafka & RabbitMQ", "GitHub Actions & Azure DevOps", "Coolify / Dokploy / Portainer", "Linux & Testes Unitários/Integração"] }
      ],
      "projects": [
        { "category": "enterprise", "name": "Insurtech Core BFF & Integrações Empresariais", "description": "Engenharia de integração corporativa na Nossa Seguros desacoplando o core Cleva com camada BFF via MuleSoft, APIs REST protegidas por OAuth2/JWT e pipelines Azure DevOps.", "stack": "Java · MuleSoft · Cleva · OAuth2 · Azure DevOps" },
        { "category": "fintech", "name": "Gateway de Pagamento Resiliente e Seguro", "description": "Integração de pagamentos multicanais (GPO Express / Multicaixa, referências bancárias, Stripe) com conciliação rigorosa, idempotência e assinatura de webhooks.", "stack": "NestJS / Spring Boot · Redis · Idempotência · Cifragem · GPO Express" },
        { "category": "enterprise", "name": "Arquitetura Distribuída & Liderança Backend", "description": "Team Leader na Cinapse SA no desenvolvimento de soluções robustas em Java/Spring Boot com mensageria assíncrona desacoplada via Kafka/RabbitMQ e alta observabilidade.", "stack": "Java / Spring Boot · Kafka · RabbitMQ · Docker · Clean Code" },
        { "category": "enterprise", "name": "Serviços Backend Escaláveis em Nest.js", "description": "Desenvolvimento de microsserviços e APIs corporativas na Mountain Light Business com TypeScript/Nest.js, persistência otimizada em PostgreSQL e MongoDB e containerização com Docker.", "stack": "TypeScript · Nest.js · PostgreSQL · MongoDB · Docker" },
        { "category": "enterprise", "name": "Aplicações Web Dinâmicas & Integração Odoo", "description": "Desenvolvimento de interfaces dinâmicas em Vue.js integradas com backend Python/Django e ERP Odoo na Znattech, com entrega contínua em equipa ágil multidisciplinar.", "stack": "Vue.js · Python / Django · Odoo ERP · REST APIs · Agile" },
        { "category": "community", "name": "IMETRO DEV CLUB (IDC) & DEV'S.AO", "description": "Co-fundação do núcleo académico de aceleração tecnológica na universidade e administração da comunidade nacional DEV'S.AO, organizando eventos técnicos e impulsionando a comunidade de software.", "stack": "Comunidade · Mentoria · Liderança · Angola" },
        { "category": "community", "name": "Todos Podem Codar", "description": "Iniciativa voluntária de mentoria técnica para estudantes universitários, ensinando lógica de programação e algoritmos fundamentais para acelerar o aprendizado em computação.", "stack": "Ensino · Algoritmos · Lógica de Programação · Python / C++" }
      ],
      "experience": [
        { "period": "13/04/2026 – Atual", "role": "Engenheiro de Software / Consultor de Integração", "level": "ESCOPO ATUAL", "company": "Nossa Seguros · Luanda, Angola", "description": "Engenharia de software e consultoria de integração corporativa, desenvolvendo APIs, microsserviços e integrações backend voltadas para performance e escalabilidade, atuando com MuleSoft, desacoplamento do core Cleva, segurança de APIs e pipelines Azure DevOps.", "signal": "Missão crítica · Integrações Enterprise · Backend & Segurança" },
        { "period": "16/05/2024 – 03/04/2026", "role": "Desenvolvedor de Software (Team Leader Backend)", "level": "LIDERANÇA TÉCNICA", "company": "Cinapse SA · Luanda, Angola", "description": "Team Leader e Engenheiro de Software Backend, responsável por liderar a equipa no desenvolvimento de soluções robustas e escaláveis em Java/Spring, assegurando uma arquitetura sólida e aplicações alinhadas com as necessidades do cliente e a estratégia do produto.", "signal": "Liderança de equipa · Java / Spring Boot · Arquitetura & Decisão" },
        { "period": "01/02/2025 – 06/03/2026", "role": "Desenvolvedor de Software (Backend Nest.js)", "level": "BACKEND OWNERSHIP", "company": "Mountain Light Business · Luanda, Angola", "description": "Desenvolvedor Backend com foco em TypeScript (Nest.js). Experiência na construção de soluções escaláveis e serviços backend robustos, contribuindo ativamente para a arquitetura de sistema e a excelência do código.", "signal": "TypeScript / Nest.js · PostgreSQL / MongoDB · Docker" },
        { "period": "2021 – 2022", "role": "Desenvolvedor de Software Jr.", "level": "PRIMEIRA EXPERIÊNCIA", "company": "Znattech · Luanda, Angola", "description": "Desenvolvedor de Software Jr com foco em Vue.js, Django e Odoo em equipa ágil. Desenvolvimento de interfaces dinâmicas e envolventes, melhorando a usabilidade e estética, além de integração com serviços de backend e ERP.", "signal": "Vue.js · Django · Odoo · Metodologias Ágeis" },
        { "period": "2020 – Atual", "role": "Desenvolvedor de Software Freelancer", "level": "AUTONOMIA & CONSULTORIA", "company": "Projetos Independentes & Consultoria · Luanda, Angola", "description": "Atuação autónoma e em consultoria na concepção e implementação de soluções criativas e robustas de ponta a ponta, dominando e aplicando tecnologias essenciais como TypeScript, Python, Java e C/C++ para responder a desafios técnicos e de negócio.", "signal": "Autonomia total · Consultoria · TypeScript, Python, Java, C/C++" }
      ],
      "education": [
        { "period": "2022 – Atual", "degree": "Ciências da Computação", "institution": "IMETRO: Instituto Superior Politécnico Metropolitano de Angola", "description": "Licenciatura superior com ênfase em Sistemas Distribuídos, Algoritmos Avançados, Estruturas de Dados, Segurança da Informação e Engenharia de Software.", "badge": "ENSINO SUPERIOR" },
        { "period": "2018 – 2022", "degree": "Técnico de Informática", "institution": "Instituto Médio Politécnico Alda Lara (IMPAL)", "description": "Formação técnica média de base sólida em desenvolvimento de software, algoritmos, arquitetura de computadores e redes de comunicação.", "badge": "FORMAÇÃO TÉCNICA MÉDIA" },
        { "period": "01/2023 – 05/2023", "degree": "Fundador & Mentor de Programação", "institution": "Projeto 'Todos Podem Codar'", "description": "Projeto voluntário concebido para ensinar a arte de codar para estudantes universitários, ajudando na consolidação da lógica de programação e algoritmos.", "badge": "MENTORIA & IMPACTO" },
        { "period": "Idiomas & Liderança", "degree": "Português (Nativo) · Inglês (B1/B2)", "institution": "Comunicação Técnica & Gestão de Stakeholders", "description": "Português nativo e Inglês técnico (compreensão B1/B2, escrita B1). Habilidade comprovada em liderança colaborativa, resolução de problemas complexos e comunicação com equipas multidisciplinares.", "badge": "COMUNICAÇÃO & LEADERSHIP" }
      ]
    },
    "en": {
      "header": { "status": "Software Engineer & Integration Consultant @ Nossa Seguros" },
      "nav": { "thesis": "01 // Thesis", "stack": "02 // Architecture & Stack", "work": "03 // Selected Work", "trajectory": "04 // Trajectory & Education", "community": "05 // Community" },
      "hero": {
        "title": "Pragmatic software architecture, microservices, and robust enterprise integrations.",
        "lede": "Software Engineer with consolidated experience since 2020 building efficient, scalable, and high-performance digital solutions. Specialist in TypeScript (Nest.js), Python, Java, and C/C++, focusing on mission-critical systems, legacy code refactoring, and deployment in Docker and Kubernetes (K8s).",
        "cta_work": "View selected work",
        "cv_pt": "CV PT",
        "cv_en": "CV EN",
        "availability": "OPEN TO GLOBAL WORK"
      },
      "kpi": { "years": "years delivering production software", "insurance": "Integrations & Backend", "core": "BFF & Microservices", "community": "IDC + DEV'S.AO + TPC" },
      "thesis": {
        "label": "ENGINEERING THESIS",
        "title": "Pragmatic and secure software built for the real world.",
        "one_title": "Resilience & Trade-offs",
        "one": "There are no one-size-fits-all architectures. Modular monoliths, microservices, or BFFs are chosen based on real trade-offs, idempotency, security, and operational cost.",
        "two_title": "Security & Best Practices by Design",
        "two": "In an era of rapid automation and AI, quality and security are non-negotiable. Clean Code, Design Patterns, OAuth2/JWT authentication, and rigorous testing are engineering fundamentals.",
        "three_title": "Modernization & Scalability without Rupture",
        "three": "Modern integration layers and strategic refactoring build an optimal bridge between agile interfaces and mission-critical legacy systems that cannot stop."
      },
      "stack": { "label": "SYSTEM MAP", "title": "My engineering surface." },
      "work": { "label": "SELECTED WORK", "title": "Cases that explain the impact." },
      "trajectory": { "label": "CAREER & EDUCATION SIGNAL", "title": "Experience and education built with rigor.", "tab_exp": "Professional Experience", "tab_edu": "Education & Mentorship" },
      "community": { "title": "Knowledge scales when it circulates.", "text": "Beyond building high-impact enterprise systems, I actively contribute to strengthening the tech ecosystem. I am a co-founder of IMETRO DEV CLUB (IDC), administrator of DEV'S.AO, and founder of the 'Todos Podem Codar' initiative." },
      "filters": { "all": "All", "enterprise": "Enterprise", "fintech": "Fintech & Security", "community": "Community" },
      "stack_cards": [
        { "title": "Languages & OOP Principles", "items": ["Java", "Python", "TypeScript / JavaScript (ES6+)", "C / C++", "Clean Code & Design Patterns"] },
        { "title": "Frameworks & Backend Architecture", "items": ["Java / Spring Boot", "Node.js / NestJS", "Python / Django", "RESTful, GraphQL & gRPC APIs", "Microservices & Modular Monoliths"] },
        { "title": "Databases, Caching & Storage", "items": ["PostgreSQL", "MySQL", "MongoDB", "Redis (Cache & Session)", "MinIO (S3 Storage)", "H2 & SQLite"] },
        { "title": "Containerization, DevOps & Messaging", "items": ["Docker & Kubernetes (K8s)", "Apache Kafka & RabbitMQ", "GitHub Actions & Azure DevOps", "Coolify / Dokploy / Portainer", "Linux & Unit/Integration Testing"] }
      ],
      "projects": [
        { "category": "enterprise", "name": "Insurtech Core BFF & Enterprise Integrations", "description": "Corporate integration engineering at Nossa Seguros decoupling Cleva core with a MuleSoft BFF layer, secure REST APIs with OAuth2/JWT, and Azure DevOps CI/CD pipelines.", "stack": "Java · MuleSoft · Cleva · OAuth2 · Azure DevOps" },
        { "category": "fintech", "name": "Resilient & Secure Payment Gateway", "description": "Multi-channel payment gateway integrations (GPO Express / Multicaixa, bank reference, Stripe) with strict reconciliation, idempotency, signed webhooks, and encryption.", "stack": "NestJS / Spring Boot · Redis · Idempotency · Encryption · GPO Express" },
        { "category": "enterprise", "name": "Distributed Architecture & Backend Leadership", "description": "Team Leader at Cinapse SA engineering scalable Java/Spring Boot solutions with decoupled asynchronous messaging via Kafka/RabbitMQ and high observability.", "stack": "Java / Spring Boot · Kafka · RabbitMQ · Docker · Clean Code" },
        { "category": "enterprise", "name": "Scalable Backend Services in Nest.js", "description": "Developing corporate microservices and APIs at Mountain Light Business with TypeScript/Nest.js, optimized persistence in PostgreSQL and MongoDB, and Docker containerization.", "stack": "TypeScript · Nest.js · PostgreSQL · MongoDB · Docker" },
        { "category": "enterprise", "name": "Dynamic Web Apps & ERP Integration", "description": "Full-stack development at Znattech crafting dynamic Vue.js interfaces integrated with Django backend and Odoo ERP within an agile multidisciplinary team.", "stack": "Vue.js · Python / Django · Odoo ERP · REST APIs · Agile" },
        { "category": "community", "name": "IMETRO DEV CLUB (IDC) & DEV'S.AO", "description": "Co-founding the university IDC acceleration hub and administrating DEV'S.AO national community, organizing technical workshops and empowering developers across Angola.", "stack": "Community · Mentorship · Leadership · Angola" },
        { "category": "community", "name": "Todos Podem Codar", "description": "Volunteer technical mentorship initiative for university students, teaching essential programming logic and algorithms to accelerate their computer science journey.", "stack": "Education · Algorithms · Programming Logic · Python / C++" }
      ],
      "experience": [
        { "period": "13/04/2026 – Present", "role": "Software Engineer / Integration Consultant", "level": "CURRENT SCOPE", "company": "Nossa Seguros · Luanda, Angola", "description": "Software engineering and enterprise integration consulting, developing high-performance, scalable backend APIs and microservices, decoupling Cleva core via MuleSoft, and managing Azure DevOps pipelines.", "signal": "Mission-critical · Enterprise Integration · Backend & Security" },
        { "period": "16/05/2024 – 03/04/2026", "role": "Software Developer (Backend Team Leader)", "level": "TECHNICAL LEADERSHIP", "company": "Cinapse SA · Luanda, Angola", "description": "Team Leader and Backend Software Engineer, leading the team in building robust, scalable Java/Spring solutions, ensuring solid architecture and product-market alignment.", "signal": "Team Leadership · Java / Spring Boot · Architecture & Decisions" },
        { "period": "01/02/2025 – 06/03/2026", "role": "Software Developer (Nest.js Backend)", "level": "BACKEND OWNERSHIP", "company": "Mountain Light Business · Luanda, Angola", "description": "Backend Developer focused on TypeScript (Nest.js). Experience building scalable solutions and robust backend services, actively contributing to system architecture and code excellence.", "signal": "TypeScript / Nest.js · PostgreSQL / MongoDB · Docker" },
        { "period": "2021 – 2022", "role": "Junior Software Developer", "level": "FIRST CORPORATE ROLE", "company": "Znattech · Luanda, Angola", "description": "Junior Software Developer focusing on Vue.js, Django, and Odoo in an agile team. Developing dynamic, engaging interfaces, improving UX and aesthetic appeal, and integrating backend/ERP services.", "signal": "Vue.js · Django · Odoo · Agile Methodologies" },
        { "period": "2020 – Present", "role": "Freelance Software Developer", "level": "AUTONOMY & CONSULTING", "company": "Independent Projects & Consulting · Luanda, Angola", "description": "Autonomous software consulting and end-to-end development, mastering and applying crucial technologies including TypeScript, Python, Java, and C/C++ to solve diverse business challenges.", "signal": "Total Autonomy · Consulting · TypeScript, Python, Java, C/C++" }
      ],
      "education": [
        { "period": "2022 – Present", "degree": "B.Sc. in Computer Science", "institution": "IMETRO: Metropolitan Polytechnic Institute of Angola", "description": "Higher education with academic focus on Distributed Systems, Advanced Algorithms, Data Structures, Information Security, and Software Engineering.", "badge": "HIGHER EDUCATION" },
        { "period": "2018 – 2022", "degree": "Computer Technician Degree", "institution": "Alda Lara Polytechnic Institute (IMPAL)", "description": "Solid technical foundation in software development, algorithms, computer architecture, and networking.", "badge": "TECHNICAL DIPLOMA" },
        { "period": "01/2023 – 05/2023", "degree": "Founder & Programming Mentor", "institution": "'Todos Podem Codar' Project", "description": "Volunteer project teaching the art of coding to university students, helping them master programming logic and algorithms.", "badge": "MENTORSHIP & TEACHING" },
        { "period": "Languages & Leadership", "degree": "Portuguese (Native) · English (B1/B2)", "institution": "Technical Communication & Stakeholder Management", "description": "Native Portuguese and technical English (B1/B2 reading/listening, B1 writing). Proven skills in collaborative leadership, strategic problem-solving, and cross-functional team communication.", "badge": "COMMUNICATION & LEADERSHIP" }
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
