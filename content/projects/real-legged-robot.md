---
title: REAL — Robust Extreme Agility for Legged Robots
category: robotics
date: 2026-01-01
tags: [Reinforcement Learning, Legged Robots, Mamba, EKF, Isaac Gym, Zero-shot Transfer]
isOpenSource: true
badge: "🤖 Under Review"
featured: true
story: Getting a real robot to do parkour without ever training on real hardware — zero-shot transfer is wild when it actually works.
---

REAL is a deep RL framework for extreme agility control of legged robots, achieving zero-shot sim-to-real transfer on the Unitree Go2.

## Highlights

- FiLM-modulated Mamba policy for spatio-temporal locomotion learning.
- EKF-based neural velocity estimator for physics-guided state estimation.
- Consistency-aware loss gating stabilizes policy distillation under large-scale domain randomization.
- Zero-shot transfer to Unitree Go2 at ~13.1 ms/step inference latency.
- Paper under review (first author: Jialong Liu).
