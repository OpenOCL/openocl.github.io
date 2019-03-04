---
last_modified_at: 2019-03-04
title: Open Optimal Control Library
---
<img src="https://openocl.org/imgs/cartpole.gif" width="31%"> <img src="https://openocl.org/imgs/car.png" width="31%"> <img src="https://openocl.org/imgs/circ.png" width="31%">  
<img src="https://openocl.org/imgs/pend.png" width="31%"> <img src="https://openocl.org/imgs/ballbeam.png" width="31%"> <img src="https://openocl.org/imgs/lemn.png" width="31%">    
[Get started](get-started.md) - [Tutorial](tutorial.md) - [API Docs](api-docs.md)

With the Open Optimal Control Library you can:
* Model **dynamical systems**
* Formulate **optimal control** problems
* Automatically generate necessary **derivatives** (jabobian, hessian)
* Solve **trajectory optimization** problems
* Implement **model-predictive control**

The software can be used from Matlab and Octave. Python and C++ implementations as well as a unified optimal control modeling language are coming soon. 

OpenOCL interfaces Ipopt [1] to numerically solve the optimal control problems and CasADi [2] to automatically calcuate the necessary derivatives by algorithmic differentiation. It implements direct methods to optimal control (collocation/pseudo-spectral methods).

### Quick start

Go the *getting started* section to [download](get-started.md) the toolbox, visit the [tutorial](tutorial.md), or go straight to the [examples](https://github.com/JonasKoenemann/optimal-control/tree/master/Examples)!

In the examples you will find (ordered by problem complexity):
* [Van der Pol oscillator](https://github.com/OpenOCL/OpenOCL/tree/master/Examples/01VanDerPol)
* [Ball on beam equilibrium](https://github.com/OpenOCL/OpenOCL/tree/master/Examples/02BallAndBeam)
* [Pendulum swingup](https://github.com/OpenOCL/OpenOCL/tree/master/Examples/03Pendulum)
* [Race car control](https://github.com/OpenOCL/OpenOCL/tree/master/Examples/04RaceCar)
* [Cart-pole swingup](https://github.com/OpenOCL/OpenOCL/tree/master/Examples/05CartPole)


### Additional models

* Airborne wind energy: [openawe.github.io](https://openawe.github.io/)
* Robotics (arm-type, KUKA, Puma560, using Peter Corke's robotics toolbox): [github:openocl_models](https://github.com/JonasKoenemann/openocl_models) (very experimental)

### Publications

Performance Assessment of a Rigid Wing Airborne Wind Energy Pumping System  
G. Licitra, J. Koenemann, A. Buerger, P. Williams, R. Ruiterkamp, M. Diehl  
In Energy The International Journal, Elsevier, 2018 (submitted to)

OpenAWE: An Open Source Toolbox for the Optimization of AWE Flight Trajectories  
J. Koenemann, G. Licitra, S. Sieberling, M. Diehl  
In Airborne Wind Energy Conference, Freiburg, 2017

Modeling of an Airborne Wind Energy System with a Flexible Tether Model for the Optimization of Landing Trajectories  
J. Koenemann, P. Williams, S. Sieberling, M. Diehl  
IFAC 2017 World Congress, Toulouse, France. 9-14 July, 2017

Viability Assessment of a Rigid Wing Airborne Wind Energy Pumping System  
G. Licitra, J. Koenemann, G. Horn, P. Williams, R. Ruiterkamp, M. Diehl  
In: 21st International Conference on Process Control (PC), 2017

### References

[1] On the Implementation of a Primal-Dual Interior Point Filter Line Search Algorithm for Large-Scale Nonlinear Programming  
A. Wächter, L.T. Biegler  
Mathematical Programming 106 (2006) 25-57, Available at: [projects.coin-or.org/Ipopt](https://projects.coin-or.org/Ipopt)

[2] CasADi - A software framework for nonlinear optimization and optimal control  
J.A.E. Andersson, J. Gillis, G. Horn, J.B. Rawlings, M. Diehl  
Mathematical Programming Computation, In Press, 2018, Available at: [casadi.org](http://casadi.org)

### Contact

Jonas.Koenemann [at] yahoo.de

[Legal Notice](legal.md)


