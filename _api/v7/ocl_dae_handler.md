---
version: 7
name: ocl.DaeHandler
title: ocl.DaeHandler
description: The differential equations handler allows to specify the system equations which can be of ODE and DAE type.
type: class
methods:
  - content: "Adds a differential equation to the system. Note that for every state variable defined in the variables function, a differential equation must be specified."
    name: "setODE"
    parameters:
      - name: id
        content: "Name of the state variable for that the differential equation is given."
        type: string
      - name: equation
        content: "The equation specifies the derivative of a state variable. Right hand side of the differential equation dot(x) = f(x,z,u,p) for state variable x."
        type: "[ocl.Variable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - name: setAlgEquation
    content: "Adds an algebraic equation to the system. Note that in order to be able to simulate the system, the total number of rows of the algebraic equations needs to be equal to the total number/dimension of algebraic variables."
    parameters:
      - content: "Algebraic equation g in the form g(x,z,u,p)=0"
        name: equation
        type: "[ocl.Variable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - name: "userdata"
    content: "Returns the userdata object the can be passed to [ocl.Problem](#apiocl_problem) or [ocl.Stage](#apiocl_stage)."
position: 3
---
