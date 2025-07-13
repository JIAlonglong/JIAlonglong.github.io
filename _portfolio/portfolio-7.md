---
title: "Deisgn of control program and visual solutions for logistics terminal delivery vehicles"
excerpt: "This is the content of the second project design class of the School of Robotics. The
purpose is to make a logistics trolley based on STM32, which can recognize traffic lights and walk logically, and identify designated blocks to arrive at designated locations for
placement.<br/><img src='/images/smart_car.png'>"
collection: portfolio
---

- **Main Contributions:**
  
  1. 2D radar algorithm
     
     Using radar can limit the angle and distance range of points, write code to extract the average value of points in a certain angle range and distance range
  
  2. Control code development

                We use STM32F407 as the main control chip to realize the control of the                 motor chassis, the writing of the final-state machine, the driving of the U8Lite                 motor, and the serial port code connected with the sensing part

# Deisgn of control program and visual solutions for logistics terminal delivery vehicles

- **Project Background:**
  
  This is the content of the second project design class of the School of Robotics. The purpose is to make a logistics trolley based on STM32, which can recognize traffic lights and walk logically, and identify designated blocks to arrive at designated locations for placement.
  
  <img src="file:///C:/Users/24954/AppData/Roaming/marktext/images/2025-03-08-12-43-38-image.png" title="" alt="" data-align="center">
  
                                  Figure 32.Physical picture of logistics trolley

- **Main Contributions:**
  
  1. Control Code on STM32
     
     ![](C:\Users\24954\AppData\Roaming\marktext\images\2025-03-08-12-46-18-image.png)
     
                                     Figure 33.Car main control board
     
     We use three omnidirectional wheels to control, and our team's control idea for the car is to use closed-loop control. We first use stm32 to send PWM to drive the motor motion through the drive module, and the encoder feeds back the speed of the motor. At the same time, we make the MPU 6050 gyroscope get coordinate information, and use Kalman filtering and world coordinates to calculate the motion of the three omnidirectional wheels to get our expected speed value. Then use the PID algorithm to realize the control of the actual value and the expected value to ensure the stable movement of the car in the four basic directions. Then use a 16-way PWM drive board to control the cabin door (using the I2C protocol).
