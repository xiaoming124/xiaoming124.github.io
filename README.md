# Shiming Yu — academic website

A lightweight, responsive Jekyll site for GitHub Pages. The active pages use a standalone layout and CSS, without jQuery, icon fonts, or the original theme’s JavaScript bundle.

## Content editing

- `_pages/about.md`: biography, research, updates, service, awards, teaching, and contact.
- `_data/publications.json`: the single source for publications on both the homepage and `/publications/`. Set `selected: true` to show a paper on the homepage. Links accept a local `/files/...` path or an external HTTPS URL.
- `_pages/talks.md`: presentations and links to slides and videos.
- `_layouts/profile.html`: navigation, metadata, and shared page structure.
- `assets/css/profile.css`: responsive design and print styles.
- `assets/js/profile.js`: progressive enhancement for publication filters. All papers remain visible without JavaScript.
- `_config.yml`: site identity, URL, and publishing exclusions.

## Run locally

With a supported Ruby and Bundler installation:

```sh
bundle install
bundle exec jekyll serve
```

Visit the address printed by Jekyll. GitHub Pages continues to build the site using the existing Jekyll workflow; no Node build is required.

## Legacy template files

The original Academic Pages / Minimal Mistakes template remains in the repository for reference. Sample collections, demo pages, generators, and unused JavaScript are excluded in `_config.yml`, so they are not published. The new pages do not load the old layouts, Sass, jQuery, or icon fonts. The original MIT license is retained in `LICENSE`.

The untracked `files/CV_Shiming 2.pdf` is left untouched and excluded from publication. The CV link continues to use `files/CV_Shiming.pdf`.

## Typography

Chianti BT Roman (400) and Bold (700) are bundled in `assets/fonts/` and loaded by `assets/css/profile.css` with `font-display: swap`. Browsers download the fonts directly; visitors do not need a local installation. WOFF2 is preferred when available, with TTF as a fallback.
