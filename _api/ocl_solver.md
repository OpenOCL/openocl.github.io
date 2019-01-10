--- 
name: OclSolver
position: 3
type: Function
description: "Creates a solver object that discretizes the given system and optimal control problem, and calls the underlying optimizer. Before solving set options, parameters, bounds, and the initial guess:"
code_block:
  title: Example
  language: m
  code: |- 
    opt = OclOptions();
    opt.nlp.controlIntervals = 30;
    ocl = OclSolver(VanDerPolSystem,VanDerPolOCP,opt);
    
    ocl.setBounds('p', -0.25, inf);
    ocl.setInitialBounds('p', 0);
    ocl.setParameter('time', 5, 10);
    
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
    
    % plotting of state p trajectory:
    plot(t.states.value,v.states.p.value)
    
parameters: 
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
    content: "Sets a fixed bound on variable for the whole trajectory."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "char"
      - content: "The fixed value for the bound"
        name: "value"
        type: "numeric"
  - name: "setBounds"
    content: "Sets a bound on variable for the whole trajectory."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "char"
      - content: "The lower bound"
        name: "lower"
        type: "numeric"
      - content: "The upper bound"
        name: "upper"
        type: "numeric"
  - name: "setInitialBounds"
    content: "Sets a fixed initial bound on a variable."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "char"
      - content: "The fixed value for the bound"
        name: "value"
        type: "numeric"
  - name: "setInitialBounds"
    content: "Sets an initial bound on variable"
    parameters:
      - content: "The variable id"
        name: "id"
        type: "char"
      - content: "The lower bound"
        name: "lower"
        type: "numeric"
      - content: "The upper bound"
        name: "upper"
        type: "numeric"
  - name: "setEndBounds"
    content: "Sets a fixed end bound on a variable."
    parameters:
      - content: "The variable id"
        name: "id"
        type: "char"
      - content: "The fixed value for the bound"
        name: "value"
        type: "numeric"
  - name: "setEndBounds"
    content: "Sets an end bound on variable"
    parameters:
      - content: "The variable id"
        name: "id"
        type: "char"
      - content: "The lower bound"
        name: "lower"
        type: "numeric"
      - content: "The upper bound"
        name: "upper"
        type: "numeric"
  - name: "setParameter"
    content: "Sets a fixed bound on the parameter with the given name."
    parameters:
      - content: "The parameter name"
        name: "id"
        type: "char"
      - content: "The fixed value for the bound"
        name: "value"
        type: "numeric"
  - name: "setParameter"
    content: "Sets a bound on the parameter with the given name."
    parameters:
      - content: "The parameter name"
        name: "id"
        type: "char"
      - content: "The lower bound"
        name: "lower"
        type: "numeric"
      - content: "The upper bound"
        name: "upper"
        type: "numeric"
---
