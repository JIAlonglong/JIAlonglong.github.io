---
title: "A sports and health analyzer based on CNN-LSTM"
excerpt: "This project addresses the growing need for accessible foot health monitoring and early
disease detection. Inspired by national policies promoting healthcare innovation, it
leverages lightweight sensors and AI algorithms to identify foot deformities (e.g., flat feet)
and systemic risks (e.g., Parkinson's) through gait analysis. Unlike bulky clinical tools or basic
wearables, our solution offers real-time insights, personalized advice, and health alerts,
aiming to empower users with proactive care.You can [click here](https://www.bilibili.com/video/BV1sb42187km/?spm_id_from=333.1387.homepage.video_card.click&vd_source=809a8e4a3a25a8809f443b4da653e707) 
to view our implementation effect.<br/><img src='/images/health_care.png'>"
collection: portfolio
---
**Main Contributions**:
  
  *core member*
  
  1. overall data flow diagram

```mermaid
graph TD
    PL[Perception Layer] -->|Collect Foot Data| ISHA[Intelligent Sports Health Analyzer]
    ISHA -->|Massage Commands| FM[Foot Massage]
    ISHA --> CT[Cloud Terminal]
    CT -->|Sports Injury Risk<br>Potential Disease Analysis| MA[Mobile APP]
    CT --> LS[Local Server]
    LS -->|Analysis Results| MA
    FM -->|Rehab Monitoring| CT
```

                                               Figure 17. overall data flow diagram

The sensor collects foot pressure and sports posture data, the micro-computer in the shoe recognizes walking, running, jumping and other states in real time, and synchronizes the data to the cloud to analyze the risk of sports injuries and diabetes and other diseases. The mobile APP displays real-time status, health reports, and can remotely start foot massage. The system dynamically adjusts the massage plan according to the cloud suggestions to form a closed-loop health management of "monitoring-analysis-intervention".

        2.Local acquisition and analysis process

In terms of acquisition equipment, we used four one-dimensional force sensors distributed on four acupoints, and in the local data analytics process, we used Wio Terminal, a high-performance embedded development board based on the SAMD51 microcontroller. Through our CNN model trained on the Internet (based on the TensorFlow Lite Micro machine learning library), the cloud-trained model can be run directly on the MCU, eliminating the need for a server, enabling analysis of the four motion states of the human body, namely running, jumping, stationary, and walking. Guaranteed real-time and reliability.

```mermaid
graph TD
    A[Foot Sensors] --> B[Edge Processing]
    B --> C[CNN Model]
    C --> D[Motion States]
    D --> E[APP Display]
    E --> F{Anomaly?}
    F -->|Yes| G[Massage]
    F -->|No| H[Continue]
```

                                Figure 18.local algorithm architecture diagram
