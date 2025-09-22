# Personal Site — GitHub Pages Starter

A clean, single‑page personal website with Projects, Notes, Links, and a Contact form.

## Quick Start
1. **Create the repo** named `<yourusername>.github.io` on GitHub (public).
2. **Upload these files** to the repo (drag & drop on GitHub is fine).
3. In the repo: **Settings → Pages → Build and deployment → Deploy from branch → main → /(root)**.
4. Visit `https://<yourusername>.github.io` to see it live.

## Custom Domain (optional, recommended)
- In **Settings → Pages**, set your custom domain (e.g., `example.com`).
- Add DNS in Squarespace Domains:
  - `@` A → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `www` CNAME → `<yourusername>.github.io`
- (Optional) Create a `CNAME` file in the repo root containing just `example.com`.

## Contact Form
This template supports **Formspree** or a **mailto fallback**.
- Sign up at https://formspree.io, create a form, and copy your endpoint (`https://formspree.io/f/xxxxxx`).
- In `assets/script.js`, set `FORMSPREE_ENDPOINT` to your endpoint.
- Without configuration, the form will open the user's mail app to email `rtb2744@gmail.com`.

## Editing Content
- Update the text directly in `index.html`. It's a simple single page.
- Add or remove project cards/notes/links as you like.

## Dark / Light Mode
- Click the moon button in the top right. Preference is stored in `localStorage`.

## 404 & robots
- `404.html` is included (GitHub Pages serves it automatically).
- `robots.txt` is permissive by default.
