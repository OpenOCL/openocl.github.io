---
title: OclOCP()
position:
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
    content:
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
    content:
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
    content:
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
    content:
  - name: discreteCost(vars)
    parameters:
      - name: vars
        type: OclVariable
        content: 
    returns:
    content:
methods: 
  - name: addPathCost(cost)
    parameters:
      - name: cost
        type: OclVariable or Matlab matrix
        content: Scalar variable containing the cost c_p(x,z,u,t,tf,p)
    returns:
    content:
  - name: addArrivalCost(cost)
    parameters:
      - name: cost
        type: OclVariable or Matlab matrix
        content: Scalar variable containing the cost c_f(x,tf,p)
    returns:
    content:
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
    content:
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
    content:
  - name: addDiscreteCost(cost)
    parameters:
      - name: cost
        type: OclVariable or Matlab matrix
        content: Scalar variable containing the cost c_d(v_d)
    returns:
    content:
content_markdown:
left_code_blocks:
right_code_blocks:
---