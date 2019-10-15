---
layout: api
last_modified_at: 2019-09-09
permalink: /api-docs/v7/
title: API documentation v7
pid: api
version: 7
mathjax: true
redirect_from: /api-docs/ 
---

# Documentation  (OpenOCL v7)

This is the documentation of the current version *OpenOCL v7*.

In *OpenOCL* you can solve a large class of optimal control problems including **non-linear**, **continuous-time**, **multi-stage**, and **constrained** problems, which can appear in the context of **trajectory optimization** and model **predictive control**. The types of dynamical systems that are supported are all systems that can be described by **ordinary differential equations** or **differential algebraic equations**.

We introduced some new concepts that should make it as easy as possible for you to model optimal control problems, in particular the notion of *grid*-costs and *grid*-constraints that can be very handy when implementing **tracking problems**. In the following we give a short introduction to the concepts used and introduced in *OpenOCL*.

## Cost terms and constraints

We support **bounds** that hold along the entire trajectory, and **grid-constraints** that hold only at specific gridpoints $\tau_k$ in the discretized trajectory. You can specify the gridpoints by using the argument `N` for in `ocl.Problem`.

For the cost terms you can specify **path-costs** that are integrated along the trajectory (also known as Lagrange term),  and **grid-costs** that can be specified for specific points on the discretized trajectory.

## Optimal control problem definition (single-stage)

For optimal control problems with a single stage, *OpenOCL* supports the following type of optimal control problems:
![Single stage optimal control problem](/assets/img/api_single_stage_v7_n4.PNG)
where $x(t)$ is the state trajectory, $u(t)$ the control trajectory, $z(t)$ the algebraic state trajectory, $p$ the parameters, $L(x,z,u,p)$ the path cost function, $\Phi(x,p)$ the terminal cost function, $\Psi_k(x,p)$ the grid-cost function, $f(x,z,u,p)$ the system dynamics function (differential equation), $g(x,z,u,p)$ the algebraic constraints function, $r_k(x,p)$ the grid-constraints function. Note that the control bounds can be specified of each control interval, $\underline{u}_k$, $\overline{u}_k$.

If no algebraic states $z$ are defined, the system is described by an *ordinary differential equation*. If algebraic states are defined, then the dynamics function $f(x,z,u,p)$ together with the algebraic constraints function $g(x,z,u,p)$ define the system dynamics as a *differential algebraic equation* in the semi-implicit form. To solve an optimal control problem, the *index* of the differential algebraic equation has to be smaller than or equal to one.

The dimension of the variables are: number of states $n_x$ , number of algebraic states $n_z$, number of controls $n_u$, number of parameters $n_p$.

Single stage optimal control problems are implemented using the class [ocl.Problem](#apiocl_problem).

## Multi-stage optimal control problems

![Multi stage optimal control problem](/assets/img/api_multi_stage_v7_n4.PNG)
