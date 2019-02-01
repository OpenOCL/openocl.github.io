---
title: New release OpenOCL v3
categories: releases
permalink: /:categories/:title/
---

We are happy to announce that OpenOCL v3 is ready and released. 
It contains many improvements with respect to the previous version and also some API changes. 
If you come from an earlier version see the [release notes](https://github.com/OpenOCL/OpenOCL/releases/tag/v.3.11) that contains a list of changes below.
Otherwise you can directly go to the **download** page of [OpenOCL v3.11](/get-started) or pull the latest version from the master branch.

Also note that the URL of the github repository has changed. Update your remote URL with:   
`git remote set-url origin https://github.com/OpenOCL/OpenOCL.git`

### Release Notes
The release includes many changes to the API. Some class names, method names, and the way the solver is created are changed. If you come from an earlier version you need to adapt your model/code for this version. Below you find a list of changes. Also look at the examples how they are implemented (and look at the API documentation at [openocl.org](https://openocl.org)). This is also the first release to support Octave, and this release will become the first stable release. 

API changes:
* `Solver.getNLP` and `Solver.getSolver` are replaced by `OclSolver(T,system,ocp,options)`
* System became [OclSystem](https://openocl.org/api-docs/#apiocl_system)
* OCP(system) became OclOCP()
* Solver `OclSolver` takes 1 more argument T, new signature `OclSolver` OclSolver(T, system, ocp, options)
* There is no explicit time dependents in OCP definition, new signatures: `pathCosts(ch, x, z, u, p)`, `arrivalCosts(ch, x, p)`, `pathConstraints(ch, x, p)`.  #83
* In OclSystem: `setupEquation` became `setupEquations` #85 
* [OclSystem](https://openocl.org/api-docs/#apiocl_system) and [OclOCP](https://openocl.org/api-docs/#apiocl_ocp): it is possible to implement systems and OCP by in functions, and pass the function handles to the constructors. See [Example](https://github.com/OpenOCL/OpenOCL/blob/master/Examples/01VanDerPol/mainVanDerPol.m). This is an alternative way to the existing approach of inheriting from  [OclOCP](https://openocl.org/api-docs/#apiocl_ocp) and [OclSystem](https://openocl.org/api-docs/#apiocl_system). #74 
* OclOCP methods `pathConstraints`, `pathCosts` have to be declared as Static when inheriting from  [OclOCP](https://openocl.org/api-docs/#apiocl_ocp) #74 
* OclSystem methods `setupVariables`. `setupEquations` have to be declared as Static when inheriting from [OclSystem](https://openocl.org/api-docs/#apiocl_system) #74 
* There is no more dependency on z and u in pathConstraints #80
* Slicing for OclVariables works now like in Matlab. #73 In initial guess and solution state/control trajectory are extended in the third dimension, e.g. shape of sol.p is 3x1x(N+1), slice with sol.p(:,1,4:6)

**Important algorithm changes**:
* Path constraints are enforced for every control interval at the beginning and the end. Before path constraint were only enforced at the end of each control interval. With option `path_constraints_at_boundary=false` pathconstraint are not enforced on the first state and the final state. This can be used if you have potentially conflicting boundary conditions with your path constraints. #80
* A default control regularization of `1e-6*u.'*u` has been introduced. It can be deactivate with option `options.disable_regularization = false;` #79 
* Initial guess is now of type OclValue. The integrator variables for the initial guess are automatically interpolated if no integrator variables has been retreived or set (a warning will be issued in this case). Option `options.nlp.auto_interpolation = false` disabled auto interpolation. 

API new features:
* You can set `ocl.setBounds('x', xTraj)` where` xTraj` is a vector with the length of `N+1` if x is a state, or `N` if x is a control variable (with N the number of control interval). #82 
* New argument T see [OclSolver](https://openocl.org/api-docs/#apiocl_solver), can set end time and enables to pass custom discretization points for the OCP. #83 
* OclSolver.solve returns `times` or independent variables as structured variables
* You can set variable limits in OclSystem, #69, [VanDerPol](https://github.com/OpenOCL/OpenOCL/blob/master/Examples/01VanDerPol/mainVanDerPol.m)
* option `opt.system_casadi_mx  = true` enables the use of casadi MX symbolics for the system

Other changes:
* There is a new example [Cartpole Swingup](https://github.com/OpenOCL/OpenOCL/tree/master/Examples/05CartPole)
* Race car example introduce du control
* Unit tests for OclSystem, OclOCP, CollocationIntegrator #72
* Tests are automatically checked by [Travis CI](https://travis-ci.org/OpenOCL/OpenOCL)
* Subsasgn has been fixed. An issue #77 with octave persists.
* Solving times are reported for profiling in tests #61
* Use of casdiSX symbolics #40 
* API docs are in the website #58
* There are warnings issued for compatibility
* Refactorization of the main Variable types
* Better display for variables
* Consistent slicing/indexing of variables
* Solution consists of trajectories for each variable 
* Octave support
