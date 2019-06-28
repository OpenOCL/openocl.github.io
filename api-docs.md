---
layout: api
last_modified_at: 2019-04-17
permalink: /api-docs/
title: API documentation
pid: api
---

# Documentation

In *OpenOCL* you can solve a large class of optimal control problems including continuous-time, multi-stage, and constrained problems, which can appear in the context of trajectory optimization and model predictive control. In the following we will give a short introduction to the concepts used and introduced in *OpenOCL*.

## Cost terms and constraints

We support *path*-constraints that hold along the entire trajectory, *point*-constraints that only hold at specific points in the continuous trajectory, and *grid*-constraints that hold only at specific gridpoints in the discretized trajectory.

Similarly, for the cost terms you can specify *path*-costs that are integrated along the trajectory (also known as Lagrange term), *point*-costs that are given for specific points along the trajectory, and *grid*-costs that can be specified for specific points on the discretized trajectory. 

*Point*-constraints can be typically used to specify constraints at the beginning and at the end of the trajectory. *Point*-costs can be used to formulate tracking problems where waypoints are given that should be tracked for specific points. If the waypoint should be passed exactly, the you would use *point*-constraints instead (but it is harder to solve).

*Grid*-costs, and *grid*-constraints are similar to the *point*-cost, and constraints. They can be specified if you want to have control over on how the problem is discretized, and where on the discretized trajectory you want to specify the cost terms and constraints. We generally recommend using *point*-costs and *point*-constraints instead as they are easier to handle.
