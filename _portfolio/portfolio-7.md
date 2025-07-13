---
title: "Deisgn of control program and visual solutions for logistics terminal delivery vehicles"
excerpt: "This is the content of the second project design class of the School of Robotics. The
purpose is to make a logistics trolley based on STM32, which can recognize traffic lights and walk logically, and identify designated blocks to arrive at designated locations for
placement.<br/><img src='/images/smart_car.png'>"
collection: portfolio
---

- **Main Contributions:**
  
  1. Control Code on STM32
     
     ![error](https://github.com/JIAlonglong/JIAlonglong.github.io/blob/master/images/stm32F4.png?raw=true)
     
                                     Figure 1.Car main control board
     
     We use three omnidirectional wheels to control, and our team's control idea for the car is to use closed-loop control. We first use stm32 to send PWM to drive the motor motion through the drive module, and the encoder feeds back the speed of the motor. At the same time, we make the MPU 6050 gyroscope get coordinate information, and use Kalman filtering and world coordinates to calculate the motion of the three omnidirectional wheels to get our expected speed value. Then use the PID algorithm to realize the control of the actual value and the expected value to ensure the stable movement of the car in the four basic directions. Then use a 16-way PWM drive board to control the cabin door (using the I2C protocol).
