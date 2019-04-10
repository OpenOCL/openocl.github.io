--- 
name: OclOCP
description: |
  An optimal control problem is implemented by providing functions for the path costs, arrival costs, path constraints, and boundary conditions. You can pass the function handles as positional arguments or keyword arguments. All function handles are optional. If you do not provide some of the functions, they default to zero cost for the cost functions or an empty constraints array for path constraints and boundary conditions.

code_block:
  title: Example OCP
  language: m
  code: |-
    ocp = OclOCP('pathcosts', @ocpPathCosts);
    
    % Function definitions can be in the same file 
    % (if the main script is wrapped by a function) 
    % or in separate files:
    function ocpPathCosts(ch,x,z,u,p)
      self.add( x.p^2 );
      self.add( x.v^2 );
      self.add( u.u^2 );
    end
    
parameters: 
  - content: "Function handle to the function that defines the path costs (also called Lagrange cost or intermediate cost). The signature of the function handle is `fh(ch,x,z,u,p)` where `ch` is the cost handler, `x` are the states, `z` are the algebraic variables, `u` are the controls, and `p` are the parameters."
    name: pathcosts=0
    type: "function handle, optional"
  - content: "Function handle to the function that defines the arrival costs (also called Mayer terms). The signature of the function handle is `fh(ch,x,T,p)` where `ch` is the cost handler, `x` are the terminal states, `T` is the final time, `p` are the parameters."
    name: arrivalcosts=0
    type: "function handle, optional"
  - content: "Function handle to the function that defines the path constraints. The signature of the function handle is `fh(ch,x,t,p)` where `ch` is the contraints handler, `t` is the time, `p` are the parameters."
    name: pathconstraints=[]
    type: "function handle, optional"
  - content: "Function handle to the function that defines the boundary conditions. The signature of the function handle is `fh(ch,x0,xF,p)` where `ch` is the contraints handler, `x0` are the initial states, `xF` are the terminal states, `p` are the parameters."
    name: boundaryconditions=[]
    type: "function handle, optional"
  - content: "Function handle to the function that defines discrete cost. The discrete cost terms can depend on any variable of the discretized optimal control problem which is a non-linear program (NLP). The signature of the function handle is `fh(ch, V)` where `ch` is the cost handler, and `V` of type [OclVariable](#apiocl_variable) are the nlp variables."
    name: discretecosts=[]
    type: "function handle, optional"

methods: 
  - content: "Adds a path cost term of the form c_p(x,z,u,p)."
    name: addPathCost
    parameters: 
      - name: cost
        content: "Scalar variable containing the cost"
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - content: "Adds an end cost term of the form c_f(x,p)."
    name: addArrivalCost
    parameters: 
      - name: cost
        content: "Scalar variable containing the cost"
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - content: "Adds a path constraint of the form c_p_lower(x,u,z,p)<=c_p(x,u,z,p)<=c_p_upper(x,u,z,p) to the optimal control problem."
    name: "addPathConstraint"
    parameters: 
      - content: "Left hand side of the constraint equation"
        name: lhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
      - content: "One of the following operators as a string: '<=', '==', '>='"
        name: operator
        type: char
      - content: "Right hand side of the constraint equation"
        name: rhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - content: "Adds a boundary constraint of the form c_b_lower(x0,xf,p)<=c_b(x0,xf,p)<=c_b_upper(x0,xf,p) that can depend on the initial and final states to the optimal control problem."
    name: "addBoundaryCondition"
    parameters: 
      - content: "Left hand side of the constraint equation"
        name: lhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
      - content: "One of the following operators as a string: '<=', '==', '>='"
        name: operator
        type: char
      - content: "Right hand side of the constraint equation"
        name: rhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - content: "Adds a cost term that can depend on any variable in the discretized optimal control problem."
    name: addDiscreteCost
    parameters: 
      - content: "Scalar variable containing the cost c_d(v_d)"
        name: cost
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
position: 2
returns: ~
title: OclOCP
type: Class
---
