---
version: 6
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
      solver = ocl.Solver(10, @varsfun, @daefun, @pathcost, 'N', 30);

      solver.setInitialBounds('x',     0);
      solver.setInitialBounds('y',     1);

      initialGuess = solver.getInitialGuess();
      initialGuess.states.x.set(-0.2);

      [solution,timepoints] = solver.solve(initialGuess);

      % plotting of control and state p trajectory:
      ocl.plot(timepoints.controls, solution.controls.u)
      ocl.plot(timepoints.states, solution.states.p)
    end

    function varsfun(vh)
      vh.addState('x', 'lb', -0.25, 'ub', inf);
      vh.addState('y');
      vh.addControl('F', 'lb', -1, 'ub', 1);
    end

    function daefun(daeh,x,~,u,~)
      daeh.setODE('x', (1-x.y^2)*x.x - x.y + u.F);
      daeh.setODE('y', x.x);
    end

    function pathcost(ch,x,~,u,~)
      ch.add( x.x^2 );
      ch.add( x.y^2 );
      ch.add( u.F^2 );
    end


parameters:

  - name: "T"
    content: "The end time/horizon length of the optimal control problem. If your system equations are expressed as function of an independent variable other than time, `T` represents not the end time but the endpoint of the integration over the independent variable. If you would like to optimize for time in a **time optimal control** formulation pass the empty list `[]`"
    type: "numeric or []"

  - name: vars
    content: "System variables function. Optional, defaults to an empty function handle."
    type: "[@(vh)](#apiocl_@(vh))"

  - name: dae
    content: "DAE (system equations) function. Optional, defaults to an empty function handle."
    type: "[@(daeh,x,z,u,p)](#apiocl_@(daeh,x,z,u,p))"

  - name: pathcost
    content: "Path-cost function. Optional, defaults to a function handle returning 0."
    type: "[@(ch,x,z,u,p)](#apiocl_@(ch,x,z,u,p))"

  - name: terminalcost
    content: "Terminal cost function. Optional, defaults to a function handle returning 0."
    type: "[@(ch,x,p)](#apiocl_@(ch,x,p))"

returns:
  - content: A solver object.
    type: ocl.Solver
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
  - name: "setBounds"
    content: "Sets a bound on a variable for the whole trajectory. If only the lower bound is given, it will be `lb==ub`. A bound can be a scalar, a vector of the size of the variable, or a vector/matrix with `length(lb)==length(ub)==N+1` for states and `length(lb)==length(ub)==N` for control variables."
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
        name: "ub,optional"
        type: "numeric"
---
