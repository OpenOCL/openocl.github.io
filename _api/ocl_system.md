--- 
name: OclSystem
description: |-
  A dynamical system is defined by implementing functions for the system variables and equations, and creating an OclSystem passing the function pointers. You need to implement two functions, one for defining the system variables, and a second one for defining the system equations. The system is created by passing the handles of the two functions to the constructor of OclSystem.
  
code_block:
  title: Example System
  language: m
  code: |-
    sys = OclSystem(@sysVars,@sysEq);
    
    % Function definitions can be in the same file 
    % (if the main script is wrapped by a function) 
    % or in separate files:
    function sysVars(svh)
      svh.addState('p');
      svh.addState('v');
      svh.addControl('u');  
    end
    function sysEq(seh,x,z,u,p)
      seh.setODE('p',(1-x.v^2)*x.p-x.v+u.u); 
      seh.setODE('v',x.p);
    end
parameters:
  - content: "Function handle to the function that sets up the variables. The function for the variables must have one input argument, no return values, and thus the following siganture: `fh(svh)` where `svh` is the system variables handler that allows to add variables and parameters."
    name: varsfun
    type: "function handle"
  - content: "Function handle to the function that sets up the equations. The function for the variables must have five input argument, no return values, and thus the following signature: `fh(seh,x,z,u,p)` where `seh` is the system equations handler that allows to add ODE and DAE equations, `x` the states, `z` the algebraic variables, `u` the control inputs, `p` the parameters."
    name: eqfun
    type: "function handle,"
methods:
  - content: "Adds a differential equation to the system. Note that for every state variable a differential equation must be specified."
    name: "setODE"
    parameters: 
      - name: id
        content: "Name of the state variable for that the differential equation is given."
        type: char
      - name: equation
        content: "The equation specifies the derivative of a state variable. Right hand side of the differential equation dot(x) = f(x,z,u,p) for state variable x."
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - name: setAlgEquation
    content: "Adds an algebraic equation to the system. Note that in order to be able to simulate the system, the total number of rows of the algebraic equations needs to be equal to the total number/dimension of algebraic variables."
    parameters: 
      - content: "Algebraic equation g in the form g(x,z,u,p)=0"
        name: equation
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
position: 1
returns: ~
right_code_blocks: ~
title: "OclSystem"
type: Class

---
