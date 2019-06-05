--- 
name: ocl.Solver
title: ocl.Solver (multi-stage)
position: 21
type: Class
description: "Creates a solver object for multi-stage problems. "
code_block:
  title: Example
  language: m
  code: |- 
    
parameters: 

  - name: "stages"
    default: "{}"
    content: "List (cell-array) of stages. Optional, defaults to empty list."
    type: "cell<[ocl.Stage](#apiocl_stage)>"
    
  - name: "transitions"
    default: "{}"
    content: "List (cell-array) of transitions. Optional, defaults to empty list."
    type: "cell<[ocl.Transition](#apiocl_transition)>"

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
      - content: "Time points of the solution"
        type: "[OclVariable](#apiocl_variable)"
---
