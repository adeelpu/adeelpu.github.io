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

| Section | Contents |
|---|---|
| **Publications** | Journal articles, conference papers, book chapters and popular-science articles, each with links, BibTeX and a short summary |
| **Datasets** | Published datasets (Zenodo DOIs), GSAL software and platforms, Google Earth Engine apps, and code for co-authored GeoAI models |
| **Conferences** | Conferences attended and presented at |
| **Invited Talks** | Invited lectures and keynotes |
| **Training Workshops** | Training programs I have led or delivered |

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
├── index.html        # The whole site: profile, research summary and all tabs
├── stylesheet.css    # Fonts and base styles
├── data/             # BibTeX files (*.bib) and CV PDFs linked from the site
├── images/           # Profile photo, publication thumbnails, event photos
└── _config.yml       # GitHub Pages settings
```

## Updating the site

**Add a publication:** copy an existing `<tr class="pub">` block inside `<tbody id="pub-list">` in `index.html`, keep the list newest-first, and:
1. put a thumbnail (4:3, about 800×600 px) in `images/` and set it in `data-thumb`;
2. add a BibTeX file to `data/` and link it from the **Bibtex** button;
3. write a one- or two-sentence summary starting with "We …".

**Add a dataset, app or software release:** copy a `<tr class="pub">` block inside `<tbody id="data-list">` and place it under the matching heading.

**Update the CV:** upload the new PDF to `data/` and change the **CV** link near the top of `index.html`.

Publication lists are paginated automatically (10 per page); no build step is needed.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Credits

The design is adapted from [Subash Khanal's website](https://subash-khanal.github.io/), which is based on [Jon Barron's website template](https://github.com/jonbarron/jonbarron_website).

## License

You are welcome to reuse the layout and code for your own academic website. Please keep the credits above and remove my personal content (text, photos, CV and publication data).

---

**Contact:** adeel.geog@pu.edu.pk · [GeoScape Analytics Lab](https://geoscapeanalyticslab.github.io/) · [GitHub](https://github.com/adeelpu)
