# Actual verification — 2026-09-09
Environment: macOS; Node v24.14.0; Python3.9.6; Codex in-app Chromium browser (exact engine build not exposed). No children participated. AI agent performed adult-style walkthroughs.

`npm test`:7/7 passing, recorded in evidence/node-tests.txt. `npm run build`:passing. Initial build command was accidentally run in parent directory and failed with missing package.json; correct project-directory rerun passed. Documentation writes also initially used duplicate relative paths and failed; corrected before packaging.

## Acceptance mapping
| Requirement | Actual steps and result | Evidence |
|---|---|---|
| Axis changes rendering, not numbers | Zoom changes right axis0–60 to48–60. Left stays0–60. Table remains50,51,50,52,53,54; change remains4visits/day and8%. Keyboard Right moves slider0→4; Enter on Reset returns0. |model test1;01-framing.png;05-mobile-360.png|
| Labelled axes, tables, resets | Line:visits/day and days. Scatter:drink and visit counts/day. Six-row trend table; expandable scatter table observed visible using Enter. Reset groups restores All/r0.95. |screenshots01/03;browser walkthrough|
| Sampling matches definitions | Club-only size5 and20 remain100%club,mean90. Random all-resident draw includes non-members. Reset returns club,size5,seed1; next draw advances to2. |model tests2–4;02-sampling.png|
| Reproducible sampling | Same seed reproduces rows; different seeds differ.500 fixed seeds cover every resident; no duplicate IDs within each sample. This is a control test, not proof of perfect statistical uniformity. |model.test.mjs|
| Correlation explanation | All18 observations show r0.95; Cool and Warm each show0.00 on9 observations. Correct explanation states association does not establish causation and stratification does not prove the sole cause. |model test6;03-correlation.png|
| Final claim/evidence/limitation | Empty checklist gives all missing-element hints. Cautious text plus three checked elements reveals summary and next-practice idea; feedback explicitly says self-review, not prose assessment. |04-verdict.png|
| Incorrect response and retry | “Actual visits increased” gives numerical-comparison hint. Correct replacement adds notebook1/3; other cases reach3/3. No retry limit. |model test7;browser walkthrough|
| Navigation and clearing | All four sections visited. Reset lesson returns intro; reopening shows0/3. Back-to-intro and re-entry work. Domain/config state defaults restored. |04-verdict.png;walkthrough|
| Responsive layout | Four pages × widths360,768,1280, height900:document scrollWidth equals clientWidth in all12 cases. Mobile screenshot visually inspected; no clipped controls or tables. |layout.json;05-mobile-360.png;06-public-tablet.png|
| Keyboard/non-drag | Enter opened lesson, sampling draw/reset, group reset and accessible table. Slider ArrowRight changed value. Computed focus outline3px, visually visible. Controls use native semantics; no drag dependency. |05-mobile-360.png;DOM checks|
| Pointer/touch | Click traversal at360width; buttons min46CSSpx with large radio labels. Physical touchscreen not tested; mobile-width pointer simulation is not real-device touch testing. |05-mobile-360.png;style.css|
| Reduced motion | Framing controls/main/sections/SVG computed animation-name:none and transition-duration:0s. App has no animation/audio. CSS additionally disables motion under prefers-reduced-motion. OS preference was not toggled; no claim of full preference emulation. |motion-styles.json;style.css|
| Contrast | Principal text/background pairs:12.83,6.38,5.62,14.47,7.19, all above4.5. Weather groups use shapes and text as well as colour. |contrast.json|
| Public deployment | Public HTTPS page opened without login; lesson start and zoom worked. Browser error log empty at observation; GitHub Pages build status built. |06-public-tablet.png;SUBMISSION.md|
| Invalid/repeated inputs | Domain tests reject invalid sample settings and invalid axes. Native controls constrain inputs. Wrong answers retry, new draws advance seeds, reset clears state. |model.test.mjs;walkthrough|

## Numbered screenshot walkthrough
1. evidence/01-framing.png — compare the same series on two scales.
2. evidence/02-sampling.png — all-resident sample and source rows.
3. evidence/03-correlation.png — pooled pattern and weather groups.
4. evidence/04-verdict.png — final self-review and completion summary.
5. evidence/05-mobile-360.png — complete mobile framing page.
6. evidence/06-public-tablet.png — deployed framing page at768px.

## Limitations
No full WCAG audit, screen-reader user test, physical touchscreen, Firefox/Safari run or learning-efficacy study. No claims of universal age suitability. Free prose is never graded or inserted as HTML. No audio dependency exists. Viewport overrides restored after testing. Automated tests validate this new implementation; they are not claimed as failing-before/passing-after tests for an upstream bug.
