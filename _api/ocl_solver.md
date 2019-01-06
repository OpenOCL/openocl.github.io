--- 
content_markdown: ~
description: "Creates a solver object that discretizes the given system and optimal control problem, and calls the underlying optimizer."
left_code_blocks: 
  - 
    code_block: |-
        ocl = OclSolver(system,ocp,options);
        initialGuess = ocl.getInitialGuess();
        initialGuess.set(3);
        solutions = ocl.solve(initialGuess);
    language: Matlab
    title: "Code Example"
methods: 
  - 
    name: "initialGuess = getInitialGuess()"
    parameters: ~
    returns: 
      - 
        content: "Structure variable for setting the initial guess"
        name: initialGuess
        type: OclVariable
  - 
    name: "solution = solve(initialGuess)"
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
parameters: 
  - 
    content: "The system dynamics"
    name: system
    type: OclSystem
  - 
    content: "The optimal control problem"
    name: ocp
    type: OclOCP
  - 
    content: "Options struct, can be created with OclOptions()"
    name: options
    type: struct
position: ~
returns: 
  - 
    content: ~
    name: solver
    type: OclSolver
title: "ocl.Solver(system, ocp, options)"
type: Function
---