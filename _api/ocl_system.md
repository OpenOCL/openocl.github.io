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
  - content: "Function handle to the function that sets up the variables. The function for the variables must have one input argument, no return values, and thus the following siganture: `fh(svh)` where `svh` is the [OclSystemVarsHandler](#apiocl_system_vars_handler) handler that allows to add variables and parameters."
    name: varsfun
    type: "function handle"
  - content: "Function handle to the function that sets up the equations. The function for the variables must have five input argument, no return values, and thus the following signature: `fh(seh,x,z,u,p)` where `seh` is the [OclSystemEqHandler](#apiocl_system_eq_handler) that allows to add ODE and DAE equations, `x` the states, `z` the algebraic variables, `u` the control inputs, `p` the parameters."
    name: eqfun
    type: "function handle,"
position: 1
returns: ~
right_code_blocks: ~
title: "OclSystem"
type: Class

---
