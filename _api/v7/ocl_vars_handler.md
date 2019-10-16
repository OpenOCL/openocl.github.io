---
version: 7
name: ocl.VarsHandler
title: ocl.VarsHandler
description: The variables handler allows to specify the system variables, its dimensions and bounds.
type: class
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
  - name: "userdata"
    content: "Returns the userdata object that can be passed to [ocl.Problem](#apiocl_problem) or [ocl.Stage](#apiocl_stage)."
---
