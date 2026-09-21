/**
 * All page copy for LP2, EN + ES.
 *
 * English strings are taken verbatim from Section 5 of the brief.
 * Spanish is a working translation for the Houston market — have the client or
 * the copy team sign off before launch.
 */

export const languages = { en: 'EN', es: 'ES' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    meta: {
      title: 'Kayalar Motors | Quality Pre-Owned Vehicles in Houston, TX',
      description:
        "Houston's top-rated, family-run dealership. Hand-picked inventory of clean pre-owned vehicles, sales and service in-house, TIADA and NIADA certified.",
      ogAlt: 'Kayalar Motors, Houston TX',
    },

    nav: {
      call: 'Call 832-966-7907',
      langLabel: 'Language',
      skipToContent: 'Skip to inventory',
    },

    hero: {
      headline: 'Quality You Can Trust. Service You Can Count On.',
      sub: "Houston's top-rated, family-run dealership. Hand-picked inventory of clean pre-owned vehicles.",
      ctaPrimary: 'View Inventory',
      ctaSecondary: 'Call 832-966-7907',
      formHeading: 'Check availability',
      formSub: "A few quick questions, and we'll get back to you today.",
      imageAlt: 'The Kayalar Motors service team in the shop',
    },

    form: {
      fullName: 'Full Name',
      fullNamePlaceholder: 'First and last name',
      email: 'Email Address',
      emailPlaceholder: 'you@example.com',
      phone: 'Phone Number',
      phonePlaceholder: '(832) 555-0123',
      existingLoan: 'Do you have an existing car loan?',
      preApproval: 'Do you have a pre-approval?',
      selectPlaceholder: 'Select one',
      yes: 'Yes',
      no: 'No',
      submit: 'Submit',
      submitting: 'Sending\u2026',
      consent:
        'By checking this box, you expressly consent to receive customer care text messages and/or phone calls to the number provided from or on behalf of Kayalar Motors or their employees in response to your inquiry. By opting in, you understand no mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Message frequency varies per user. Message and data rates may apply. You may withdraw your consent at any time by texting "STOP" or "HELP" for help. See our Privacy Policy for more information.',
      consentLinkText: 'Privacy Policy',
      errors: {
        fullName: 'Enter your first and last name.',
        email: 'Enter a valid email address.',
        phone: 'Enter a 10-digit US phone number.',
        select: 'Pick an option.',
        network: 'That didn\u2019t go through. Try again, or call us at 832-966-7907.',
      },
    },

    confirm: {
      hero: 'You\u2019re all set. We\u2019ll be in touch shortly.',
      prefooterHeading: 'Thank you for your inquiry.',
      prefooterBody: 'We will get in touch with you shortly.',
      popupGeneric:
        'You\u2019re all set. We\u2019ll be in touch shortly with the answers you need.',
      popupVehicle:
        'Got it. We\u2019re checking on this one now and will call you back shortly.',
    },

    popup: {
      headline: 'Still deciding? Let\u2019s talk.',
      body: 'Tell us what you\u2019re looking for and we\u2019ll help you narrow it down.',
      submit: 'Submit',
      close: 'Close',
      vehicleHeadline: 'Check availability',
      vehicleBody:
        'Tell us how to reach you and we\u2019ll confirm this vehicle is still on the lot.',
    },

    promise: {
      heading: 'Our Promise to Every Customer',
      sub: 'Over 30 years of family-owned experience means we hold every vehicle \u2014 and every customer \u2014 to a higher standard.',
      bullets: [
        'Over 30 years of family-owned automotive experience.',
        'Sales and service handled in-house, start to finish.',
        'TIADA and NIADA certified dealership.',
        'Every question answered in one visit: condition, history, and financing.',
        'Quick, hassle-free paperwork, usually 3 to 4 hours.',
      ],
    },

    story: {
      heading: 'Family Owned. Built on Trust.',
      paragraphs: [
        'Kayalar Motors has been part of the Houston community for over 30 years, run by the same family from day one. That kind of longevity doesn\u2019t happen by accident. It comes from treating every customer the way we\u2019d want to be treated ourselves.',
        'We handle sales and service in-house, as proud members of TIADA and NIADA, we hold ourselves to standards that go beyond a handshake.',
        'Some decisions are best made in person. Come see the car, ask every question you have, and if it\u2019s the right fit, most of our customers are done with paperwork in three to four hours.',
      ],
      directions: 'Get directions',
      photoAlt: 'The Kayalar Motors service team in the shop',
    },

    vehicles: {
      heading: 'Ready when you are',
      sub: 'Selected, prepared, and ready to drive today. (Prices exclude TT&L & dealer fees)',
      cardCta: 'Check Availability',
      viewDetails: 'View details',
      callForPrice: 'Call for price',
      mileageSuffix: 'miles',
      belowGrid: 'Looking for something specific? Call us, we\u2019ll find it.',
      photoPending: 'Photo coming soon',
    },

    prefooter: {
      heading: 'Not sure which car is right?',
      sub: 'Tell us what you need, and we\u2019ll point you toward the right vehicle.',
      contactLine: '16230 FM 529 Road, Houston, TX 77095 / 832-966-7907',
      formHeading: 'Ready to see it in person?',
      formSub: 'A few quick questions, and we\u2019ll have it ready for you.',
    },

    footer: {
      services: 'Sales · Service · Trade-In',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      legalLabel: 'Legal',
      bottomLine:
        '\u00A9 2026 Kayalar Motors. Family-owned for 30+ years. Member of TIADA & NIADA.',
    },

    thankYou: {
      title: 'Thank you | Kayalar Motors',
      heading: 'Thank you for your inquiry.',
      body: 'We will get in touch with you shortly. If you\u2019d rather talk now, give us a call.',
      back: 'Back to the page',
    },
  },

  es: {
    meta: {
      title: 'Kayalar Motors | Autos usados de calidad en Houston, TX',
      description:
        'El concesionario familiar mejor calificado de Houston. Inventario de autos usados seleccionados a mano, ventas y servicio propios, certificados por TIADA y NIADA.',
      ogAlt: 'Kayalar Motors, Houston TX',
    },

    nav: {
      call: 'Llame al 832-966-7907',
      langLabel: 'Idioma',
      skipToContent: 'Ir al inventario',
    },

    hero: {
      headline: 'Calidad en la que puede confiar. Servicio con el que puede contar.',
      sub: 'El concesionario familiar mejor calificado de Houston. Inventario de autos usados seleccionados a mano.',
      ctaPrimary: 'Ver inventario',
      ctaSecondary: 'Llame al 832-966-7907',
      formHeading: 'Consulte disponibilidad',
      formSub: 'Unas preguntas r\u00E1pidas y le respondemos hoy mismo.',
      imageAlt: 'El equipo de servicio de Kayalar Motors en el taller',
    },

    form: {
      fullName: 'Nombre completo',
      fullNamePlaceholder: 'Nombre y apellido',
      email: 'Correo electr\u00F3nico',
      emailPlaceholder: 'usted@ejemplo.com',
      phone: 'N\u00FAmero de tel\u00E9fono',
      phonePlaceholder: '(832) 555-0123',
      existingLoan: '\u00BFTiene un pr\u00E9stamo de auto vigente?',
      preApproval: '\u00BFCuenta con una preaprobaci\u00F3n?',
      selectPlaceholder: 'Seleccione una opci\u00F3n',
      yes: 'S\u00ED',
      no: 'No',
      submit: 'Enviar',
      submitting: 'Enviando\u2026',
      consent:
        'Al marcar esta casilla, usted da su consentimiento expreso para recibir mensajes de texto y/o llamadas de atenci\u00F3n al cliente al n\u00FAmero proporcionado, por parte de Kayalar Motors o de sus empleados, en respuesta a su consulta. Al aceptar, usted entiende que su informaci\u00F3n m\u00F3vil no ser\u00E1 compartida con terceros ni afiliados con fines de marketing o promoci\u00F3n. La frecuencia de los mensajes var\u00EDa seg\u00FAn el usuario. Pueden aplicar tarifas de mensajes y datos. Puede retirar su consentimiento en cualquier momento enviando "STOP", o "HELP" para obtener ayuda. Consulte nuestra Pol\u00EDtica de Privacidad para m\u00E1s informaci\u00F3n.',
      consentLinkText: 'Pol\u00EDtica de Privacidad',
      errors: {
        fullName: 'Escriba su nombre y apellido.',
        email: 'Escriba un correo electr\u00F3nico v\u00E1lido.',
        phone: 'Escriba un tel\u00E9fono de 10 d\u00EDgitos.',
        select: 'Elija una opci\u00F3n.',
        network: 'No se pudo enviar. Int\u00E9ntelo de nuevo o ll\u00E1menos al 832-966-7907.',
      },
    },

    confirm: {
      hero: 'Listo. Nos comunicamos con usted en breve.',
      prefooterHeading: 'Gracias por su consulta.',
      prefooterBody: 'Nos pondremos en contacto con usted en breve.',
      popupGeneric:
        'Listo. Nos comunicamos con usted en breve con la informaci\u00F3n que necesita.',
      popupVehicle:
        'Recibido. Estamos verificando este veh\u00EDculo y le devolvemos la llamada en breve.',
    },

    popup: {
      headline: '\u00BFTodav\u00EDa lo est\u00E1 pensando? Hablemos.',
      body: 'Cu\u00E9ntenos qu\u00E9 est\u00E1 buscando y le ayudamos a decidir.',
      submit: 'Enviar',
      close: 'Cerrar',
      vehicleHeadline: 'Consulte disponibilidad',
      vehicleBody:
        'D\u00E9jenos sus datos y le confirmamos si este veh\u00EDculo sigue en el lote.',
    },

    promise: {
      heading: 'Nuestro compromiso con cada cliente',
      sub: 'M\u00E1s de 30 a\u00F1os como negocio familiar significan que exigimos m\u00E1s de cada veh\u00EDculo y m\u00E1s de nosotros con cada cliente.',
      bullets: [
        'M\u00E1s de 30 a\u00F1os de experiencia como negocio familiar.',
        'Ventas y servicio atendidos por nuestro propio equipo, de principio a fin.',
        'Concesionario certificado por TIADA y NIADA.',
        'Todas sus preguntas resueltas en una sola visita: condici\u00F3n, historial y financiamiento.',
        'Papeleo r\u00E1pido y sin complicaciones, normalmente de 3 a 4 horas.',
      ],
    },

    story: {
      heading: 'Negocio familiar. Construido sobre la confianza.',
      paragraphs: [
        'Kayalar Motors lleva m\u00E1s de 30 a\u00F1os siendo parte de la comunidad de Houston, dirigido por la misma familia desde el primer d\u00EDa. Esa permanencia no es casualidad. Viene de tratar a cada cliente como nos gustar\u00EDa que nos trataran a nosotros.',
        'Atendemos las ventas y el servicio con nuestro propio equipo y, como miembros de TIADA y NIADA, nos exigimos est\u00E1ndares que van m\u00E1s all\u00E1 de un apret\u00F3n de manos.',
        'Hay decisiones que se toman mejor en persona. Venga a ver el auto, haga todas las preguntas que tenga y, si es el indicado, la mayor\u00EDa de nuestros clientes termina el papeleo en tres o cuatro horas.',
      ],
      directions: 'C\u00F3mo llegar',
      photoAlt: 'El equipo de servicio de Kayalar Motors en el taller',
    },

    vehicles: {
      heading: 'Listos cuando usted lo est\u00E9',
      sub: 'Seleccionados, preparados y listos para manejar hoy. (Los precios no incluyen impuestos, placas ni cargos del concesionario)',
      cardCta: 'Consultar disponibilidad',
      viewDetails: 'Ver detalles',
      callForPrice: 'Llame por el precio',
      mileageSuffix: 'millas',
      belowGrid: '\u00BFBusca algo en espec\u00EDfico? Ll\u00E1menos y se lo conseguimos.',
      photoPending: 'Foto pr\u00F3ximamente',
    },

    prefooter: {
      heading: '\u00BFNo sabe cu\u00E1l auto es el indicado?',
      sub: 'D\u00EDganos qu\u00E9 necesita y le ayudamos a encontrar el veh\u00EDculo correcto.',
      contactLine: '16230 FM 529 Road, Houston, TX 77095 / 832-966-7907',
      formHeading: '\u00BFListo para verlo en persona?',
      formSub: 'Unas preguntas r\u00E1pidas y se lo tenemos listo.',
    },

    footer: {
      services: 'Ventas · Servicio · Intercambio',
      privacy: 'Pol\u00EDtica de Privacidad',
      terms: 'T\u00E9rminos de Servicio',
      legalLabel: 'Legal',
      bottomLine:
        '\u00A9 2026 Kayalar Motors. Negocio familiar por m\u00E1s de 30 a\u00F1os. Miembro de TIADA y NIADA.',
    },

    thankYou: {
      title: 'Gracias | Kayalar Motors',
      heading: 'Gracias por su consulta.',
      body: 'Nos pondremos en contacto con usted en breve. Si prefiere hablar ahora, ll\u00E1menos.',
      back: 'Volver a la p\u00E1gina',
    },
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in languages) return seg as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Prefixes a path with the locale. EN stays at the root. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** The counterpart path in the other language, for the EN | ES toggle. */
export function alternatePath(url: URL, target: Lang): string {
  let path = url.pathname;
  for (const code of Object.keys(languages)) {
    if (code === defaultLang) continue;
    if (path === `/${code}` || path.startsWith(`/${code}/`)) {
      path = path.slice(code.length + 1) || '/';
    }
  }
  return localizePath(path, target);
}
