---
version: 7
name: ocl.Problem
title: ocl.Problem
position: 20
type: class
description: "Creates a single-stage optimal control problem. "
code_block:
  title: Example
  language: m
  code: |-
    function vanderpol
      problem = ocl.Problem(10, @varsfun, @daefun, @pathcost, 'N', 30);

      problem.setInitialBounds('x',     0);
      problem.setInitialBounds('y',     1);

      problem.initialize('x', [0 1], [-0.2 -0.2]);

      [solution,timepoints] = problem.solve();

      % plotting of control and state p trajectory:
      ocl.plot(timepoints.controls, solution.controls.u)
      ocl.plot(timepoints.states, solution.states.p)
    end

    function varsfun(vh)
      vh.addState('x', 'lb', -0.25, 'ub', inf);
      vh.addState('y');
      vh.addControl('F', 'lb', -1, 'ub', 1);
    end

    function daefun(daeh,x,z,u,p)
      daeh.setODE('x', (1-x.y^2)*x.x - x.y + u.F);
      daeh.setODE('y', x.x);
    end

    function pathcost(ch,x,z,u,p)
      ch.add( x.x^2 );
      ch.add( x.y^2 );
      ch.add( u.F^2 );
    end


parameters:

  - name: "T"
    content: "The end time/horizon length of the optimal control problem. If your system equations are expressed as function of an independent variable other than time, `T` represents not the end time but the endpoint of the integration over the independent variable. If you would like to optimize for time in a **time optimal control** formulation pass the empty list `[]`."
    type: "numeric or []"

  - name: vars
    content: "System variables function. Defaults to an empty function handle."
    type: "[@(vh)](#api@vars)"

  - name: dae
    content: "DAE (system equations) function. Defaults to an empty function handle."
    type: "[@(daeh,x,z,u,p)](#api@dae)"

  - name: pathcosts
    content: "Path-cost function. Defaults to a function handle returning `0`."
    type: "[@(costh,x,z,u,p)](#api@pathcost)"

  - name: gridcosts
    content: "Grid-cost function. Defaults to a function handle returning `0`."
    type: "[@(costh,k,K,x,p)](#api@gridcost)"

  - name: gridconstraints
    content: "Grid-constraints function. Defaults to no constraints added."
    type: "[@(conh,k,K,x,p)](#api@gridcost)"

  - name: terminalcost
    content: "Terminal cost function. Defaults to a function handle returning `0`."
    type: "[@(ch,x,p)](#api@terminalcost)"

  - name: N
    content: "Number of control intervals. Defaults to `20`."
    type: Integer

  - name: d
    content: "Degree of the interpolating polynomial in each control interval. Defaults to `3`."
    type: Integer in [2,5]

  - name: verbose
    content: "If set to `false` no solver output will be shown. Defaults to `true`."
    type: Boolean

  - name: userdata
    content: "A data field that can be used to pass any kind of constant data to the model functions. The userdata can be accessed by using the `userdata` property of [ocl.Cost](#apiocl_cost), [ocl.Constraint](#apiocl_constraint),  [ocl.DaeHandler](#apiocl_daehandler), and [ocl.VarHandler](@apiocl_varshandler). Defaults to an empty list."
    type: Any type, for example a struct or list.

  - name: nlp_casadi_mx
    content: If set to `true`, `casadi.MX` symbolics are used instead of `casadi.SX` symbolics. Defaults to `false`.
    type: Boolean

  - name: controls_regularization
    content: If set to `true`, a small cost on the control inputs is added depending on the weight given by `controls_regularization_value`. Defaults to `true`.
    type: Boolean

  - name: controls_regularization_value
    content: The weight for the `controls_regularization`. Defaults to `1e-6`.
    type: Float
  - name: casadi_options
    content: Options struct for casadi and ipopt.
    type: CasadiOptions

returns:
  - content: The Problem object.
    type: ocl.Problem
content_markdown: ~
left_code_blocks: ~
methods:
  - name: "solve"
    content: "Calls the solver and starts doing iterations."
    parameters: ~
    returns:
      - content: "The solution of the OCP"
        type: "[ocl.Variable](#apiocl_variable)"
      - content: "Grid points of the solution"
        type: "[ocl.Variable](#apiocl_variable)"
  - name: "solve"
    content: "Calls the solver and starts doing iterations."
    parameters:
      - content: "An initial guess, for example from a previous solution."
        name: "ig"
        type: "[ocl.Variable](#apiocl_variable)"
    returns:
      - content: "The solution of the OCP"
        type: "[ocl.Variable](#apiocl_variable)"
      - content: "Grid points of the solution"
        type: "[ocl.Variable](#apiocl_variable)"
  - name: "setBounds"
    content: "Sets a bound on a variable for the whole trajectory. If only the lower bound is given, it will be `lb==ub`."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "string"
      - content: "The lower bound"
        name: "lb"
        type: "numeric"
      - content: "The upper bound"
        name: "ub"
        type: "numeric,optional"
  - name: "setInitialBounds"
    content: "Sets an initial bound on a variable. If only the lower bound is given, it will be `lb==ub`."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "string"
      - content: "The lower bound"
        name: "lb"
        type: "numeric"
      - content: "The upper bound"
        name: "ub"
        type: "numeric,optional"
  - name: "setEndBounds"
    content: "Sets an end bound on a variable. If only the lower bound is given, it will be `lb==ub`."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "string"
      - content: "The lower bound"
        name: "lb"
        type: "numeric"
      - content: "The upper bound"
        name: "ub"
        type: "numeric,optional"
  - name: "initialize"
    content: "Sets an initial guess for a variable."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "string"
      - content: "The normalized gridpoints. The gridpoints is a list of values between `0` and `1` where `0` is the beginning of the trajectory and `1` is the final time of the trajectory."
        name: "gridpoints"
        type: "numeric"
      - content: "The initial guess values at the gridpoints. The number of columns of `values` must be equal to the length of `gridpoints`."
        name: "values"
        type: "numeric"
---
