--- 
name: OclSolver
content_markdown: ~
description: "Creates a solver object that discretizes the given system and optimal control problem, and calls the underlying optimizer."
left_code_blocks: 
  - code_block: |-
        ocl = OclSolver(system,ocp,options);
        initialGuess = ocl.getInitialGuess();
        initialGuess.set(3);
        solutions = ocl.solve(initialGuess);
    language: Matlab
    title: "Code Example"
methods: 
  - 
    name: "initialGuess = getInitialGuess"
    content: "Use this method to retrieve a first initial guess that is generated from the bounds. You can further modify this initial guess to improve the solver performance."
    parameters: ~
    returns: 
      - 
        content: "Structured variable for setting the initial guess"
        name: initialGuess
        type: OclVariable
  - 
    name: "solution = solve"
    content: "Calls the solver and starts doing iterations."
    parameters: 
      - 
        content: "Provide a good initial guess"
        name: initialGuess
        type: OclVariable
    returns: 
      - 
        content: "The solution of the OCP"
        name: solution
        type: OclVariable
  -
    name: "setBounds"
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
  -name: "setInitialBounds"
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
      -
        content: "The variable id"
        name: "id"
        type: "char"
      - 
        content: "The lower bound"
        name: "lower"
        type: "numeric"
      - 
        content: "The upper bound"
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
    content: "Sets a fixed bound on the parameter with the given id."
    parameters:
      - content: "The parameter id"
        name: "id"
        type: "char"
      - content: "The fixed value for the bound"
        name: "value"
        type: "numeric"
  - name: "setParameter"
    content: "Sets a bound on the parameter with the given id."
    parameters:
      - content: "The parameter id"
        name: "id"
        type: "char"
      - content: "The lower bound"
        name: "lower"
        type: "numeric"
      - content: "The upper bound"
        name: "upper"
        type: "numeric"
parameters: 
  - content: "The system dynamics"
    name: "system"
    type: "OclSystem"
  - content: "The optimal control problem"
    name: "ocp"
    type: "OclOCP"
  - content: "Options struct, can be created with OclOptions()"
    name: "options"
    type: "struct"
position: 3
returns: 
  - content: A solver object.
    type: OclSolver
title: "OclSolver(system, ocp, options)"
type: Function
---
