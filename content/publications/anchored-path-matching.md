---
id: anchored-path-matching
title: "Distilling World Action Models for Efficient Bimanual Manipulation via Anchored Path Matching"
authors: [Jialong Liu, Junjie He, Yandu Chen, Bin Zhou, Heng Su, Peijun Tang, Jianan Wang, Changhao Chen]
venue: "arXiv"
venueType: preprint
year: 2026
month: November
status: preprint
isFirstAuthor: true
keywords: [World Action Models, Bimanual Manipulation, Few-Step Distillation]
links:
  paper: https://arxiv.org/pdf/2611.22592
  arxiv: https://arxiv.org/abs/2611.22592
  projectPage: https://jialonglong.github.io/Anchored-Path-Matching/
  code: https://github.com/JIAlonglong/Anchored-Path-Matching
emoji: "🤖"
featuredVideo: https://jialonglong.github.io/Anchored-Path-Matching/videos/apm-overview.mp4
---

Anchored Path Matching (APM) distills world action models into a single student that jointly generates video and actions in 1, 2, or 4 steps. At student-reached states, one frozen-teacher continuation supplies an endpoint anchor and a local transition target, with anchor-priority gradient correction resolving conflicting objectives. APM achieves 91.4% average success across Clean and Random conditions on RoboTwin 2.0 at four steps. On Astribot S1, single-step deployment reduces control-cycle latency by 21.3× relative to the eight-step teacher, without task-specific retraining.
