// Centralized route configuration — all paths managed from one place.
// Do NOT use hardcoded route strings anywhere else in the project.

export const ROUTES = {
  HOME:        '/',
  ABOUT:       '/a7x9k2m',
  WORK:        '/w8p3n6q',
  INSIGHTS:    '/i3f7j4r',
  CONTACT:     '/c9r2y5k',
  SERVICES:    '/s4t8v1z',

  // Individual service pages
  SERVICE_1:   '/s4t8v1z/m2k9p7r',
  SERVICE_2:   '/s4t8v1z/b6n3x8w',
  SERVICE_3:   '/s4t8v1z/p5q1h4d',
  SERVICE_4:   '/s4t8v1z/r7v2j9f',
  SERVICE_5:   '/s4t8v1z/t3z6c8n',
  SERVICE_6:   '/s4t8v1z/k4y7m2x',
  SERVICE_7:   '/s4t8v1z/d9w5b1q',
  SERVICE_8:   '/s4t8v1z/f8r3n6k',
  SERVICE_9:   '/s4t8v1z/h2v9t4z',
  SERVICE_10:  '/s4t8v1z/j6p1w7c',

  // Service detail (dynamic)
  SERVICE_DETAIL: '/s4t8v1z/:id',

  // Work case studies
  WORK_FANTOM:   '/w8p3n6q/x5k2m9r',
  WORK_WING:     '/w8p3n6q/q7j4v1n',
  WORK_SWISHER:  '/w8p3n6q/y3b8f6p',
};

// Maps old readable paths → new obfuscated paths (used for redirect guards)
export const LEGACY_REDIRECTS = {
  '/about':        ROUTES.ABOUT,
  '/work':         ROUTES.WORK,
  '/insights':     ROUTES.INSIGHTS,
  '/contact':      ROUTES.CONTACT,
  '/services':     ROUTES.SERVICES,
  '/services/1':   ROUTES.SERVICE_1,
  '/services/2':   ROUTES.SERVICE_2,
  '/services/3':   ROUTES.SERVICE_3,
  '/services/4':   ROUTES.SERVICE_4,
  '/services/5':   ROUTES.SERVICE_5,
  '/services/6':   ROUTES.SERVICE_6,
  '/services/7':   ROUTES.SERVICE_7,
  '/services/8':   ROUTES.SERVICE_8,
  '/services/9':   ROUTES.SERVICE_9,
  '/services/10':  ROUTES.SERVICE_10,
  '/work/fantom':  ROUTES.WORK_FANTOM,
  '/work/wing':    ROUTES.WORK_WING,
  '/work/swisher': ROUTES.WORK_SWISHER,
};
