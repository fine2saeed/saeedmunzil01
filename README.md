# سعید منزل — saeedmunzil.com

Urdu + English Islamic knowledge site, built with [Astro](https://astro.build) and hosted on Vercel.
Every article has its own page, so Google can index it and WhatsApp/Facebook show a proper preview.

## Write a new article

1. Create `src/content/articles/ur/your-article-name.md` (the file name becomes the URL, use English letters and dashes).
2. Optional: add the English version with the **same file name** in `src/content/articles/en/`. The two are linked automatically.
3. Start the file like this:

```markdown
---
title: "اقبال کا تصورِ خودی"
description: "ایک یا دو جملوں کا خلاصہ — یہی گوگل اور واٹس ایپ میں نظر آئے گا۔"
date: 2026-11-10
category: philosophy        # islamic | modern | philosophy | history
hero: "✒️"                  # emoji on the card
featured: false             # true = shown as the featured article on the home page
# image: /assets/khudi.jpg  # optional 1200×630 share image placed in public/assets/
# draft: true               # hide until ready
---

پہلا پیراگراف…

## ذیلی عنوان

> قرآنی آیت یا حدیث کا ترجمہ
>
> <cite>— صحیح بخاری، حدیث نمبر 1</cite>
```

4. Commit and push to GitHub. Vercel rebuilds the site in about a minute.

Reading time is calculated automatically from the text.

## Daily ayah, hadith and lessons

Edit the JSON files in `src/data/`. The site shows a different ayah and hadith each day by rotating through the list, so the more entries you add, the longer it goes without repeating. Give an entry a `date` (YYYY-MM-DD) to show it on that exact day.

## Site settings

`src/site.ts` holds the email, author name, social links and newsletter settings. Empty values are hidden on the site.

**Newsletter:** create a free signup form at MailerLite, Brevo or Buttondown, then paste its form action URL into `newsletter.action` (and the email field name into `emailField`). Until then the site shows an "email us" box rather than a form that goes nowhere.

## Run it on your computer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Deploying on Vercel

Vercel detects Astro automatically (build command `npm run build`, output folder `dist`).
After the first deploy, submit `https://www.saeedmunzil.com/sitemap-index.xml` in Google Search Console.
