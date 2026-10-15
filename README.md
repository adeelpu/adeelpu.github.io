# Adeel Ahmad, Ph.D. — Academic Website

[![Website](https://img.shields.io/badge/website-adeelpu.github.io-1f4e79)](https://adeelpu.github.io/)
[![ORCID](https://img.shields.io/badge/ORCID-0000--0002--1211--1184-a6ce39?logo=orcid&logoColor=white)](https://orcid.org/0000-0002-1211-1184)
[![Google Scholar](https://img.shields.io/badge/Google%20Scholar-profile-4285F4?logo=googlescholar&logoColor=white)](https://scholar.google.com.pk/citations?user=_Ryh8ywAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-adeel--ahmad--gis-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adeel-ahmad-gis/)

Source code for my personal academic website: **https://adeelpu.github.io/**

## About me

I am an **Assistant Professor** at the [Institute of Geography](https://pu.edu.pk/home/department/90083/Institute-of-Geography), [University of the Punjab](https://pu.edu.pk/), Lahore, Pakistan, and the founding director of the [**GeoScape Analytics Lab (GSAL)**](https://geoscapeanalyticslab.github.io/). Before that, I was a [Taylor Geospatial Institute](https://taylorgeospatial.org/) Postdoctoral Fellow in the [Multimodal Vision Research Laboratory](https://mvrl.cse.wustl.edu/) at Washington University in St. Louis.

My research combines satellite Earth observation and Geospatial AI (GeoAI) to monitor forests, land, water and hazards, with a focus on open, reproducible geospatial science for Pakistan and South Asia.

**Research interests**
- Remote sensing and GIS for environmental monitoring
- Geospatial Artificial Intelligence (GeoAI) and deep learning
- Forest structure, canopy height and carbon mapping
- Land degradation, soil erosion and landslide hazard assessment
- Open geospatial data infrastructure for Pakistan

## What's on the site

| Page | Contents |
|---|---|
| **Home** (`index.html`) | Profile, about and research summary, latest news, research areas, selected publications, GSAL tools, talks overview |
| **Publications** (`publications.html`) | Every journal article, conference paper, book chapter, abstract, preprint, thesis and popular article, grouped by year, with type filters and search |
| **Data & Tools** (`data.html`) | Published datasets (Zenodo DOIs), GSAL software and platforms, and Google Earth Engine apps |
| **Talks & Events** (`talks.html`) | Invited talks, conferences, training workshops and activities, with photos and links |
| **News** (`news.html`) | A filterable timeline of everything above, newest first |

Old links such as `adeelpu.github.io/#tab-pubs` or `#tab-conf` still work: they forward to the matching new page.

### Selected open outputs

| Output | Type | Access |
|---|---|---|
| WHiCH — Western Himalaya Canopy Height Map 2020, Pakistan | Dataset | [10.5281/zenodo.18056032](https://doi.org/10.5281/zenodo.18056032) |
| National-Scale Soil Erosion Dataset of Pakistan (2005, 2015) | Dataset | [10.5281/zenodo.10694225](https://doi.org/10.5281/zenodo.10694225) |
| GRIPS — Geospatial Research Index of Pakistan Studies (GSAL) | Software | [10.5281/zenodo.22807356](https://doi.org/10.5281/zenodo.22807356) |
| GeoDROP — Geospatial Datasets Repository of Pakistan (GSAL) | Data platform | [geoscapeanalyticslab.github.io/GeoDROP](https://geoscapeanalyticslab.github.io/GeoDROP/) |

## Repository structure

```
.
├── index.html          # Home page
├── publications.html   # Full publication list
├── data.html           # Datasets, software and Earth Engine apps
├── talks.html          # Invited talks, conferences, training workshops, activities
├── news.html           # News timeline
├── assets/css/site.css # All styles (colours, fonts, layout)
├── assets/js/site.js   # Mobile menu, publication/news filters and search, old-link forwarding
├── data/               # BibTeX files (*.bib) and CV PDFs linked from the site
├── images/             # Profile photo, thumbnails, event photos, header background
├── index_old.html      # Earlier version of the site (kept for reference; uses stylesheet.css)
└── _config.yml         # GitHub Pages settings
```

## Updating the site

All pages are plain HTML; no build step is needed. Keep every list newest-first.

**Add a publication** (`publications.html`): copy an existing `<article class="entry">` block into the right year section and update
1. `id` (a short unique slug) and `data-type` (`journal`, `conference`, `chapter`, `abstract`, `preprint`, `thesis` or `article`), plus the matching label in `<span class="type type-…">`;
2. the thumbnail (4:3, about 800×600 px) in `images/`;
3. title link, authors (wrap your name in `<strong>`), venue line, links (BibTeX files go in `data/`) and a one- or two-sentence summary starting with "We …".
The filter counts in the chips are typed in by hand, so update the number on **All** and on the publication type.

**Add a talk, conference, workshop or activity** (`talks.html`): copy an `<article class="event">` block into the right section, set a unique `id`, the date, title, place and links, and put the photo in `images/`. Update the count on the chip at the top of the page.

**Add a news item** (`news.html`): copy an `<li data-type="…">` line into the right year. `data-type` is one of `publications`, `data`, `invited-talks`, `conferences`, `training-workshops` or `activities`, and the link should point at the item's `id` on its page (for example `talks.html#…`). The five newest items are also listed by hand in the News box on `index.html`.

**Add a dataset, app or software release** (`data.html`): copy an `<article class="entry">` block into the Datasets, Software and Platforms, or Google Earth Engine Apps section.

**Update the CV:** upload the new PDF to `data/` and change the CV links (search for `Dr_Adeel_Ahmad_PU_CV` in all five pages).

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Credits

The current design is custom. Earlier versions were adapted from [Subash Khanal's website](https://subash-khanal.github.io/), which is based on [Jon Barron's website template](https://github.com/jonbarron/jonbarron_website). Fonts: Source Serif 4, Public Sans and IBM Plex Mono (Google Fonts).

## License

You are welcome to reuse the layout and code for your own academic website. Please keep the credits above and remove my personal content (text, photos, CV and publication data).

---

**Contact:** adeel.geog@pu.edu.pk · [GeoScape Analytics Lab](https://geoscapeanalyticslab.github.io/) · [GitHub](https://github.com/adeelpu)
