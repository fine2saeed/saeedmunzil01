import type { Lang } from './site';

// Every interface string, in Urdu and English.
export const I18N = {
  ur: {
    skip: 'مرکزی مواد کی طرف جائیں',
    topbar: '✦ علم نور ہے، جہالت اندھیرا — آئیے اس نور کو پھیلائیں ✦',
    logo: 'س', brand: 'سعید منزل', tagline: 'علمی و ادبی پلیٹ فارم',
    nav_home: 'صفحہ اول', nav_scripture: 'آیت و حدیث', nav_daily: 'یومیہ اسباق', nav_articles: 'مضامین', nav_about: 'تعارف',
    menu: 'مینو',
    other_lang: 'English', other_lang_label: 'Read in English',
    hero_label: '✦ علم کا پیغام ✦', hero_title: 'علم کی روشنی سے', hero_highlight: 'زندگی منور', hero_title2: 'کریں',
    hero_sub: 'اسلامی تعلیمات اور جدید علوم کا ایک منفرد سنگم — جہاں دین و دنیا کا علم ایک ساتھ پروان چڑھتا ہے۔',
    hero_cta: 'مضامین پڑھیں ←',
    hero_hadith: '“علم حاصل کرنا ہر مسلمان پر فرض ہے”', hero_hadith_src: '— سنن ابن ماجہ، حدیث نمبر 224',
    iqbal_label: '✦ حکیم الامت علامہ اقبال ✦',
    iqbal_1: 'خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے',
    iqbal_2: 'خدا بندے سے خود پوچھے، بتا تیری رضا کیا ہے',
    iqbal_author: '— علامہ محمد اقبال رحمۃ اللہ علیہ',
    scripture_eyebrow: 'ہر روز ایک نیا سبق', scripture_h2: 'آج کی آیت و حدیث',
    ayat_kicker: 'آج کی آیت', hadith_kicker: 'آج کی حدیث',
    daily_eyebrow: 'روزانہ کی خوراک', daily_h2: 'یومیہ اسباق',
    featured_eyebrow: 'اس ہفتے کی سفارش', featured_h2: 'نمایاں مضمون', featured_cta: 'مکمل مضمون پڑھیں',
    articles_eyebrow: 'مضامین کی لائبریری', articles_h2: 'تازہ تحریریں',
    filter_all: 'تمام مضامین',
    cat_islamic: 'اسلامی تعلیمات', cat_modern: 'جدید علوم', cat_philosophy: 'فلسفہ', cat_history: 'تاریخ',
    quote: '“علم ایک ایسا نور ہے جو اندھیروں کو مٹا دیتا ہے، اور جہالت ایک ایسا اندھیرا ہے جو علم کی روشنی سے دور ہوتا ہے”',
    quote_author: '— امام شافعی رحمۃ اللہ علیہ',
    news_h3: 'ہمارے علمی نیوز لیٹر میں شامل ہوں',
    news_p: 'ہر ہفتے نئے مضامین، علمی مواد اور خصوصی تحریریں اپنے ای میل پر حاصل کریں۔',
    news_label: 'ای میل پتہ', news_ph: 'اپنا ای میل درج کریں', news_btn: 'سبسکرائب',
    news_note: 'ہم آپ کا ای میل کبھی کسی تیسرے فریق کے ساتھ شیئر نہیں کرتے۔',
    contact_h3: 'رابطے میں رہیں',
    contact_p: 'نئے مضامین کی اطلاع، سوال یا تجویز کے لیے ہمیں ای میل کریں۔',
    contact_btn: 'ای میل بھیجیں',
    footer_brand_p: 'اسلامی تعلیمات اور جدید علوم کا ایک منفرد پلیٹ فارم جہاں علم کی روشنی پھیلائی جاتی ہے۔ ہمارا مقصد نئی نسل کو دین و دنیا کا علم فراہم کرنا ہے۔',
    footer_links: 'فوری روابط', footer_cats: 'زمرے', footer_contact: 'رابطہ',
    footer_bottom: 'تمام حقوق محفوظ ہیں ✦ علم نور ہے',
    by: 'بقلم', min: 'منٹ', read_time: 'مطالعہ',
    share: 'شیئر کریں', share_whatsapp: 'واٹس ایپ', share_facebook: 'فیس بک', share_x: 'ایکس', copy_link: 'لنک کاپی کریں', copied: 'کاپی ہو گیا ✓',
    related: 'مزید مضامین', all_articles: '→ تمام مضامین', more_in: 'اس زمرے کے مزید مضامین',
    breadcrumb_home: 'صفحہ اول',
    category_h1_prefix: 'زمرہ:', category_count: 'مضامین',
    about_title: 'تعارف',
    about_desc: 'سعید منزل کا تعارف — اسلامی تعلیمات اور جدید علوم کا ایک علمی و ادبی پلیٹ فارم۔',
    notfound_title: 'صفحہ نہیں ملا', notfound_p: 'معذرت، آپ جس صفحے کی تلاش میں ہیں وہ موجود نہیں۔', notfound_cta: 'صفحہ اول پر جائیں',
    meta_title: 'سعید منزل | اسلامی تعلیمات اور جدید علوم کا علمی پلیٹ فارم',
    meta_desc: 'سعید منزل ایک علمی و ادبی پلیٹ فارم ہے جہاں اسلامی تعلیمات، قرآن و حدیث، اقبالیات اور جدید سائنس پر مضامین اور یومیہ اسباق شائع کیے جاتے ہیں۔',
    rss_desc: 'سعید منزل کے تازہ مضامین',
  },
  en: {
    skip: 'Skip to main content',
    topbar: '✦ Knowledge is light, ignorance is darkness — let us spread the light ✦',
    logo: 'S', brand: 'Saeed Munzil', tagline: 'A Platform for Knowledge & Literature',
    nav_home: 'Home', nav_scripture: 'Ayah & Hadith', nav_daily: 'Daily Lessons', nav_articles: 'Articles', nav_about: 'About',
    menu: 'Menu',
    other_lang: 'اردو', other_lang_label: 'اردو میں پڑھیں',
    hero_label: '✦ A Message of Knowledge ✦', hero_title: 'Illuminate life', hero_highlight: 'with the light', hero_title2: 'of knowledge',
    hero_sub: 'A distinctive meeting point of Islamic teachings and modern science — where the knowledge of faith and world grow together.',
    hero_cta: 'Read the articles →',
    hero_hadith: '“Seeking knowledge is an obligation upon every Muslim”', hero_hadith_src: '— Sunan Ibn Majah, no. 224',
    iqbal_label: '✦ Allama Iqbal, Sage of the Ummah ✦',
    iqbal_1: 'Raise your selfhood so high that, before every decree,',
    iqbal_2: 'God Himself asks the servant: tell Me, what is your wish?',
    iqbal_author: '— Allama Muhammad Iqbal',
    scripture_eyebrow: 'A new lesson every day', scripture_h2: "Today's Ayah & Hadith",
    ayat_kicker: "Today's Ayah", hadith_kicker: "Today's Hadith",
    daily_eyebrow: 'Your daily nourishment', daily_h2: 'Daily Lessons',
    featured_eyebrow: "This week's pick", featured_h2: 'Featured Article', featured_cta: 'Read full article',
    articles_eyebrow: 'The article library', articles_h2: 'Latest Writings',
    filter_all: 'All Articles',
    cat_islamic: 'Islamic Teachings', cat_modern: 'Modern Sciences', cat_philosophy: 'Philosophy', cat_history: 'History',
    quote: '“Knowledge is a light that dispels darkness, and ignorance is a darkness that the light of knowledge drives away”',
    quote_author: "— Imam ash-Shafi'i",
    news_h3: 'Join our knowledge newsletter',
    news_p: 'Receive new articles, learning material, and special writings in your inbox every week.',
    news_label: 'Email address', news_ph: 'Enter your email', news_btn: 'Subscribe',
    news_note: 'We never share your email with any third party.',
    contact_h3: 'Stay in touch',
    contact_p: 'Email us to hear about new articles, or to send a question or suggestion.',
    contact_btn: 'Send an email',
    footer_brand_p: 'A distinctive platform for Islamic teachings and modern science, where the light of knowledge is spread. Our aim is to give the next generation the knowledge of faith and world.',
    footer_links: 'Quick Links', footer_cats: 'Categories', footer_contact: 'Contact',
    footer_bottom: 'All rights reserved ✦ Knowledge is light',
    by: 'By', min: 'min', read_time: 'read',
    share: 'Share', share_whatsapp: 'WhatsApp', share_facebook: 'Facebook', share_x: 'X', copy_link: 'Copy link', copied: 'Copied ✓',
    related: 'More articles', all_articles: '← All articles', more_in: 'More in this category',
    breadcrumb_home: 'Home',
    category_h1_prefix: 'Category:', category_count: 'articles',
    about_title: 'About',
    about_desc: 'About Saeed Munzil — a platform for Islamic teachings, Iqbal studies and modern knowledge.',
    notfound_title: 'Page not found', notfound_p: "Sorry, the page you're looking for doesn't exist.", notfound_cta: 'Go to the home page',
    meta_title: 'Saeed Munzil | A Platform for Islamic Teachings & Modern Knowledge',
    meta_desc: "Articles and daily lessons on Islamic teachings, the Qur'an and Hadith, Iqbal studies, and modern science.",
    rss_desc: 'Latest articles from Saeed Munzil',
  },
} as const;

