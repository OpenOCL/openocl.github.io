---
version: 5
name: ocl.Solver
title: ocl.Solver
position: 20
type: class
description: "Creates a solver object that discretizes the given optimal control problem, and calls the underlying optimizer. "
code_block:
  title: Example
  language: m
  code: |-
    function vanderpol
      solver = ocl.Solver(10, @varsfun, @daefun, @pathcosts, 'N', 30);

      solver.setInitialBounds('x',     0);
      solver.setInitialBounds('y',     1);

      initialGuess = solver.getInitialGuess();
      initialGuess.states.x.set(-0.2);

      [solution,timepoints] = solver.solve(initialGuess);

      % initial guess, solution and times have
      % the following structure:
      solution.states       % state trajectory
      solution.controls     % control trajectory
      solution.parameters   % parameters
      timepoints.states     % time points of states
      timepoints.controls   % time points of controls

      % plotting of control and state p trajectory:
      oclPlot(timepoints.controls, solution.controls.u)
      oclPlot(timepoints.states, solution.states.p)
    end

    function varsfun(svh)
      svh.addState('x', 'lb', -0.25, 'ub', inf);
      svh.addState('y');
      svh.addControl('F', 'lb', -1, 'ub', 1);
    end

    function daefun(daeh,x,~,u,~)
      daeh.setODE('x', (1-x.y^2)*x.x - x.y + u.F);
      daeh.setODE('y', x.x);
    end

    function pathcosts(ch,x,~,u,~)
      ch.add( x.x^2 );
      ch.add( x.y^2 );
      ch.add( u.F^2 );
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
    content: "Grid-costs function. Optional, defaults to a function handle returning 0."
    type: "[@(cost_handler,k,K,x,p)](#api@gridcost)"

returns:
  - content: A solver object.
    type: ocl.Solver
content_markdown: ~
left_code_blocks: ~
methods:
  - name: "getInitialGuess"
    content: "Use this method to retrieve a first initial guess that is generated from the bounds. You can further modify this initial guess to improve the solver performance."
    parameters: ~
    returns:
      - content: "Structured variable for setting the initial guess"
        name: initialGuess
        type: "[OclVariable](#apiocl_variable)"
  - name: "solve"
    content: "Calls the solver and starts doing iterations."
    parameters:
      - content: "Provide a good initial guess"
        name: initialGuess
        type: "[OclVariable](#apiocl_variable)"
    returns:
      - content: "The solution of the OCP"
        type: "[OclVariable](#apiocl_variable)"
      - content: "Grid points of the solution"
        type: "[OclVariable](#apiocl_variable)"
  - name: "setBounds"
    content: "Sets a bound on a variable for the whole trajectory. If only the lower bound is given, it will be `lb==ub`. A bound can be either scalar or a vector with `length(lb)==length(ub)==N+1` for states and `length(lb)==length(ub)==N` for control variables."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "char"
      - content: "The lower bound"
        name: "lb"
        type: "numeric"
      - content: "The upper bound"
        name: "ub"
        type: "numeric,optional"
  - name: "setInitialBounds"
    content: "Sets an initial bound on a variable. If only the lower bound is given, it will be `lb==ub`. A bound can be either scalar or a vector with `length(lb)==length(ub)==N+1` for states and `length(lb)==length(ub)==N` for control variables."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "char"
      - content: "The lower bound"
        name: "lb"
        type: "numeric"
      - content: "The upper bound"
        name: "ub"
        type: "numeric,optional"
  - name: "setEndBounds"
    content: "Sets an end bound on a variable. If only the lower bound is given, it will be `lb==ub`. A bound can be either scalar or a vector with `length(lb)==length(ub)==N+1` for states and `length(lb)==length(ub)==N` for control variables."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "char"
      - content: "The lower bound"
        name: "lb"
        type: "numeric"
      - content: "The upper bound"
        name: "ub,optional"
        type: "numeric"
---
