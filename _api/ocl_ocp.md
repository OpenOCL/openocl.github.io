---
title: OclOCP()
position: 1
description: test
type: Class
parameters:
returns:
methods_abstract: 
  - name: pathCosts(x, z, u, t, tf, p)
    parameters:
      - name: x
        type: OclVariable
        content: State variables
      - name: z
        type: OclVariable
        content: Algebraic Variables
      - name: u
        type: OclVariable
        content: Control variables
      - name: t
        type: OclVariable
        content: Time
      - name: tf
        type: OclVariable
        content: Final time
      - name: p
        type: OclVariable
        content: Parameters
  	returns:
    content: In this method you can implement the path cost (also called Lagrange cost or intermediate cost) function.

  - name: arrivalCosts(x, tf, p)
    parameters:
      - name: x
        type: OclVariable
        content: State variables
      - name: tf
        type: OclVariable
        content: Final time
      - name: p
        type: OclVariable
        content: Parameters
    returns:
    content: In this method you can specify the costs on the final state (also called Mayer terms).

  - name: pathConstraints(x, u, t, p)
    parameters:
      - name: x
        type: OclVariable
        content: State variables
      - name: u
        type: OclVariable
        content: Control variables
      - name: t
        type: OclVariable
        content: Time
      - name: p
        type: OclVariable
        content: Parameters
    returns:
    content: Specifies the path constraints.

  - name: boundaryConditions(x0, xf, p)
    parameters:
      - name: x0
        type: OclVariable
        content: Initial state variables
      - name: xf
        type: OclVariable
        content: Final state variables
      - name: p
        type: OclVariable
        content: Parameters
    returns:
    content: Specifies the boundary conditions on intial state x0 and final state xf.

  - name: discreteCost(vars)
    parameters:
      - name: vars
        type: OclVariable
        content: Contains all variable of the discretized OCP.
    returns:
    content: Specifies cost terms that depend on any variable of the discretized problem which is a non-linear program (NLP).

methods: 

  - name: addPathCost(cost)
    parameters:
      - name: cost
        type: OclVariable or Matlab matrix
        content: Scalar variable containing the cost
    returns:
    content: Adds a path cost term of the form c_p(x,z,u,t,tf,p).

  - name: addArrivalCost(cost)
    parameters:
      - name: cost
        type: OclVariable or Matlab matrix
        content: Scalar variable containing the cost
    returns:
    content: Adds an end cost term of the form c_f(x,tf,p).

  - name: addPathConstraint(lhs, operator, rhs)
    parameters:
      - name: lhs
        type: OclVariable or Matlab matrix
        content: Left hand side of the constraint equation
      - name: operator
        type: char
        content: One of the following operators as string: '<=', '=', '>='
      - name: rhs
        type: OclVariable or Matlab matrix
        content: Right hand side of the constraint equation
    returns:
    content: Adds a path constraint of the form c_p_lower(x,u,z,p)<=c_p(x,u,z,p)<=c_p_upper(x,u,z,p) to the optimal control problem.

  - name: addBoundaryCondition(lhs, operator, rhs)
    parameters:
      - name: lhs
        type: OclVariable or Matlab matrix
        content: Left hand side of the constraint equation
      - name: operator
        type: char
        content: One of the following operators as string: '<=', '=', '>='
      - name: rhs
        type: OclVariable or Matlab matrix
        content: Right hand side of the constraint equation
    returns:
    content: Adds a boundary constraint of the form c_b_lower(x0,xf,p)<=c_b(x0,xf,p)<=c_b_upper(x0,xf,p) that can depend on the initial and final states to the optimal control problem.

  - name: addDiscreteCost(cost)
    parameters:
      - name: cost
        type: OclVariable or Matlab matrix
        content: Scalar variable containing the cost c_d(v_d)
    returns:
    content: Adds a cost term that can depend on any variable in the discretized optimal control problem.
    
content_markdown:
An optimal control problem (OCP) is defined by inheriting from the OclOCP class. In order to specify cost functions and boundary conditions you have to implement the corresponding methods. Have a look at the VanDerPolOCP.m in the Examples folder. 
left_code_blocks:
right_code_blocks:
---
