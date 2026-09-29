---
id: core-wam
title: "CoRe-WAM: Correspondence-Aligned Temporal Residuals for World Action Models"
authors: ["Bin Zhou*", "Jialong Liu*", Jianan Wang, Changhao Chen, Kani Chen]
venue: "arXiv"
venueType: preprint
year: 2026
month: September
status: preprint
isFirstAuthor: true
isCoFirst: true
specialBadges: [Co-First]
keywords: [World Action Models, Robot Manipulation, Temporal Correspondence]
links:
  paper: https://arxiv.org/pdf/2609.27314
  arxiv: https://arxiv.org/abs/2609.27314
emoji: "🤖"
featuredImage: /images/core-wam-overview.png
---

CoRe-WAM uses correspondence-aligned visual changes to help a world-action model reason over recent robot manipulation history. Its TraceDelta interface transports historical features to matching current regions before computing signed differences, then adds valid changes to the policy through a lightweight residual adapter. With 1.59 million trainable parameters and 5,000 adaptation updates, CoRe-WAM reaches 92.22% success across 50 clean RoboTwin 2.0 tasks, 3.56 percentage points above Motus. Bin Zhou and Jialong Liu contributed equally.
