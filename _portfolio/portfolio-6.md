---
title: "Manipulator control,sensor collection,model building for
smart med - arms"
excerpt: "This is a laboratory project at Guangdong University of Technology. The purpose is to touch
the mass through the robotic arm and judge the size of the mass. In the experiment, we
used the Jaka robotic arm combined with a six-dimensional force sensor to slide the target
object (pork nugget) at different speeds, angles, and depths. Finally, we combined the LSTM
algorithm to perform a long-term sequence analysis of these data. Similarly, a feedback
control can also be performed on the robotic arm based on these data.<br/><img src='/images/arm.png'>"
collection: portfolio
---
- **Main Contributions:**
  
  1. Robotic arm control
     
     <img src="file:///C:/Users/24954/AppData/Roaming/marktext/images/2025-03-07-21-42-31-image.png" title="" alt="" data-align="center">
     
                         Figure 20.Schematic diagram of robot joint motion
     
     First of all, we carried out the forward and inverse kinematics solution of the robotic arm in matlab. We used the DH method for the forward motion solution, and the analytical solution for the inverse kinematics solution. After doing the above theoretical work in Matlab, we used the ROS package provided by JAKA to customize the control of the robotic arm to meet our needs for touch at different depths and speeds.

```mermaid
graph TD
    classDef process fill:#E5F6FF,stroke:#73A6FF,stroke-width:2px

    Start --> GetPositionAndOrientation
    GetPositionAndOrientation --> Position[X1, Y1, Z1]
    GetPositionAndOrientation --> Orientation[X2, Y2, Z2]
    GetPositionAndOrientation --> MovementLoop

    MovementLoop --> CheckSRV2Response
    CheckSRV2Response -->|False| HandleGoalFailure
    CheckSRV2Response -->|True| HandleGoalSuccess

    HandleGoalFailure --> AdjustmentLoop
    AdjustmentLoop --> CheckTargetReached
    CheckTargetReached -->|Yes| StopMovement
    CheckTargetReached -->|No| AdjustmentLoop
    StopMovement --> PrintGoalEntered

    HandleGoalSuccess --> VerifyTargetReached
    VerifyTargetReached -->|Yes| StopMovement
    VerifyTargetReached -->|No| CalculateNextTarget
    CalculateNextTarget --> MoveToNextPoint
    MoveToNextPoint --> PrintSuccessMessage
    MoveToNextPoint --> PrintServiceStatus
    MoveToNextPoint --> MovementLoop

    class Start,GetPositionAndOrientation,MovementLoop,CheckSRV2Response,HandleGoalFailure,AdjustmentLoop,CheckTargetReached,StopMovement,PrintGoalEntered,HandleGoalSuccess,VerifyTargetReached,CalculateNextTarget,MoveToNextPoint,PrintSuccessMessage,PrintServiceStatus process
```

                                Figure 21.Flow chart of ROS control manipulator
