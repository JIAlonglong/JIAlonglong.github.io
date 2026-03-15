---
title: Robot-LLM-Align — LLM Fine-tuning & ReAct Agent for Robot Control
category: nlp
date: 2025-11-01
tags: [LLM, SFT, DPO, LoRA, ReAct Agent, Qwen2.5, RLHF]
isOpenSource: true
badge: "🧠 LLM Agent"
featured: true
story: Fine-tuning an LLM to control robots — turns out hallucination is even more dangerous when the robot has legs.
---

End-to-end LLM alignment and agent system for robot control, built on Qwen2.5 with full SFT+DPO pipeline and a self-built ReAct agent.

## Highlights

- Full SFT+DPO alignment pipeline on Qwen2.5 with LoRA lightweight fine-tuning.
- Reduced hallucination rate by 42%, instruction accuracy reached 91%.
- Built vertical-domain fine-tuning dataset with automated multi-type training data generation.
- Self-developed ReAct Agent system for task planning and tool-calling closed-loop execution.
