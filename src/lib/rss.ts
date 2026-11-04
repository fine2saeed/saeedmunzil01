import rss from '@astrojs/rss';
import { articlesIn } from './articles';
import { SITE, type Lang } from '../site';
import { t, href } from '../i18n';

export async function feed(lang: Lang) {
  const posts = await articlesIn(lang);
  return rss({
    title: t(lang, 'brand'),
    description: t(lang, 'rss_desc'),
    site: SITE.url + href(lang, '/'),
    customData: `<language>${lang}</language>`,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: href(lang, `/articles/${p.slug}/`),
      categories: [p.data.category],
    })),
  });
}
