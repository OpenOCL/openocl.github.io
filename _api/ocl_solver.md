--- 
name: OclSolver
position: 20
type: Function
description: "Creates a solver object that discretizes the given system and optimal control problem, and calls the underlying optimizer. Before solving set options, parameters, bounds, and the initial guess:"
code_block:
  title: Example
  language: m
  code: |- 
    opt = OclOptions();
    opt.nlp.controlIntervals = 30;
    ocl = OclSolver(10,VanDerPolSystem,VanDerPolOCP,opt);
    
    ocl.setBounds('p', -0.25, inf);
    ocl.setInitialBounds('p', 0);
    
    v0 = ocl.getInitialGuess();
    v0.states.p = -0.2;
    
    [v,t] = ocl.solve(v0);
    
    % initial guess, solution and times have
    % the following structure:
    v.states     % state trajectory
    v.controls   % control trajectory
    v.algVars    % algebraic variable trajectory
    v.integrator % integrator variables
    t.states     % time points of states
    t.controls   % time points of controls
    
    % plotting of control and state p trajectory:
    oclPlot(t.controls,v.controls.u)
    oclPlot(t.states,v.states.p)
    
parameters: 
  - content: "The end time/horizon length of the optimal control problem. You can alternatively specify a vector of `length(T)==N+1` to set the timepoints at which the optimal control problem is discretized. The default discretizatoin is at times `linspace(0,1,N+1)*T`. If you pass a vector of `length(T)==N`, the entries of `T` are the timesteps of the control interval, e.g. `T=linspace(0.1,0.1,N)`. If you specify `T=[]`, the final time of the optimal control problem is free. The endtime is available in the parameters as `p.T`. The normalized discretization of the control intervals is available in the controls as `u.h_normalized`. You can set bounds on `T` and `h_normalized` as you can do on any other variable. If your system equatiosn are expressed as function of an independent variable other than time, the same holds just that `T` represents not the end time but the endpoint of the integration over the independent variable."
    name: "T"
    type: "numeric"
  - content: "The system dynamics"
    name: "system"
    type: "[OclSystem](#apiocl_system)"
  - content: "The optimal control problem"
    name: "ocp"
    type: "[OclOCP](#apiocl_ocp)"
  - content: "Options struct, can be created with [OclOptions](#apiocl_options)()"
    name: "options"
    type: "struct"

returns: 
  - content: A solver object.
    type: OclSolver
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
      - content: "Time points of the solution"
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
  - name: "setParameter"
    content: "Sets a bound on the parameter with the given name. If only the lower bound is given, it will be `lb==ub`. A bound can be either scalar or a vector with `length(lb)==length(ub)==N+1` for states and `length(lb)==length(ub)==N` for control variables."
    parameters:
      - content: "The parameter name"
        name: "id"
        type: "char"
      - content: "The lower bound"
        name: "lb"
        type: "numeric"
      - content: "The upper bound"
        name: "ub,optional"
        type: "numeric"
---
