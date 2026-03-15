---
title: Sports and Health Analyzer (CNN-LSTM)
category: healthcare
date: 2024-06-01
tags: [CNN, LSTM, TensorFlow Lite, STM32, ROS, Edge AI]
isOpenSource: false
badge: "🏃 Edge AI"
featured: false
---

A wearable foot health monitoring system using lightweight AI for real-time gait analysis and disease risk detection (flat feet, Parkinson's).

## Highlights

- Deployed CNN model on Wio Terminal (SAMD51 MCU) via TensorFlow Lite Micro — no server required.
- Four force sensors on foot acupoints classify four motion states: running, jumping, walking, stationary.
- Cloud backend analyzes sports injury risk and disease indicators; mobile APP displays results and controls foot massage device.
- Closed-loop health management: monitoring → analysis → intervention.
