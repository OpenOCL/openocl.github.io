--- 
name: OclSolver
position: 3
type: Function
description: "Creates a solver object that discretizes the given system and optimal control problem, and calls the underlying optimizer."
code_block:
  title: Example
  language: m
  code: |
    options = OclOptions();
    options.nlp.controlIntervals = 30;
    ocl = OclSolver(VanDerPolSystem,VanDerPolOCP,options);
    ocl.setBounds('x', -0.25, inf);
    ocl.setInitialBounds('x', 0);
    ocl.setParameter('time', 5, 10);
    initialGuess = ocl.getInitialGuess();
    initialGuess.states.x = -0.2;
    [solution,times] = ocl.solve(initialGuess);
  
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
        name: solution
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
