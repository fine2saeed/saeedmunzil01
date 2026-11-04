// ─────────────────────────────────────────────────────────────
// SITE SETTINGS — edit this one file to change names, links and
// contact details across the whole website.
// Anything left as '' (empty) is simply hidden on the site.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  url: 'https://www.saeedmunzil.com',
  email: 'info@saeedmunzil.com',

  // Author name shown on every article (Urdu / English)
  author: { ur: 'سعید منزل', en: 'Saeed Munzil' },

  // Social profiles — paste full URLs. Empty ones are not shown.
  social: {
    facebook: '',
    youtube: '',
    x: '',
    whatsappChannel: '',
  },

  // Newsletter: create a free form at MailerLite, Brevo or Buttondown,
  // then paste its form "action" URL here and the email field's name.
  // Until then, the site shows an "email us" box instead of a fake form.
  newsletter: {
    action: '',
    emailField: 'email',
  },
};

export type Lang = 'ur' | 'en';
export const LANGS: Lang[] = ['ur', 'en'];

// Article categories (the key is used in the URL: /category/islamic/)
export const CATEGORIES = ['islamic', 'modern', 'philosophy', 'history'] as const;
export type Category = (typeof CATEGORIES)[number];
