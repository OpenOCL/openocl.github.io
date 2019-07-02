---
layout: api
last_modified_at: 2019-04-17
permalink: /api-docs/
title: API documentation
pid: api
---

# Documentation

In *OpenOCL* you can solve a large class of optimal control problems including **non-linear**, **continuous-time**, **multi-stage**, and **constrained** problems, which can appear in the context of **trajectory optimization** and model **predictive control**. The types of dynamical systems that are supported are all systems that can be described by **ordinary differential equations** or **differential algebraic equations**.

We introduced some new concepts that should make it as easy as possible for you to model optimal control problems, in particular the notion of *grid*-costs and *grid*-constraints that can be very handy when implementing **tracking problems**. In the following we give a short introduction to the concepts used and introduced in *OpenOCL*.

## Cost terms and constraints

We support **bounds** that hold along the entire trajectory, and ***grid*-constraints** that hold only at specific gridpoints in the discretized trajectory.

For the cost terms you can specify ***path*-costs** that are integrated along the trajectory (also known as Lagrange term),  and ***grid*-costs** that can be specified for specific points on the discretized trajectory. 

<!--
## Optimal control problems (single-stage)
## Multi-stage optimal control problems
-->
