# Small Print — Data Detective
An original static interactive lesson for approximately age15, submitted for Taskmarket TSK-5DV55M47. AI-created code, copy and synthetic data; no claim of prior client work or measured learning outcomes.

## Run
Requirements: Node.js22 or newer for tests/build; Python3.9 or newer for the local HTTP server. No install step or npm dependencies. System fonts only; no remote assets.

    npm test
    npm run build
    npm start

Open http://127.0.0.1:8765/ . Production preview:

    python3 -m http.server 8766 --bind 127.0.0.1 --directory dist

Open http://127.0.0.1:8766/ . Do not open as file:// because browser module loading requires HTTP. Any free static HTTPS host can serve `dist/`; GitHub Pages can instead serve the repository root directly. No requester credentials, paid hosting or build service required. `.nojekyll` disables Jekyll processing.

## Contents
- `model.mjs`: bundled immutable synthetic datasets, sampling, chart coordinate calculation, correlation and quiz-answer rules.
- `app.mjs`: DOM views and in-memory activity state. No networking, storage, remote grading or arbitrary HTML from user text. Free text is assigned only via textarea.value.
- `style.css`: responsive layout, keyboard focus and reduced-motion rule; no animation even under normal settings.
- `model.test.mjs`: domain regression/control tests, executable using Node's built-in runner.
- `EDUCATOR_GUIDE.md`: pedagogy, data dictionary, references, limitations and offline activity.
- `TEST_REPORT.md` and `evidence/`: actual verification evidence.

## State and feedback
The learner may explore in any order. Axis, sample configuration and weather group survive navigation. Correct explanation choices populate an evidence notebook. Wrong choices give a relevant hint without limiting retries. Final prose is optional and ungraded; a self-review checklist reveals a completion summary. Reset lesson clears everything without reloading. Refresh starts a new lesson. All state stays in memory.

## Browser support and limitations
Target modern Chromium, Firefox and Safari with ES modules, SVG and CSS Grid. Tested browser versions and actual viewports are recorded in TEST_REPORT.md; untested engines are not claimed verified. No audio feature or dependency exists. Charts have accessible data tables; correlation tables can be expanded. No external educational links appear in the core lesson, only in the adult guide. This is a simplified demonstration with fabricated data, not a validated curriculum or scientific finding.

## Licence
Original code, prose and SVG graphics: MIT. No third-party packages, media or font files are bundled. Source references are links only and remain the property of their respective publishers. The original Taskmarket brief in BRIEF.md is supplied for acceptance traceability, not relicensed as original code.
