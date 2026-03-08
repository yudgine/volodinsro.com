// Internationalization (i18n) for Volodin s.r.o. website
// Supports Slovak (sk) and English (en)

const translations = {
  sk: {
    nav: {
      home: 'Domov',
      services: 'Sluzby',
      about: 'O nas'
    },
    hero: {
      badge: 'Software Services',
      title: 'Transformujeme vase napady na softverove riesenia',
      subtitle: 'Profesionalne softverove sluzby pre firmy po celom svete. Vyvoj, testovanie, bezpecnost a IT konzultacie na najvyssej urovni.',
      cta: 'Nase sluzby',
      cta2: 'Zistit viac'
    },
    stats: {
      experience: { number: '10+', label: 'Rokov skusenosti' },
      projects: { number: '50+', label: 'Dokoncených projektov' },
      clients: { number: '30+', label: 'Spokojnych klientov' },
      countries: { number: '5+', label: 'Krajin' }
    },
    services: {
      title: 'Nase sluzby',
      subtitle: 'Ponukame komplexne softverove riesenia pre vase podnikanie',
      learnMore: 'Zistit viac',
      codeReview: {
        title: 'Code Review & QA',
        text: 'Vykonavame revizie kodu a audity zabezpecenia kvality na udrzanie vysokych standardov softveru.'
      },
      security: {
        title: 'Kyberneticka bezpecnost',
        text: 'Posudenie zranitelnosti, penetracne testovanie a reakcia na bezpecnostne incidenty.'
      },
      testing: {
        title: 'Testovanie softveru',
        text: 'Kompletny cyklus testovania: funkcne, vykonnostne, bezpecnostne a automatizovane testy.'
      },
      api: {
        title: 'API & Middleware',
        text: 'Udrzba API a middleware pre bezproblemovu integraciu s ostatnymi systemami.'
      },
      localization: {
        title: 'Lokalizacia softveru',
        text: 'Implementacia lokalizacie a internacionalizacie softveru pre globalne trhy.'
      },
      consulting: {
        title: 'IT Konzultacie',
        text: 'Analyza potrieb klienta, vyvoj IT strategii, planovanie a implementacia IT projektov.'
      }
    },
    about: {
      badge: 'O nas',
      title: 'Preco si vybrat Volodin s.r.o.?',
      text1: 'Volodin s.r.o. je softverova spolocnost so sidlom v Bratislave, Slovensko. Specializujeme sa na poskytovanie komplexnych softverovych sluzieb pre firmy po celom svete.',
      text2: 'Poskytujeme odborne sluzby v kazdej faze vyvoja softveru - od planovania a implementacie az po testovanie a udrzbu.',
      cta: 'Viac o nas'
    },
    cta: {
      title: 'Pripraveni zacat?',
      text: 'Kontaktujte nas a prediskutujeme, ako mozeme pomoct vasemu podnikaniu rast.',
      contact: 'Kontaktovat nas',
      services: 'Pozriet sluzby'
    },
    footer: {
      description: 'Profesionalne softverove sluzby pre firmy po celom svete. Vyvoj, testovanie, bezpecnost a IT konzultacie.',
      navigation: 'Navigacia',
      services: 'Sluzby',
      contact: 'Kontakt',
      rights: 'Vsetky prava vyhradene.'
    },
    servicesPage: {
      hero: {
        title: 'Nase sluzby',
        subtitle: 'Komplexne softverove riesenia pre vase podnikanie'
      },
      contact: 'Kontaktovat nas',
      codeReview: {
        badge: 'Kvalita kodu',
        title: 'Code Review & QA',
        text: 'Pomahame vasim projektom dosiahnut najvyssiu kvalitu kodu. Nasa revizia kodu identifikuje potencialne problemy, zlepsuje citatelnost a zabezpecuje dodrzovanie osvedcenych postupov.',
        item1: 'Manualna revizia kodu skusenymi vyvojarmi',
        item2: 'Automatizovana analyza kodu',
        item3: 'Audity zabezpecenia kvality'
      },
      security: {
        badge: 'Bezpecnost',
        title: 'Kyberneticka bezpecnost',
        text: 'Chranime vase systemy pred kybernetickymi hrozbami. Nasa sluzba kybernetickej bezpecnosti zahrna komplexne posudenie zranitelnosti a penetracne testovanie.',
        item1: 'Posudenie zranitelnosti',
        item2: 'Penetracne testovanie',
        item3: 'Reakcia na bezpecnostne incidenty'
      },
      testing: {
        badge: 'Testovanie',
        title: 'Testovanie softveru',
        text: 'Zabezpecujeme kvalitu vasho softveru prostrednictvom kompletneho cyklu testovania. Od funkcneho testovania az po automatizovane testy.',
        item1: 'Funkcne a integracne testovanie',
        item2: 'Vykonnostne a zatazove testovanie',
        item3: 'Automatizovane testovanie a CI/CD'
      },
      api: {
        badge: 'Integracia',
        title: 'API & Middleware',
        text: 'Navrhujeme a udrzujeme API a middleware pre bezproblemovu integraciu medzi vasimi systemami. Zabezpecujeme spolahlive a efektivne datove toky.',
        item1: 'Navrh a vyvoj REST API',
        item2: 'Systemova integracia',
        item3: 'Udrzba a optimalizacia'
      },
      localization: {
        badge: 'Globalne trhy',
        title: 'Lokalizacia softveru',
        text: 'Pripravujeme vas softver pre globalne trhy. Implementujeme lokalizaciu a internacionalizaciu, aby vas produkt oslovil zakaznikov po celom svete.',
        item1: 'Viacjazycna podpora',
        item2: 'Kulturna adaptacia',
        item3: 'Internacionalizacia (i18n)'
      },
      consulting: {
        badge: 'Strategia',
        title: 'IT Konzultacie',
        text: 'Poskytujeme strategicke IT poradenstvo pre vase podnikanie. Analyzujeme vase potreby a pomahame vam vybudovat efektivnu IT infrastrukturu.',
        item1: 'Analyza IT potrieb',
        item2: 'Vyvoj IT strategie',
        item3: 'Implementacia a optimalizacia'
      }
    },
    aboutPage: {
      hero: {
        title: 'O nas',
        subtitle: 'Poznajte nas a nasu pracu'
      },
      story: {
        badge: 'Nas pribeh',
        title: 'Softverova spolocnost z Bratislavy',
        text1: 'Volodin s.r.o. je softverova spolocnost zalozena v roku 2025 so sidlom v Bratislave, Slovensko. Specializujeme sa na poskytovanie profesionalnych softverovych sluzieb pre firmy po celom svete.',
        text2: 'Nasa misia je jednoducha: pomahame firmam prosperovat v digitalnom svete prostrednictvom kvalitneho softveru, bezpecnych systemov a strategickeho IT poradenstva.',
        text3: 'S medzinarodnou skusenostou a hlbokymi technickymi znalosami sme pripraveni riesit aj tie najzlozitejsie vyzvy vasho podnikania.'
      },
      info: {
        title: 'Informacie o spolocnosti',
        subtitle: 'Oficialne udaje o nasej spolocnosti',
        details: 'Firemne udaje',
        name: 'Nazov spolocnosti',
        address: 'Adresa',
        ico: 'ICO (Company Reg. Number)',
        founded: 'Rok zalozenia'
      },
      values: {
        title: 'Nase hodnoty',
        subtitle: 'Principy, ktorymi sa riadime pri kazdej spoluprace',
        quality: {
          title: 'Kvalita',
          text: 'Nerobime kompromisy v kvalite. Kazdy riadok kodu, kazdy test a kazda konzultacia je vykonana s najvyssou starostlivostou.'
        },
        reliability: {
          title: 'Spolahlivost',
          text: 'Dodrzujeme terminy a sluby. Nasi klienti sa mozu na nas spolahnut v kazdom projekte.'
        },
        partnership: {
          title: 'Partnerstvo',
          text: 'Nie sme len dodavatelia - sme partneri. Spolupracujeme s klientmi na dosiahnutie ich cielov.'
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