export type Key = keyof typeof I18N.ur;
export const t = (lang: Lang, key: Key): string => I18N[lang][key] ?? I18N.ur[key];

/** Localised value: {ur, en} → the right one; plain strings pass through. */
export const L = (lang: Lang, v: unknown): string => {
  if (v == null) return '';
  if (typeof v === 'object') {
    const o = v as Record<string, string>;
    return o[lang] || o.ur || o.en || '';
  }
  return String(v);
};

/** Build a URL for a language: ur lives at the root, en under /en/. */
export const href = (lang: Lang, path = '/') => (lang === 'ur' ? path : '/en' + path);

const UR_MONTHS = ['جنوری','فروری','مارچ','اپریل','مئی','جون','جولائی','اگست','ستمبر','اکتوبر','نومبر','دسمبر'];
const EN_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export function fmtDate(lang: Lang, d: Date) {
  const m = (lang === 'en' ? EN_MONTHS : UR_MONTHS)[d.getUTCMonth()];
  return lang === 'en' ? `${m} ${d.getUTCDate()}, ${d.getUTCFullYear()}` : `${d.getUTCDate()} ${m} ${d.getUTCFullYear()}`;
}

export const catLabel = (lang: Lang, cat: string) => t(lang, ('cat_' + cat) as Key) || cat;
