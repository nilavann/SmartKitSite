# Smart Kids site

This folder IS the finished design. The published files are `index.html`, `css/site.css` and `js/site.js`, and they are GENERATED from the pieces in `src/` by `node build.js`.
Never edit the three generated files by hand: edit `src/`, then run `node build.js` (or `npm run build`) and commit both `src/` and the built files.
- `src/head.html`, `src/header.html`, `src/footer.html`: page shell. `src/sections/*.html`: one file per section (order set in `build.js`).
- `src/css/NN-name.css`: one file per section, plus `01-base`, `03-ui`, `15-responsive` and `16-motion` (cross-section). CSS order matters: later rules override earlier ones, so keep the order listed in `build.js`.
- `src/js/NN-name.js`: one file per feature. They are joined inside one wrapper and share variables, so they are not standalone scripts.
Do NOT redesign or rewrite it from a description. Work on it in place:
- Keep every class name, CSS variable, section order and the `img/` paths exactly as they are.
- Images live in ./img (logo.png, wordmark.png, hand-*.png). Do not rename or move them.
- Fonts load from Google Fonts (DM Serif Display, Hanken Grotesk, Caveat, Noto Sans Tamil/Devanagari). The map is a Google Maps embed. Needs internet.
- Preview from this folder with: python3 -m http.server 8000  (then open http://localhost:8000). Use HTTP so external CSS and JavaScript load consistently.
- Before changing anything, screenshot at 390px and 1440px wide; after, compare.
- Hero collage is illustrations on purpose (marked "Swap in real classroom photos"). Replace only when real photos are supplied, into img/, keeping the same layout.
- Tokens: paper #F8F5EE, ink #24152F, plum #2B1A3A, brand #6B2FA0, orange #F28A2E, yellow #FFC629, green #22A04B, navy #2C3E8C.
