---
title: "Emergency Response via Spherical - Ducted UAV Integration"
excerpt: "In the last year of my undergraduate degree, I participated in the task of Project Design IV of
the Guangdong-Hong Kong Robotics Academy, responsible for a flight control part that
combines a spherical robot and a drone. This robot can shuttle through complex terrain and
avoid obstacles by flying. It can not only conduct drone patrols in terrain such as forests, but
also use the rolling characteristics of spherical robots to cross complex terrain areas.
<br/><img src='/images/UAV.png'>"
collection: portfolio
---
- **Main Contributions**:
  
  *Core member of spherical robot software (non-flight part)*
  
  1. Building a control system framework

```mermaid
graph TD
    subgraph Communication_System
        A[Remote_Controller] --> B[Wireless_Module]
    end
    subgraph Sensor_System
        C[Inertial_Measurement_Unit]
        D[Joint_Motor_Encoder]
    end
    subgraph Sphere_Execution_System
        E1[Joint_Motor_Driver_1] --> F1[Rolling_Motor]
        E2[Joint_Motor_Driver_2] --> F2[Pendulum_Motor]
    end
    subgraph Flight_System
        G[Gyroscope] --> H[Flight_Controller]
        H --> I[Brushless_Motor_Driver*4]
        I --> J[Duct_Motor*4]
    end
    B --> K[Main_Control_Chip]
    C --> K
    D --> K
    K --> E1
    K --> E2
    K --> H
```

                                        Figure 2. Control system flow chart

 The system is composed of four parts, with the following functions:

1. **Communication System**: It consists of a remote controller and a wireless module. This system transmits relevant instructions to the main control chip, enabling the remote - control function of the robot.
2. **Sensor System**: Comprising an IMU and a joint motor encoder. It measures the object's acceleration, angular velocity and other velocity - related data, and detects the position and speed of the joint motor. This provides real - time status information of the robot to the main control chip. 
3. **Sphere Execution System**: Has two joint motors. These motors are used to drive the robot for rolling and swinging respectively.
4. **Flight Control System**: The Pixhawk 6C Mini is directly used for configuration. Through the flight control, it controls four ducted motors to achieve the flight control of the robot.

  

        2.Implement a rolling control algorithm

```mermaid
graph TD
    subgraph MPC_Controller
        A[Prediction Model] --> B[Objective Function]
        A --> C[Quadratic Programming]
        B --> C
        D[Constraints] --> B
        D --> C
        C --> E[Future Control Sequence]
        E --> A
    end
    F[Reference Trajectory] --> A
    G[Spherical Robot Dynamics] --> A
    G --> H[State Variables]
    H --> C
    E --> I[First Control Quantity]
    I --> G
```

                                 Figure 3.Model prediction algorithm flow chart

 1.**Algorithm Architecture Selection**: Chose the MPC algorithm architecture for the design.

 2.**Model Processing**: Referred to relevant papers to simplify the dynamics and kinematics model of the sphere.

 3.**Prediction and Index Establishment**: Utilized the method from the papers to combine the reference trajectory with the actual situation, established the performance index, and converted it into a quadratic optimization problem.

 4.**Algorithm Optimization**: Employed rolling programming to evaluate the effect within the limited time domain, and continuously adjusted the control step size, prediction step size, and weight matrix to optimize the algorithm.
