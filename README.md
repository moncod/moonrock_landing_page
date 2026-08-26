# MoonRock landing page

A dependency-free static company website built with semantic HTML, CSS, and vanilla JavaScript. It requires no build step, server runtime, cookies, trackers, or external dependencies.

## Local development

Open `index.html` directly, or run:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000`. Using a local server most closely matches GitHub Pages.

## Content updates

All visible content is in `index.html`:

- Company name and description: page metadata, navigation, hero, About, and footer
- Services: `#services`
- Development process: `#solutions`
- Projects and capabilities: `#projects`
- Technology list: `#technologies`
- Email, phone, location, and social profiles: `#contact`

Only publish verified information. Search for `YOUR-` and `Owner placeholder` to find incomplete owner-supplied values.

## Images and identity

- Logo mark: `.brand` elements in `index.html`; replace with a real logo image when supplied
- Hero visual: `.system` in `index.html` (currently an honest architecture illustration, not a product screenshot)
- IAMS screenshots: `.mock` in `index.html`; replace with optimized AVIF/WebP images in `assets/images/`, including useful `alt`, explicit `width`/`height`, and `loading="lazy"`
- Social preview: `assets/images/social-preview.svg`; a 1200×630 placeholder that should be replaced with an optimized PNG/JPG for maximum platform support
- Favicon and touch icon: `assets/icons/favicon.svg` and `assets/icons/apple-touch-icon.svg`

## Production URL

The current branch-deployment URL is:

`https://moncod.github.io/moonrock_landing_page/`

It is configured in the canonical, Open Graph, Twitter, Organization JSON-LD, sitemap, and robots metadata. Update all of those locations if the public URL changes.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select `main`.
5. Select `/ (root)`.
6. Click **Save**.
7. Wait for GitHub Pages to publish the site.
8. Open `https://moncod.github.io/moonrock_landing_page/`.

No GitHub Actions workflow is required because the repository contains deployable static files and has no build step. All runtime asset paths are relative, so the site also remains compatible with a repository subpath.

To publish later updates: edit the files → commit the changes → push `main`. GitHub Pages redeploys automatically.

## Add a custom domain later

Do not add a `CNAME` until the actual domain is confirmed.

1. Open **Settings → Pages** and enter the real domain in **Custom domain**.
2. Configure the DNS records shown by GitHub at the domain provider.
3. For an apex domain such as `example.com`, use GitHub's current apex-domain DNS instructions.
4. For a `www` subdomain such as `www.example.com`, use GitHub's current subdomain/CNAME instructions.
5. Add a root-level `CNAME` file containing only the exact configured domain if GitHub does not create it automatically.
6. Wait for DNS verification, then enable **Enforce HTTPS**.
7. Replace the GitHub Pages URL in `index.html`, `robots.txt`, and `sitemap.xml` with the HTTPS custom-domain URL.

The domain names above are examples only; they are not MoonRock configuration.

## Production checklist

- [ ] Replace the placeholder email and confirm `mailto:` links
- [ ] Add verified phone and location, or remove those rows
- [ ] Add real GitHub and LinkedIn links, or keep them as non-clickable placeholders
- [ ] Replace IAMS screenshot placeholders with authentic product images
- [ ] Add the final company logo if one is available
- [ ] Replace the SVG social preview with a broadly supported PNG/JPG export
- [ ] Re-test navigation, links, metadata, mobile layouts, and console after content changes
- [ ] Enable branch deployment from `main` and `/ (root)` in GitHub Pages settings

No analytics are included. If analytics are added later, document the provider and update the site’s privacy disclosure before deployment.
