---
title: Logistics Terminal Delivery Vehicle
category: robotics
date: 2023-06-01
tags: [STM32, PID, Computer Vision, Omnidirectional Wheels, Kalman Filter]
isOpenSource: false
badge: "📦 Autonomous Vehicle"
featured: false
---

STM32-based autonomous logistics trolley capable of traffic light recognition, block identification, and precise delivery to designated locations.

## Highlights

- Three omnidirectional wheel chassis with closed-loop PID control using encoder feedback and MPU6050 gyroscope.
- Kalman filtering on IMU data combined with world coordinates for stable omnidirectional motion.
- Computer vision for traffic light detection and block identification.
- I2C-controlled 16-channel PWM board for cabin door actuation.
