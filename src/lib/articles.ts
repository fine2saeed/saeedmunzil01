import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../site';

export type Article = CollectionEntry<'articles'> & { slug: string; lang: Lang; minutes: number };

// Average reading speeds (words per minute).
const WPM: Record<Lang, number> = { ur: 180, en: 220 };

function minutesFor(body: string, lang: Lang) {
  const words = body
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_\-`]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WPM[lang]));
}

let cache: Article[] | null = null;

export async function allArticles(): Promise<Article[]> {
  if (cache) return cache;
  const entries = await getCollection('articles', (e) => !e.data.draft);
  cache = entries
    .map((e) => {
      const [lang, slug] = e.id.split('/') as [Lang, string];
      return Object.assign(e, { lang, slug, minutes: minutesFor(e.body ?? '', lang) });
    })
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return cache;
}

export async function articlesIn(lang: Lang) {
  return (await allArticles()).filter((a) => a.lang === lang);
}

/** The same article in the other language, if it exists. */
export async function translationOf(a: Article) {
  return (await allArticles()).find((x) => x.slug === a.slug && x.lang !== a.lang);
}
