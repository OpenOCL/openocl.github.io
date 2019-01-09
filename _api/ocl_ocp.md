--- 
name: OclOCP
description: "An optimal control problem (OCP) is defined by inheriting from the OclOCP class. In order to specify cost functions and boundary conditions you have to implement the corresponding methods. Have a look at the VanDerPolOCP.m in the Examples folder."
content_markdown: ~
left_code_blocks: ~
methods: 
  - content: "Adds a path cost term of the form c_p(x,z,u,t,tf,p)."
    name: addPathCost
    parameters: 
      - 
        content: "Scalar variable containing the cost"
        name: cost
        type: "[OclVariable](#apiocl_variable) or Matlab matrix test"
    returns: ~
  - 
    content: "Adds an end cost term of the form c_f(x,tf,p)."
    name: addArrivalCost
    parameters: 
      - 
        content: "Scalar variable containing the cost"
        name: cost
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - 
    content: "Adds a path constraint of the form c_p_lower(x,u,z,p)<=c_p(x,u,z,p)<=c_p_upper(x,u,z,p) to the optimal control problem."
    name: "addPathConstraint"
    parameters: 
      - 
        content: "Left hand side of the constraint equation"
        name: lhs
        type: "OclVariable or Matlab matrix"
      - 
        content: "One of the following operators as a string: '<=', '==', '>='"
        name: operator
        type: char
      - 
        content: "Right hand side of the constraint equation"
        name: rhs
        type: "OclVariable or Matlab matrix"
    returns: ~
  - 
    content: "Adds a boundary constraint of the form c_b_lower(x0,xf,p)<=c_b(x0,xf,p)<=c_b_upper(x0,xf,p) that can depend on the initial and final states to the optimal control problem."
    name: "addBoundaryCondition(lhs, operator, rhs)"
    parameters: 
      - 
        content: "Left hand side of the constraint equation"
        name: lhs
        type: "OclVariable or Matlab matrix"
      - 
        content: "One of the following operators as a string: '<=', '==', '>='"
        name: operator
        type: char
      - 
        content: "Right hand side of the constraint equation"
        name: rhs
        type: "OclVariable or Matlab matrix"
    returns: ~
  - 
    content: "Adds a cost term that can depend on any variable in the discretized optimal control problem."
    name: addDiscreteCost
    parameters: 
      - 
        content: "Scalar variable containing the cost c_d(v_d)"
        name: cost
        type: "OclVariable or Matlab matrix"
    returns: ~
methods_abstract: 
  - 
    content: "In this method you can implement the path cost (also called Lagrange cost or intermediate cost) function."
    name: "pathCosts"
    parameters: 
      - 
        content: "State variables"
        name: x
        type: OclVariable
      - 
        content: "Algebraic Variables"
        name: z
        type: OclVariable
      - 
        content: "Control variables"
        name: u
        type: OclVariable
      - 
        content: Time
        name: t
        type: OclVariable
      - 
        content: "Final time"
        name: tf
        type: OclVariable
      - 
        content: "Parameters"
        name: p
        type: OclVariable
  - 
    content: "In this method you can specify the costs on the final state (also called Mayer terms)."
    name: "arrivalCosts"
    parameters: 
      - 
        content: "State variables"
        name: x
        type: OclVariable
      - 
        content: "Final time"
        name: tf
        type: OclVariable
      - 
        content: Parameters
        name: p
        type: OclVariable
    returns: ~
  - 
    content: "Specifies the path constraints."
    name: "pathConstraints"
    parameters: 
      - 
        content: "State variables"
        name: x
        type: OclVariable
      - 
        content: "Control variables"
        name: u
        type: OclVariable
      - 
        content: Time
        name: t
        type: OclVariable
      - 
        content: Parameters
        name: p
        type: OclVariable
    returns: ~
  - 
    content: "Specifies the boundary conditions on intial state x0 and final state xf."
    name: "boundaryConditions"
    parameters: 
      - 
        content: "Initial state variables"
        name: x0
        type: OclVariable
      - 
        content: "Final state variables"
        name: xf
        type: OclVariable
      - 
        content: Parameters
        name: p
        type: OclVariable
    returns: ~
  - 
    content: "Specifies cost terms that depend on any variable of the discretized problem which is a non-linear program (NLP)."
    name: discreteCost
    parameters: 
      - 
        content: "Contains all variable of the discretized OCP."
        name: vars
        type: OclVariable
    returns: ~
parameters: ~
position: 2
returns: ~
right_code_blocks: ~
title: OclOCP()
type: Class
---
