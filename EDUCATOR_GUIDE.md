# Small Print: educator guide

## Audience and objectives
Approximately age 15; not a universal age recommendation or developmental assessment. Plan 10–15 minutes, optionally longer. Learners should understand ordinary percentages and read a simple table; explain a 4/50 change before starting if needed. Objectives: separate graph appearance from numerical change, identify sampling coverage bias, distinguish association from causal evidence, and assemble a cautious claim supported by an observation and limitation.

## Lesson and adaptations
1. **Framing (3 minutes):** demonstrate zooming the right-hand line chart. Compare it with the fixed zero-baseline chart. Move the slider yourself and check the table; 50 to 54 remains an increase of4 visits/day and8%. Ask why a detail-focused line chart can legitimately use a non-zero axis. Reset the axis and retry the explanation. A line plot is used deliberately: this lesson does not endorse truncated bar-chart baselines.
2. **Sampling (4 minutes):** initial club-only draw demonstrates exclusion. Compare5 and20 people; the mean stays90. Switch to all-resident random sampling and draw again. Compare the mean with42 and the membership proportion with20%. Random sampling reduces this coverage problem; it does not promise an exactly representative individual draw. Reset returns to club-only,size5,seed1.
3. **Correlation (3 minutes):** compare All with Cool and Warm. Explain r as linear association rather than a general test of causation. Warm weather plausibly influences both variables; stratification does not prove weather is the sole cause. Both group views keep the same axes. Reset returns to All.
4. **Fresh application (3 minutes):** fictional puzzle-app headline combines axis framing, a volunteer sample and a shared workshop. Optional local text, checklist and exemplar support several defensible answers. The app checks only the learner's self-review boxes, never interprets prose. A learner can see the example and revise indefinitely.

Navigation is unrestricted; completing explanations adds notebook entries without points, ranks or time pressure. Going back to the introduction keeps in-memory work; Reset lesson clears all activity state and free text. Refresh also clears it. A browser back-forward cache could retain a page; Reset is the explicit clear control. There are no accounts, external runtime calls, analytics or persistent storage.

For more support, co-read one case at a time, use the accessible tables, explain percentage change verbally, and let a learner state a conclusion aloud without typing. For extension, propose a better sampling frame or a controlled comparison while discussing feasibility. Do not describe results as evidence of learning gains: no learner study was performed. No children were recruited or tested.

## Data dictionary, construction and limits
All people, organisations, locations and headlines are fictional; resident IDs are synthetic row identifiers.
- `trend`: six daily visit counts for fictional Linden Park, Monday–Saturday:50,51,50,52,53,54. Integer counts/day. Hand-selected to illustrate moderate change. The line connects daily observations; no intraday data is implied. Charts and summary use this same array.
- `population`:100 synthetic residents. `id` integer1–100; `club` boolean true for IDs1–20; `minutes` outdoor minutes/day90 for club members,30 otherwise. This deliberately extreme two-level population isolates sampling coverage. It is not a plausible model of individual variation or a claim about real clubs.
- `sample(method,size,seed)`: Fisher–Yates shuffle using a repeatable32-bit linear congruential generator; take5,10 or20 without replacement. `club` draws only IDs1–20; `random` draws from all100. It illustrates equal-opportunity sampling; the seeded generator is not cryptographic and no statistical inference package is provided. Reset reproduces the first sample.
- `days`:18 synthetic observations. Weather is Cool or Warm. For each weather group, use the Cartesian product of3 drink-sales levels and3 visit levels. Cool: drinks10,20,30; visits80,100,120. Warm: drinks70,80,90; visits280,300,320. Units counts/day. Within each group covariance is zero; pooling groups gives positive correlation. This is a constructed example of possible confounding, not evidence of a real causal mechanism.
- Final challenge:12 fictional puzzle-club volunteers, mean70 before and74 after, plus shared workshop. No raw individual scores exist; do not calculate uncertainty or significance from this scenario.

## Sources supporting the instructional design
Original prose and original synthetic datasets, not copied teaching exercises. Consulted2026-09-09:
1. Office for National Statistics, **Does the axis have to start at zero? (Part1 – line charts)**: https://digitalblog.ons.gov.uk/2016/06/27/does-the-axis-have-to-start-at-zero-part-1-line-charts/ . Supports nuanced discussion of non-zero line-chart axes and context.
2. OpenStax, **Introductory Statistics2e, 1.2 Data, Sampling, and Variation in Data and Sampling**: https://openstax.org/books/introductory-statistics-2e/pages/1-2-data-sampling-and-variation-in-data-and-sampling . Supports distinction between sampling procedure, bias and variation.
3. OpenStax, **Psychology2e, 2.3 Analyzing Findings**: https://openstax.org/books/psychology-2e/pages/2-3-analyzing-findings . Supports distinguishing observed correlation from causal interpretation.

These references support concepts, not an endorsement or validation of this website.

## Offline follow-up
Write four daily counts on paper. Draw the same numbers with two labelled vertical ranges. Ask which question each view helps answer. Then plan a survey of a whole class that does not only ask a single club. No collection or uploading of children's data is needed.
