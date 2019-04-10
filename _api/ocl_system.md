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
    function sysVars(sh)
      sh.addState('p');
      sh.addState('v');
      sh.addControl('u');  
    end
    function sysEq(sh,x,z,u,p)
      sh.setODE('p',(1-x.v^2)*x.p-x.v+u.u); 
      sh.setODE('v',x.p);
    end
parameters:
  - content: "Function handle to the function that sets up the variables. The function for the variables must have one input argument, no return values, and thus the following siganture: varFunctionName(sh) where `sh` is a system handler that allows to add variables and parameters."
    name: fhVars
    type: "function handle, optional"
  - content: "Function handle to the function that sets up the equations. The function for the variables must have five input argument, no return values, and thus the following signature: `eqFunctionName(sh,x,z,u,p)` where sys is a system handler that allows to add ODE and DAE equations, x the states, z the algebraic variables, u the control inputs, p the parameters."
    name: fhEquations
    type: "function handle, optional"
methods: 
  - content: "Adds a state variable to the system."
    name: "addState"
    parameters: 
      - content: "Name of the state variable"
        name: "id"
        type: "char"
      - content: "Size of the state variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: s
        type: "int, optional"
      - content: "Lower bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to -inf."
        name: lb=-inf
        type: "numeric, optional"
      - content: "Upper bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to inf."
        name: ub=inf
        type: "numeric, optional"
    returns: ~
  - content: "Adds an algebraic variable to the system."
    name: "addAlgVar"
    parameters: 
      - content: "Name of the algebraic variable"
        name: id
        type: char
      - content: "Size of the algebraic variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: s
        type: "int, optional"
      - content: "Lower bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to -inf."
        name: lb=-inf
        type: "numeric, optional"
      - content: "Upper bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to inf."
        name: ub=inf
        type: "numeric, optional"
    returns: ~
  - content: "Adds an control input to the system."
    name: "addControl"
    parameters: 
      - content: "Name of the control variable"
        name: id
        type: char
      - content: "Size of the control variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: s
        type: "int, optional"
      - content: "Lower bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to -inf."
        name: lb=-inf
        type: "numeric, optional"
      - content: "Upper bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to inf."
        name: ub=inf
        type: "numeric, optional"
    returns: ~
  - content: "Adds a parameter."
    name: "addParameter"
    parameters: 
      - content: "Name of the parameter"
        name: id
        type: char
      - content: "Size of the control variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: s
        type: "int, optional"
      - content: "Default value for the parameter. This value can be overwritten when you specify the parameter for OclSolver with solver.setParameter. Defaults to unbounded."
        name: default=[]
        type: "numeric, optional"
    returns: ~
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
