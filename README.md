# VitalDroneLab Website Root

Site moved to root for GitHub Pages deployment from `main` branch.

If you prefer to keep source under `website/`, you can instead configure Pages to serve `/docs` or use a GitHub Actions workflow that copies build artifacts to `gh-pages` branch.

## Deployment Steps
1. Commit & push root `index.html`.
2. Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / root.
3. Wait for build; visit: `https://erikhafnor.github.io/vital-signs-drone/`.

## Note
Current root `styles.css` and `script.js` proxy-import the originals. For static hosting without bundling, duplicate full content or move the files outright.
