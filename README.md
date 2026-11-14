# Software Project Gallery

A static, responsive HTML/CSS/JavaScript portfolio presenting selected software projects,
historical experiments, and screenshots of older builds.

**Status:** Maintained gallery, not a guarantee that every linked application is deployed, functional,
or production-ready. Projects that no longer have a published repository are explicitly labeled
**View archived screenshot** instead of being presented as live applications.

## What it includes

- A responsive card-based project gallery rendered from entries in [`main.js`](main.js).
- Links to the current GitHub account for projects whose repositories are available.
- Archived local screenshots for older projects without an active public repository.
- A link to the official RescuePC product site, without exposing its private source code.
- An installable-web-app experiment with a [manifest](manifest.json) and
  [service worker](sw.js), including a cached application shell after a successful first visit.
- Styling and interactions implemented with browser-native JavaScript and CSS.

**Note:** Technology tags describe the particular project entries and do not establish
that every referenced framework or capability is present in this portfolio repository.

## Start locally

```bash
git clone https://github.com/Tyler-Keesee/Portfolio.git
cd Portfolio
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). Do not open the HTML through
`file://` when evaluating service-worker features.

This gallery does not need API keys or a backend to display its project cards.
The actual projects linked from the gallery may have their own requirements.

## Code and structure

| Path | Role |
| --- | --- |
| `index.html`, `style.css` | Page structure and layout |
| `main.js` | Project entries and interactive content |
| `Projects/` | Historical project screenshots |
| `manifest.json`, `sw.js` | Web-app metadata and offline-shell caching |
| `tests/` | Basic static regression checks |
| `.github/workflows/verify.yml` | Node.js and headless-browser smoke tests |

## Validation

Run the included tests with Node.js 22 or newer:

```bash
node --test tests/*.test.mjs
```

The GitHub Actions workflow also renders the gallery in headless Chrome.
Passing tests do not prove that every third-party link, old screenshot, or referenced
application remains available.

## Privacy and scope

This is a **public** repository and historically includes personal photograph assets.
Do not place phone numbers, addresses, financial documents, credentials, or other
sensitive personal information in public source control. Removing files from the
current branch does not remove them from Git history.

## Connect

For software projects, use the [GitHub repositories page](https://github.com/Tyler-Keesee?tab=repositories).
For RescuePC product information, visit [RescuePC](https://www.rescuepcrepairs.com/).
