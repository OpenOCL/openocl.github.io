---
version: 7
name: ocl.MultiStageProblem
title: ocl.MultiStageProblem
position: 21
type: class
description: "Creates a multi-stage optimal control problem (multiple phases). "
altname: multistage
code_block:
  title: Example
  language: m
  code: |-

parameters:

  - name: "stages"
    content: "List (cell-array) of stages."
    type: "cell<[ocl.Stage](#apiocl_stage)>"

  - name: "transitions"
    content: "List (cell-array) of transitions. The number of transitions has to be one less than the number of stages."
    type: "cell<[ocl.Transition](#apiocl_transition)>"
    
  - name: userdata
    content: "A data field that can be used to pass any kind of constant data to the model functions. The userdata can be accessed by using the `userdata` property of `ocl.Cost`, `ocl.Constraint`, `ocl.DaeHandler`, and `ocl.VarHandler`. Defaults to an empty list."
    type: Any type, for example a struct or list.

returns:
  - content: The problem object.
    type: ocl.MultiStageProblem
content_markdown: ~
left_code_blocks: ~
methods:
  - name: "getInitialGuess"
    content: "Use this method to retrieve a first initial guess that is generated from the bounds. You can further modify this initial guess to improve the solver performance."
    parameters: ~
    returns:
      - content: "Structured variable for setting the initial guess for each stage (given as cell array)."
        name: initialGuess
        type: "cell<[OclVariable](#apiocl_variable)>"
  - name: "solve"
    content: "Calls the solver and starts doing iterations."
    parameters:
      - content: "Structured variable containing the initial guess for each stage (given as cell array)."
        name: initialGuess
        type: "cell<[OclVariable](#apiocl_variable)>"
    returns:
      - content: "The solution of the OCP for each stage (given as cell array)."
        type: "cell<[OclVariable](#apiocl_variable)>"
      - content: "Time points of the solution"
        type: "cell<[OclVariable](#apiocl_variable)>"
---
