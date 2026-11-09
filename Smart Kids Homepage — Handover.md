# Smart Kids Homepage — Handover

Nov 9, 2026 · @Nilavann

## Summary

The Smart Kids Skill Development Centre homepage is built as a working, phone-first single page with 10 visible sections, the animated handprint logo and a WhatsApp enquiry form. The structure, design and interactions are done; the page is waiting on real content from the centre (photos, educators, reviews, timings, fees), and a few preview-only items must be removed before it goes live.

| Item | Link | What it is |
| --- | --- | --- |
| Homepage (live preview) | [Smart Kids Skill Development Centre](https://claude.ai/artifact/VCfQgfTaHFAL4EgEQ5bx7k) | The built page: one HTML file plus 6 images |
| Design canvas | [Smart Kids Landing](https://claude.ai/artifact/8a7CHuYnxNGbpB6nVQZSiX) | Visual design, colour system, logo motion board, wireframes |
| Plan doc | [Smart Kids Redesign — Design Plan](https://claude.ai/artifact/DdracH8nSf3UteCeT633oX) | Original plan, design system, motion and SEO notes |
| Content template | [Smart Kids Website — Content Template](https://claude.ai/artifact/FDkQv5KHaxmkGsurFTk7yA) | All copy by section, missing-content checklist, image specs |

All four links are private until shared from each page's Share menu.

## Design system

The look is warm paper with serif headings, coloured from the logo. The hero keeps the playful scrapbook collage the client chose; every section below it uses a calmer, cleaner version of the same system. All values live as CSS custom properties at the top of `css/site.css`.

**Colour (60% neutrals, 30% plum and purple, 10% handprint accents)**

| Token | Value | Role |
| --- | --- | --- |
| `--paper` / `--paper-2` | #F8F5EE / #F0EADF | Page and alternate section backgrounds |
| `--card` / `--line` | #FFFFFF / #E2DACB | Cards and borders |
| `--ink` / `--ink-2` | #24152F / #5A4F63 | Text and secondary text |
| `--plum` | #2B1A3A | Trust band, schools panel, footer |
| `--brand` / `--brand-d` / `--brand-t` | #6B2FA0 / #55237F / #EFE6F7 | Logo purple: buttons, links, focus ring; hover; tints |
| `--orange`, `--yellow`, `--green`, `--navy` | #F28A2E, #FFC629, #22A04B, #2C3E8C | Handprint accents, used sparingly |

One accent per programme, set with a class (`.c-purple` etc.): Academic purple, Language orange, Mental Maths green, Handwriting yellow, Art red, Life Skills navy.

**Rules:** text is plum or white only (plum on orange, yellow or green); yellow is never text; red stays in illustrations; white on purple buttons is 8.3:1.

**Type**

| Role | Font | Notes |
| --- | --- | --- |
| Headings | DM Serif Display | Hero is uppercase and very large; section headings 34–54 px |
| Body, buttons, forms | Hanken Grotesk 400–700 | 17 px base |
| Handwriting | Caveat | Hero only (note, captions, sticker) and the handwriting slider |
| Tamil and Hindi | Noto Sans Tamil, Noto Sans Devanagari | அ and अ |

**Visual language:** hero only: graph paper, torn paper, tilted sticker tiles, doodles, the orange marker loop, a star seal, a taped note and a "Since 2015" pill. Below the hero: photo frames for the centre's own photos, tinted programme cards, a notebook page for the handwriting slider, plain FAQ and address cards. Missing photos show as tinted frames with a simple line icon.

## Page structure

The page follows the order a parent decides in. Anchors in the third column are what the menu and buttons link to.

| # | Section | Anchor | Key parts |
| --- | --- | --- | --- |
| — | Header (sticky) | `#top` | Animated logo, menu (About, Courses, Summer Camp, Schools, Contact), Enrol Today button, phone menu, plum scroll-progress line |
| 1 | Hero | — | Slogan, admissions pill, "LEARN. EXPLORE. GROW. EXCEL.", intro, Enrol Today + Book a free demo, Google Maps link, scrapbook collage |
| 2 | Trust line | — | Plum band: one sentence with founding date, people trained and two centres |
| 3 | Courses | `#courses` | Six programme cards; tapping one opens a panel with its full course list and "Enquire for this course" |
| 4 | Progress | — | Handwriting slider (week 1 vs week 8) and two photo frames for results and a speaking clip |
| 5 | Learning approach | `#method` | Five stages on a path that draws as you scroll, a closing line, six reasons parents choose Smart Kids |
| 6 | Team | `#team` | Story, Vision and Mission, founder with quote, four educator frames |
| 7 | Schools | `#schools` | Plum panel with the six school programmes and "Talk to us about your school" |
| 8 | Summer camp | `#summer` | Five photo frames that open a gallery, description, activities, four facts, "Hold a seat on WhatsApp" |
| 9 | How to join + FAQ | `#join` | Three plain steps and seven questions (one open at a time) |
| 10 | Enquire + visit | `#enquire`, `#visit` | Call numbers, Google reviews link, WhatsApp enquiry form, Leaflet map, two address cards |
| — | Footer | — | Logo, line, programme list, quick links, centres and phones, copyright |
| — | Phone action bar | — | Fixed Call, WhatsApp and Enrol buttons below 1000 px wide |

The parent reviews section is removed until at least three real, named reviews exist; its design is in the canvas and earlier versions of the page.

Breakpoints: base layout is phone; 700 px adds two-column grids; 1000 px switches to the desktop layout (full menu, side-by-side sections, no action bar).

## Interactions and motion

Motion is deliberately limited: the logo, the hero headline, the learning path and the handwriting slider. Everything else is still. Every animation switches off when the visitor has "reduce motion" turned on.

**What moves**

| Element | Trigger | Behaviour |
| --- | --- | --- |
| Logo handprints | Page load | Four hands fade and settle in order (orange, yellow, green, purple), then the name appears; about 1 s |
| Logo handprints | Hover, keyboard focus or tap | Hands rise one after another, like raising a hand to speak; 0.8 s |
| Hero headline | Page load | Lines rise in; the orange loop, yellow underline and spark draw round "Excel." |
| Hero collage | — | Still by request (no pop-in, float or wobble) |
| Learning path | Scroll | The purple line draws through the five numbers; each number fills dark as the line reaches it |
| Handwriting slider | Drag | Reveals week 8 over week 1 |

**What's interactive (no animation beyond feedback)**

- Programme cards open a course panel (Esc or the close button returns focus to the card); "Enquire for this course" pre-selects it in the form.
- "Book a free demo class" pre-selects Free demo; "Talk to us about your school" pre-selects School collaboration.
- Summer camp frames open a gallery with Previous, Next and Close.
- FAQ opens one answer at a time (native `details` with a shared name).
- The enquiry form checks the child's name and a 10-digit phone, then builds a WhatsApp message to +91 94873 88419. The parent sends it from WhatsApp; nothing is sent automatically.
- The map is created only when the visitor scrolls near it.

Easing is ease-out (`cubic-bezier(.25,1,.5,1)`) everywhere except the hero, which keeps its original curves.

## Build and deployment notes

The page is plain HTML, CSS and JavaScript with no build step, so it can be hosted anywhere static (Netlify, Vercel, Cloudflare Pages) or moved into a framework section by section.

**Files**

| File | Purpose |
| --- | --- |
| `index.html` | Page metadata, structured data and semantic markup |
| `css/site.css` | Design tokens, layout, responsive rules and Leaflet essentials |
| `js/site.js` | Page interactions, form handling and lazy map setup |
| `img/hand-orange.png`, `hand-yellow.png`, `hand-green.png`, `hand-purple.png`, `wordmark.png` | Logo split into layers for the animation (960 × 604, transparent) |
| `img/logo.png` | Full logo, transparent, used in the footer |

**Outside dependencies**

| Dependency | Version | Notes |
| --- | --- | --- |
| Google Fonts | DM Serif Display, Hanken Grotesk, Caveat, Noto Sans Tamil, Noto Sans Devanagari | Loaded by one link; self-host for speed if preferred |
| Leaflet | 1.9.4 (cdnjs) | Map only; its essential stylesheet rules are in `css/site.css` |
| Map tiles | CARTO light basemap with OpenStreetMap data | Free tier has usage limits. For production, use a keyed provider (MapTiler or Stadia) or Google's map embed. Keep the attribution line |

**Before going live**

1. The preview ribbon and yellow content notes have been removed from the live presentation; notes remain hidden in the source.
2. Remove the line "The interactive map shows on the published website" from the map fallback, and check the live map loads.
3. Phone links (`tel:`) and WhatsApp links work on the live site; in the Claude preview they may not.
4. Add the second centre's map pin when its coordinates or Google Maps link arrive.
5. Add the published canonical URL and Open Graph URL/image once the production domain and approved share image are known; validate the existing EducationalOrganization and LocalBusiness structured data.
6. Convert photos to WebP or AVIF with fixed width and height, and lazy-load everything below the hero.

**Accessibility already in place:** document language, skip link, visible focus rings, alt text and labels, `lang` on Tamil and Hindi letters, dialog focus containment and restoration, live form status, 44 px minimum tap targets, reduced-motion support.

## Content status

All text on the page comes from the copy Smart Kids supplied on 9 Nov 2026, lightly edited. Images are drawn stand-ins until the centre's photos arrive. The full list with a status dropdown per item is in the [content template](https://claude.ai/artifact/FDkQv5KHaxmkGsurFTk7yA).

| Area | On the page now | Needed to finish it |
| --- | --- | --- |
| Hero collage | Drawn tiles: abacus, scripts, painting, chess | 4 classroom photos (the 8 photos on the current site are a good start) |
| Trust line | "More than 3,000" trained | Exact number; school logos with permission |
| Courses | Six programmes and all 40 courses | Ages, timings and fees per programme |
| Progress | Illustrated handwriting slider, two empty frames | Real before/after scans, competition results, a 30-second clip, parent consent |
| Team | Story, vision, mission, founder bio and quote | Founder portrait; 4–6 educator photos, names, subjects, qualifications |
| Schools | Offer and six programmes | Partner schools and a principal's quote |
| Summer camp | Text, activities, offer, days, van | 8–10 camp photos; confirm offer, days, next dates and ages |
| FAQ | Seven questions, general answers | Exact timings, batch size, fee policy, how progress is shared |
| Reviews | Section hidden; Google link next to the form | Three or more real, named reviews with permission; Google rating |
| Visit | Main centre pinned at 11.3702, 77.8891; both addresses | Confirm the pin is the main centre; branch map link; opening hours |
| Footer | Links, phones | Email and social media links |

## Decisions log and known issues

**Decisions made (newest first)**

| Decision | Why |
| --- | --- |
| Hero restored to the scrapbook version | Client preferred it over the cleaner photo-led draft |
| Reviews and school quotes hidden until real | Placeholder quotes with stars read as fake and cost trust |
| Motion cut to logo, hero headline, learning path and handwriting slider | Fade-ups, bouncing, floating and the colour sweep read as AI-generated and slowed navigation |
| Doodles, stickers and handwritten notes removed below the hero | Replace with real children's work once scanned |
| Location block made plain with a Leaflet map | The earlier tilted map cards looked comical |
| Hero collage kept still | Client request in a comment |
| Courses shown as a grid on desktop, swipe on phones | Sideways scrolling on desktop looked poor |
| Palette taken from the logo, one colour per programme | Ties the site to the brand; parents learn the colour code |
| Microchip-style badges replaced | They read as electronics, not a children's centre |

**Known issues**

- The hero still uses patterns that current guides call AI-looking (cream paper, oversized serif headline, label and pill above it, drawn doodles). This is the client's choice; the photo-led alternative is ready to apply once photos arrive.
- The hero collage uses illustrations in a different style from the rest of the page until real photos replace them.
- The live map has not been tested on a real host; the preview can only show the fallback card.
- Summer camp does not move higher on the page from March to May yet; that needs a date check or a manual switch.
- The handwriting slider shows an illustration, labelled as such, not a real student's work.
- The Google listing's business name contains extra keywords, which Google's rules don't allow; rename it to "Smart Kids Skill Development Centre".

## Next steps

**Smart Kids (content)**

- [ ] Send the 8 photos from the current site, plus founder and educator photos
- [ ] Scan children's work (handwriting before/after, drawings) with parent consent
- [ ] Confirm demo class, timings, batch size, fee policy, opening hours and the summer camp offer
- [ ] Collect three or more real parent reviews; ask parents to post them on Google
- [ ] Share the branch's Google Maps link and confirm the main centre pin
- [ ] Rename the Google listing to "Smart Kids Skill Development Centre"
- [ ] Supply email, social links and a vector logo file

**Design and build**

- [ ] Swap stand-in images for real photos, and decide whether the hero stays scrapbook or moves to photo-led
- [ ] Bring back the reviews section once real reviews exist
- [x] Remove the preview ribbon and hide the yellow content notes
- [x] Add EducationalOrganization and LocalBusiness structured data
- [ ] Add an approved Open Graph image and favicon
- [ ] Choose a production map tile provider and test the live map
- [ ] Build the inner pages (About, a page per programme, Summer Camp, Schools, Contact) from the same system
- [ ] Final check on a mid-range Android phone over 4G, an iPhone, and desktop Chrome, Safari and Firefox
