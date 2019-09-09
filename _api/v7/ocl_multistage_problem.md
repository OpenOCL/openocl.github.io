---
version: 7
name: ocl.MultistageProblem
title: ocl.MultistageProblem
position: 21
type: class
description: "Creates a multi-stage (multiple phases) optimal control problem. "
altname: multistage
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
  - content: The problem object.
    type: ocl.MultistageProblem
content_markdown: ~
left_code_blocks: ~
methods:
  - name: "getInitialGuess"
    content: "Use this method to retrieve a first initial guess that is generated from the bounds. You can further modify this initial guess to improve the solver performance."
    parameters: ~
    returns:
      - content: "Structured variable for setting the initial guess for each stage (given as cell array)."
        name: initialGuess
        type: "cell<[OclVariable]>(#apiocl_variable)"
  - name: "solve"
    content: "Calls the solver and starts doing iterations."
    parameters:
      - content: "Structured variable containing the initial guess for each stage (given as cell array)."
        name: initialGuess
        type: "cell<[OclVariable]>(#apiocl_variable)"
    returns:
      - content: "The solution of the OCP for each stage (given as cell array)."
        type: "cell<[OclVariable]>(#apiocl_variable)"
      - content: "Time points of the solution"
        type: "cell<[OclVariable]>(#apiocl_variable)"
---
