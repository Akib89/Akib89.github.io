# Raiyan Ahmed Akib — Portfolio

Static personal portfolio for Raiyan Ahmed Akib, prepared for deployment through GitHub Pages at <https://akib89.github.io/>.

## Technologies

- HTML5 and CSS3
- Bootstrap
- JavaScript and jQuery
- GSAP, Swiper, AOS, Isotope, and bundled UI plugins
- Local Poppins and icon fonts

## Project Structure

```text
.
├── index.html
├── about-us.html
├── contact.html
├── services.html
├── work.html
├── project-*.html
├── assets/
│   ├── css/
│   ├── fonts/
│   ├── framework/
│   ├── home/
│   ├── img/
│   ├── scripts/
│   ├── vendors/
│   └── video/
└── ajax/
```

## Run Locally

From the repository root, start any static file server:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000/>.

Docker remains available as an optional local preview:

```bash
docker compose up -d --build
```

Then open <http://localhost:8004/>.

## Deploy to GitHub Pages

The intended repository is `Akib89/Akib89.github.io`, using the `main` branch and repository root.

1. Push the repository contents to `Akib89/Akib89.github.io`.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` and `/(root)`, then save.
5. After GitHub finishes deployment, open <https://akib89.github.io/>.

## Updating the Site

Edit the root HTML pages or files under `assets/`, test locally, then commit and push the changes. Keep filenames and relative asset paths unchanged unless every reference is updated.

## Contact Form

GitHub Pages cannot execute PHP. The contact form submits through FormSubmit and delivers messages to the portfolio email without opening the visitor's email application. The recipient must confirm the activation email sent by FormSubmit after the first submission.

## Current Limitation

Visual comparison requires a connected browser-testing session. Static path and HTTP validation can be run locally, but deployment is not considered live until GitHub Pages completes successfully.
