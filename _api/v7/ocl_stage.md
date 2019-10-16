---
version: 7
name: ocl.Stage
title: ocl.Stage
description: |
  The definition of a Stage.
type: class
code_block:
  title: Example Stage
  language: m
  code: |-
    stage = ocl.Stage([], @vars, @ode, 'N', 10, 'd', 2);

    % Function definitions can be in the same file
    % (if the main script is wrapped by a function)
    % or in separate files:
    function vars(sh)
      sh.addState('s');
      sh.addState('v');
    end

    function ode(sh,x,~,~,~)
      sh.setODE('s', x.v);
      sh.setODE('v', -10);
    end

parameters:

  - name: "T"
    content: "The end time/horizon length of the optimal control problem. If your system equations are expressed as function of an independent variable other than time, `T` represents not the end time but the endpoint of the integration over the independent variable. If you would like to optimize for time, **time optimal control**, pass the empty list `[]`"
    type: "numeric or []"

  - name: vars
    content: "System variables function. Optional, defaults to an empty function handle."
    type: "[@(vars_handler)](#api@vars)"

  - name: dae
    content: "DAE (system equations) function. Optional, defaults to an empty function handle."
    type: "[@(dae_handler,x,z,u,p)](#api@dae)"

  - name: pathcosts
    content: "Path-costs function. Optional, defaults to a function handle returning 0."
    type: "[@(cost_handler,x,z,u,p)](#api@pathcost)"

  - name: gridcosts
    content: "Grid-cost function. Optional, defaults to a function handle returning 0."
    type: "[@(costh,k,K,x,p)](#api@gridcost)"

  - name: gridconstraints
    content: "Grid-constraints function. Optional, defaults to no constraints added."
    type: "[@(conh,k,K,x,p)](#api@gridcost)"

  - name: terminalcost
    content: "Terminal cost function. Optional, defaults to a function handle returning 0."
    type: "[@(ch,x,p)](#api@terminalcost)"

  - name: N
    content: "Number of control intervals. Defaults to `20`."
    type: Integer

  - name: d
    content: "Degree of the interpolating polynomial in each control interval. Defaults to `3`."
    type: Integer in [2,5]

  - name: userdata
    content: "A data field that can be used to pass any kind of constant data to the model functions. The userdata can be accessed by using the `userdata` property of `ocl.Cost`, `ocl.Constraint`, `ocl.DaeHandler`, and `ocl.VarHandler`. Defaults to an empty list."
    type: Any type, for example a struct or list.

position: 10
returns: ~
---
