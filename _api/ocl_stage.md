--- 
name: ocl.Stage
description: |
  The definition of a Stage.

code_block:
  title: Example Stage
  language: m
  code: |-
    ocp = OclStage('pathcosts', @pathcostfun);
    
    % Function definitions can be in the same file 
    % (if the main script is wrapped by a function) 
    % or in separate files:
    function pathcostfun(ch,x,z,u,p)
      ch.add( x.p^2 );
      ch.add( x.v^2 );
      ch.add( u.u^2 );
    end
    
parameters: 
  - content: "Function handle to the function that defines the path costs (also called Lagrange cost or intermediate cost). The signature of the function handle is `fh(ch,x,z,u,p)` where `ch` is the [OclCostHandler](#apiocl_cost_handler), `x` are the states, `z` are the algebraic variables, `u` are the controls, and `p` are the parameters."
    name: pathcosts=0
    type: "function handle, optional"
  - content: "Function handle to the function that defines the arrival costs (also called Mayer terms). The signature of the function handle is `fh(ch,x,T,p)` where `ch` is the [OclCostHandler](#apiocl_cost_handler), `x` are the terminal states, `T` is the final time, `p` are the parameters."
    name: arrivalcosts=0
    type: "function handle, optional"
  - content: "Function handle to the function that defines the path constraints. The signature of the function handle is `fh(ch,x,t,p)` where `ch` is the [OclConstraintHandler](#apiocl_constraint_handler), `t` is the time, `p` are the parameters."
    name: pathconstraints=[]
    type: "function handle, optional"
  - content: "Function handle to the function that defines the boundary conditions. The signature of the function handle is `fh(ch,x0,xF,p)` where `ch` is the [OclConstraintHandler](#apiocl_constraint_handler), `x0` are the initial states, `xF` are the terminal states, `p` are the parameters."
    name: boundaryconditions=[]
    type: "function handle, optional"
  - content: "Function handle to the function that defines discrete cost. The discrete cost terms can depend on any variable of the discretized optimal control problem which is a non-linear program (NLP). The signature of the function handle is `fh(ch, V)` where `ch` is the [OclCostHandler](#apiocl_cost_handler), and `V` of type [OclVariable](#apiocl_variable) are the nlp variables."
    name: discretecosts=0
    type: "function handle, optional"
position: 10
returns: ~
title: OclOCP
type: Class
---
