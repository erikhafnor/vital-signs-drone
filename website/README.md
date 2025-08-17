# VitalDroneLab Website

Minimal, clean informational site for pitching & teaching a drone-based remote vital signs (rPPG + respiration) pipeline.

## Sections
- Hero & Rationale
- Pipeline (7 stages)
- Specifications & Justifications
- Frameworks & Tech Stack
- Learning Outcomes
- Project Phases Timeline
- Feasibility & Risk Mitigation

## Local Preview
Open `index.html` directly in a browser or serve:

```bash
python3 -m http.server 8080
```

## Deploy to GitHub Pages
1. Create a new public repo named `vital-dronelab` (or your choice).
2. Copy contents of `website/` into repo root.
3. Commit & push.
4. In GitHub: Settings → Pages → Build and deployment: Source = `Deploy from a branch`, Branch = `main` (root).
5. Wait ~1 min. Site appears at `https://<username>.github.io/<repo>/`.

### Optional: Custom Domain
Add `CNAME` file with your domain and configure DNS (A / ALIAS or CNAME) to GitHub Pages endpoints.

## Accessibility & Performance Notes
- System font stack for fast rendering.
- Reduced scripting (small JS file only for nav + year + intersection observer).
- Semantic landmarks & aria labels on navigation and spec grid.

## Future Enhancements
- Proposal PDF export button (generate via print stylesheet or serverless function).
- Interactive SNR visualizer mock.
- Dark mode (prefers-color-scheme media query).
- Add small dataset sample & downloadable config template.

## License
Recommend MIT for site content & code; ensure you have rights for any added images.
