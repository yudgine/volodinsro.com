// Internationalization (i18n) for Volodin s.r.o. website
// Supports Slovak (sk) and English (en)

const translations = {
  sk: {
    nav: {
      home: 'Domov',
      services: 'Služby',
      about: 'O nás'
    },
    hero: {
      badge: 'Softvérové služby',
      title: 'Transformujeme vaše nápady na softvérové riešenia',
      subtitle: 'Profesionálne softvérové služby pre firmy po celom svete. Vývoj, testovanie, bezpečnosť a IT konzultácie na najvyššej úrovni.',
      cta: 'Naše služby',
      cta2: 'Zistiť viac'
    },
    stats: {
      experience: { number: '10+', label: 'Rokov skúseností' },
      projects: { number: '50+', label: 'Dokončených projektov' },
      clients: { number: '30+', label: 'Spokojných klientov' },
      countries: { number: '5+', label: 'Krajín' }
    },
    services: {
      title: 'Naše služby',
      subtitle: 'Ponúkame komplexné softvérové riešenia pre vaše podnikanie',
      learnMore: 'Zistiť viac',
      codeReview: {
        title: 'Code Review & QA',
        text: 'Vykonávame revízie kódu a audity zabezpečenia kvality na udržanie vysokých štandardov softvéru.'
      },
      security: {
        title: 'Kybernetická bezpečnosť',
        text: 'Posúdenie zraniteľností, penetračné testovanie a reakcia na bezpečnostné incidenty.'
      },
      testing: {
        title: 'Testovanie softvéru',
        text: 'Kompletný cyklus testovania: funkčné, výkonnostné, bezpečnostné a automatizované testy.'
      },
      api: {
        title: 'API & Middleware',
        text: 'Údržba API a middleware pre bezproblémovú integráciu s ostatnými systémami.'
      },
      localization: {
        title: 'Lokalizácia softvéru',
        text: 'Implementácia lokalizácie a internacionalizácie softvéru pre globálne trhy.'
      },
      consulting: {
        title: 'IT Konzultácie',
        text: 'Analýza potrieb klienta, vývoj IT stratégií, plánovanie a implementácia IT projektov.'
      }
    },
    about: {
      badge: 'O nás',
      title: 'Prečo si vybrať Volodin s.r.o.?',
      text1: 'Volodin s.r.o. je softvérová spoločnosť so sídlom v Bratislave, Slovensko. Špecializujeme sa na poskytovanie komplexných softvérových služieb pre firmy po celom svete.',
      text2: 'Poskytujeme odborné služby v každej fáze vývoja softvéru - od plánovania a implementácie až po testovanie a údržbu.',
      cta: 'Viac o nás'
    },
    cta: {
      title: 'Pripravení začať?',
      text: 'Kontaktujte nás a prediskutujeme, ako môžeme pomôcť vášmu podnikaniu rásť.',
      contact: 'Kontaktovať nás',
      services: 'Pozrieť služby'
    },
    footer: {
      description: 'Profesionálne softvérové služby pre firmy po celom svete. Vývoj, testovanie, bezpečnosť a IT konzultácie.',
      navigation: 'Navigácia',
      services: 'Služby',
      contact: 'Kontakt',
      rights: 'Všetky práva vyhradené.'
    },
    servicesPage: {
      hero: {
        title: 'Naše služby',
        subtitle: 'Komplexné softvérové riešenia pre vaše podnikanie'
      },
      contact: 'Kontaktovať nás',
      codeReview: {
        badge: 'Kvalita kódu',
        title: 'Code Review & QA',
        text: 'Pomáhame vašim projektom dosiahnuť najvyššiu kvalitu kódu. Naša revízia kódu identifikuje potenciálne problémy, zlepšuje čitateľnosť a zabezpečuje dodržiavanie osvedčených postupov.',
        item1: 'Manuálna revízia kódu skúsenými vývojármi',
        item2: 'Automatizovaná analýza kódu',
        item3: 'Audity zabezpečenia kvality'
      },
      security: {
        badge: 'Bezpečnosť',
        title: 'Kybernetická bezpečnosť',
        text: 'Chránime vaše systémy pred kybernetickými hrozbami. Naša služba kybernetickej bezpečnosti zahŕňa komplexné posúdenie zraniteľností a penetračné testovanie.',
        item1: 'Posúdenie zraniteľností',
        item2: 'Penetračné testovanie',
        item3: 'Reakcia na bezpečnostné incidenty'
      },
      testing: {
        badge: 'Testovanie',
        title: 'Testovanie softvéru',
        text: 'Zabezpečujeme kvalitu vášho softvéru prostredníctvom kompletného cyklu testovania. Od funkčného testovania až po automatizované testy.',
        item1: 'Funkčné a integračné testovanie',
        item2: 'Výkonnostné a záťažové testovanie',
        item3: 'Automatizované testovanie a CI/CD'
      },
      api: {
        badge: 'Integrácia',
        title: 'API & Middleware',
        text: 'Navrhujeme a udržujeme API a middleware pre bezproblémovú integráciu medzi vašimi systémami. Zabezpečujeme spoľahlivé a efektívne dátové toky.',
        item1: 'Návrh a vývoj REST API',
        item2: 'Systémová integrácia',
        item3: 'Údržba a optimalizácia'
      },
      localization: {
        badge: 'Globálne trhy',
        title: 'Lokalizácia softvéru',
        text: 'Pripravujeme váš softvér pre globálne trhy. Implementujeme lokalizáciu a internacionalizáciu, aby váš produkt oslovil zákazníkov po celom svete.',
        item1: 'Viacjazyčná podpora',
        item2: 'Kultúrna adaptácia',
        item3: 'Internacionalizácia (i18n)'
      },
      consulting: {
        badge: 'Stratégia',
        title: 'IT Konzultácie',
        text: 'Poskytujeme strategické IT poradenstvo pre vaše podnikanie. Analyzujeme vaše potreby a pomáhame vám vybudovať efektívnu IT infraštruktúru.',
        item1: 'Analýza IT potrieb',
        item2: 'Vývoj IT stratégie',
        item3: 'Implementácia a optimalizácia'
      }
    },
    aboutPage: {
      hero: {
        title: 'O nás',
        subtitle: 'Poznajte nás a našu prácu'
      },
      story: {
        badge: 'Náš príbeh',
        title: 'Softvérová spoločnosť z Bratislavy',
        text1: 'Volodin s.r.o. je softvérová spoločnosť založená v roku 2025 so sídlom v Bratislave, Slovensko. Špecializujeme sa na poskytovanie profesionálnych softvérových služieb pre firmy po celom svete.',
        text2: 'Naša misia je jednoduchá: pomáhame firmám prosperovať v digitálnom svete prostredníctvom kvalitného softvéru, bezpečných systémov a strategického IT poradenstva.',
        text3: 'S medzinárodnou skúsenosťou a hlbokými technickými znalosťami sme pripravení riešiť aj tie najzložitejšie výzvy vášho podnikania.'
      },
      info: {
        title: 'Informácie o spoločnosti',
        subtitle: 'Oficiálne údaje o našej spoločnosti',
        details: 'Firemné údaje',
        name: 'Názov spoločnosti',
        address: 'Adresa',
        ico: 'IČO (Company Reg. Number)',
        founded: 'Rok založenia'
      },
      values: {
        title: 'Naše hodnoty',
        subtitle: 'Princípy, ktorými sa riadime pri každej spolupráci',
        quality: {
          title: 'Kvalita',
          text: 'Nerobíme kompromisy v kvalite. Každý riadok kódu, každý test a každá konzultácia je vykonaná s najvyššou starostlivosťou.'
        },
        reliability: {
          title: 'Spoľahlivosť',
          text: 'Dodržujeme termíny a sľuby. Naši klienti sa môžu na nás spoľahnúť v každom projekte.'
        },
        partnership: {
          title: 'Partnerstvo',
          text: 'Nie sme len dodávatelia - sme partneri. Spolupracujeme s klientmi na dosiahnutie ich cieľov.'
        }
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About'
    },
    hero: {
      badge: 'Software Services',
      title: 'We transform your ideas into software solutions',
      subtitle: 'Professional software services for businesses worldwide. Development, testing, security and IT consulting at the highest level.',
      cta: 'Our Services',
      cta2: 'Learn More'
    },
    stats: {
      experience: { number: '10+', label: 'Years of experience' },
      projects: { number: '50+', label: 'Completed projects' },
      clients: { number: '30+', label: 'Happy clients' },
      countries: { number: '5+', label: 'Countries' }
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer comprehensive software solutions for your business',
      learnMore: 'Learn more',
      codeReview: {
        title: 'Code Review & QA',
        text: 'We conduct code reviews and quality assurance audits to maintain high software standards.'
      },
      security: {
        title: 'Cybersecurity',
        text: 'Vulnerability assessments, penetration testing, and security incident response.'
      },
      testing: {
        title: 'Software Testing',
        text: 'Complete testing cycle: functional, performance, security, and automated tests.'
      },
      api: {
        title: 'API & Middleware',
        text: 'API and middleware maintenance for seamless integration with other systems.'
      },
      localization: {
        title: 'Software Localization',
        text: 'Implementation of software localization and internationalization for global markets.'
      },
      consulting: {
        title: 'IT Consulting',
        text: 'Client needs analysis, IT strategy development, planning and implementation of IT projects.'
      }
    },
    about: {
      badge: 'About Us',
      title: 'Why choose Volodin s.r.o.?',
      text1: 'Volodin s.r.o. is a software company based in Bratislava, Slovakia. We specialize in providing comprehensive software services for businesses worldwide.',
      text2: 'We provide expert services for every phase of software development - from planning and implementation to testing and maintenance.',
      cta: 'More about us'
    },
    cta: {
      title: 'Ready to start?',
      text: 'Contact us and let\'s discuss how we can help your business grow.',
      contact: 'Contact us',
      services: 'View services'
    },
    footer: {
      description: 'Professional software services for businesses worldwide. Development, testing, security and IT consulting.',
      navigation: 'Navigation',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.'
    },
    servicesPage: {
      hero: {
        title: 'Our Services',
        subtitle: 'Comprehensive software solutions for your business'
      },
      contact: 'Contact us',
      codeReview: {
        badge: 'Code Quality',
        title: 'Code Review & QA',
        text: 'We help your projects achieve the highest code quality. Our code review identifies potential issues, improves readability, and ensures best practices are followed.',
        item1: 'Manual code review by experienced developers',
        item2: 'Automated code analysis',
        item3: 'Quality assurance audits'
      },
      security: {
        badge: 'Security',
        title: 'Cybersecurity',
        text: 'We protect your systems from cyber threats. Our cybersecurity service includes comprehensive vulnerability assessment and penetration testing.',
        item1: 'Vulnerability assessment',
        item2: 'Penetration testing',
        item3: 'Security incident response'
      },
      testing: {
        badge: 'Testing',
        title: 'Software Testing',
        text: 'We ensure the quality of your software through a complete testing cycle. From functional testing to automated tests.',
        item1: 'Functional and integration testing',
        item2: 'Performance and load testing',
        item3: 'Automated testing and CI/CD'
      },
      api: {
        badge: 'Integration',
        title: 'API & Middleware',
        text: 'We design and maintain APIs and middleware for seamless integration between your systems. We ensure reliable and efficient data flows.',
        item1: 'REST API design and development',
        item2: 'System integration',
        item3: 'Maintenance and optimization'
      },
      localization: {
        badge: 'Global Markets',
        title: 'Software Localization',
        text: 'We prepare your software for global markets. We implement localization and internationalization so your product reaches customers worldwide.',
        item1: 'Multi-language support',
        item2: 'Cultural adaptation',
        item3: 'Internationalization (i18n)'
      },
      consulting: {
        badge: 'Strategy',
        title: 'IT Consulting',
        text: 'We provide strategic IT consulting for your business. We analyze your needs and help you build an effective IT infrastructure.',
        item1: 'IT needs analysis',
        item2: 'IT strategy development',
        item3: 'Implementation and optimization'
      }
    },
    aboutPage: {
      hero: {
        title: 'About Us',
        subtitle: 'Get to know us and our work'
      },
      story: {
        badge: 'Our Story',
        title: 'Software company from Bratislava',
        text1: 'Volodin s.r.o. is a software company founded in 2025, based in Bratislava, Slovakia. We specialize in providing professional software services for businesses worldwide.',
        text2: 'Our mission is simple: we help businesses thrive in the digital world through quality software, secure systems, and strategic IT consulting.',
        text3: 'With international experience and deep technical knowledge, we are ready to solve even the most complex challenges of your business.'
      },
      info: {
        title: 'Company Information',
        subtitle: 'Official information about our company',
        details: 'Company details',
        name: 'Company name',
        address: 'Address',
        ico: 'Company Reg. Number',
        founded: 'Year founded'
      },
      values: {
        title: 'Our Values',
        subtitle: 'Principles that guide us in every collaboration',
        quality: {
          title: 'Quality',
          text: 'We don\'t compromise on quality. Every line of code, every test, and every consultation is done with the utmost care.'
        },
        reliability: {
          title: 'Reliability',
          text: 'We keep our deadlines and promises. Our clients can rely on us in every project.'
        },
        partnership: {
          title: 'Partnership',
          text: 'We\'re not just suppliers - we\'re partners. We work with clients to achieve their goals.'
        }
      }
    }
  }
};

// i18n Class
class I18n {
  constructor() {
    this.currentLang = this.getStoredLang() || 'sk';
    this.init();
  }

  getStoredLang() {
    return localStorage.getItem('volodin-lang');
  }

  setStoredLang(lang) {
    localStorage.setItem('volodin-lang', lang);
  }

  init() {
    this.updateContent();
    this.updateHtmlLang();
    this.updateActiveButton();
  }

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLang = lang;
      this.setStoredLang(lang);
      this.updateContent();
      this.updateHtmlLang();
      this.updateActiveButton();
    }
  }

  getTranslation(key) {
    const keys = key.split('.');
    let value = translations[this.currentLang];

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value;
  }

  updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);

      if (typeof translation === 'string') {
        element.textContent = translation;
      }
    });
  }

  updateHtmlLang() {
    document.documentElement.lang = this.currentLang;
  }

  updateActiveButton() {
    const buttons = document.querySelectorAll('.lang-switcher__btn');

    buttons.forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', lang === this.currentLang);
    });
  }
}

// Export for use in main.js
window.I18n = I18n;
window.translations = translations;
