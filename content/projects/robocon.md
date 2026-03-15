---
title: ROBOCON Competition Robot Systems
category: robotics
date: 2024-08-01
tags: [ROS, STM32, C/C++, Behavior Tree, SLAM, Path Planning, Competition]
isOpenSource: true
badge: "🏆 1st Prize National"
featured: true
story: Two years of competition, three national prizes, and a lot of late nights debugging motor controllers.
---

Multi-year participation in the National College Student Robot Competition (ROBOCON), developing full robot systems from embedded control to autonomous navigation.

## Highlights

- Won 1st Prize at 22nd National ROBOCON (2023) and 2nd/3rd Prize at 23rd ROBOCON (2024).
- Built ros_control-based architecture without lower computer for the Rabbit robot (2023).
- Implemented behavior tree decision system (rc_decision) for autonomous task execution.
- Hybrid A* + RRT path planning for global and local navigation.
- FastLIO2 + IMU fusion for 50Hz real-time localization using Mid-360 LiDAR.
- Three-wheel steering chassis kinematics and STM32-based three-stage path planning.
- DMA serial communication protocol for efficient multi-board communication on F407.

## Open Source

- [rc_control](https://github.com/gdut-robocon/rc_control)
- [rc_decision](https://github.com/gdut-robocon/rc_decision)
- [rc_controllers](https://github.com/gdut-robocon/rc_controllers)
