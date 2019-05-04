---
last_modified_at: 2019-05-04
title: Open Optimal Control Library
permalink: frontpage
---

<img src="/assets/img/double-pend-sim.gif" class="content-img-left">
<p class="content-img-descr"><strong>Modeling</strong> and <strong>simulation</strong> of dynamical systems.</p>

<img src="/assets/img/cartpole.gif" class="content-img-right">
<p class="content-img-descr">Formulation of <strong>optimal control</strong> problems.</p>

<img src="https://openocl.org/imgs/cartpole.gif" class="content-img-left">
<p class="content-img-descr">Formulation of <strong>optimal control</strong> problems.</p>

<img src="https://openocl.org/assets/img/race_white.png" width="31%"> <img src="https://openocl.org/imgs/circ.png" width="31%">  
<img src="https://openocl.org/assets/img/pend_white.png" width="31%"> <img src="https://openocl.org/imgs/ballbeam.png" width="31%"> <img src="https://openocl.org/imgs/lemn.png" width="31%">    
[Get started](get-started.md) - [API Docs](api-docs.md)

With the Open Optimal Control Library you can:
* Model **dynamical systems**
* Formulate **optimal control** problems
* Automatically generate necessary **derivatives** (jabobian, hessian)
* Solve **trajectory optimization** problems
* Implement a **model-predictive controller** (MPC)

The software can be used from Matlab and Octave. Python and C++ implementations as well as a unified optimal control modeling language are under development.

OpenOCL interfaces Ipopt [1] to numerically solve the optimal control problems and CasADi [2] to automatically calculate the necessary derivatives by algorithmic differentiation. It implements direct methods to optimal control (collocation/pseudo-spectral methods).

### Quick start

Go the *getting started* section to [download](get-started.md) the toolbox, visit the [tutorial](tutorial.md), or go straight to the [examples](https://github.com/JonasKoenemann/optimal-control/tree/master/Examples)!

In the examples you will find (ordered by problem complexity):
* [Van der Pol oscillator](https://github.com/OpenOCL/OpenOCL/blob/master/Examples/01VanDerPol/mainVanDerPol.m)
* [Ball on beam equilibrium](https://github.com/OpenOCL/OpenOCL/tree/master/Examples/02BallAndBeam)
* [Pendulum swingup](https://github.com/OpenOCL/OpenOCL/tree/master/Examples/03Pendulum)
* [Race car control](https://github.com/OpenOCL/OpenOCL/tree/master/Examples/04RaceCar)
* [Cart-pole swingup](https://github.com/OpenOCL/OpenOCL/tree/master/Examples/05CartPole)


### Additional models

* Airborne wind energy: [openawe.github.io](https://openawe.github.io/)
* Robotics (arm-type, KUKA, Puma560, using Peter Corke's robotics toolbox): [github:openocl_models](https://github.com/JonasKoenemann/openocl_models) (very experimental)


### Contact

info [at] openocl.org

[Legal Notice](legal.md)
