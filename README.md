# devify.no

Company website for **Dev AS** — a Norwegian web development studio. Built with Next.js 15, deployed on Vercel.

**Live:** [devify.no](https://www.devify.no)

---

## Stack

|                 |                                                                         |
| --------------- | ----------------------------------------------------------------------- |
| Framework       | [Next.js 15](https://nextjs.org) (App Router, Turbopack)                |
| Language        | TypeScript                                                              |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com)                              |
| Forms           | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Email           | [Resend](https://resend.com)                                            |
| Spam protection | [Google reCAPTCHA v3](https://developers.google.com/recaptcha)          |
| Deployment      | [Vercel](https://vercel.com)                                            |
| Package manager | pnpm                                                                    |

---

## Getting started

```bash
pnpm install
cp .env.example .env
# fill in .env values (see below)
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env` and fill in the values:

```bash
# Google reCAPTCHA v3
# https://www.google.com/recaptcha/admin
RECAPTCHA_SECRET_KEY=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=

# Resend — transactional email
# https://resend.com
RESEND_API_KEY=
RESEND_FROM_EMAIL=Dev AS <noreply@yourdomain.com>
RESEND_TO_EMAIL=you@yourdomain.com
```

> `RESEND_FROM_EMAIL` must use a domain verified in your Resend account.

## Scripts

```bash
pnpm dev          # dev server with Turbopack
pnpm build        # production build
pnpm start        # serve production build
pnpm check        # lint + typecheck
pnpm format:write # format all files with Prettier
```

## Project structure

```
src/
├── app/
│   ├── api/contact/   # Contact form API route (reCAPTCHA + Resend)
│   ├── personvern/    # Privacy policy page
│   ├── layout.tsx
│   └── page.tsx       # Main landing page
├── components/
│   └── RecaptchaWrapper.tsx
├── env.js             # Type-safe env via @t3-oss/env-nextjs
└── styles/
    └── globals.css
```

## Deployment

Deployed on Vercel. Set the environment variables in the Vercel project dashboard — do not commit `.env` to git.

```bash
vercel env add RESEND_API_KEY
vercel env add RESEND_FROM_EMAIL
vercel env add RESEND_TO_EMAIL
vercel env add RECAPTCHA_SECRET_KEY
vercel env add NEXT_PUBLIC_RECAPTCHA_SITE_KEY
```

---

[devify.no](https://www.devify.no) · [github.com/devify-no](https://github.com/devify-no)
