---
version: 7
name: ocl.Simulator
title: ocl.Simulator
position: 50
type: class
code_block:
  title: Simulator Example
  language: m
  code: ~
parameters:

  - name: "vars"
    default: "@(vars_handler)[]"
    content: "System variables function. Optional, defaults to an empty function handle."
    type: "[@(vars_handler)](#apiocl_@vars)"

  - name: dae
    default: "@(dae_handler,x,z,u,p)[]"
    content: "DAE (system equations) function. Optional, defaults to an empty function handle."
    type: "[@(dae_handler,x,z,u,p)](#apiocl_@dae)"

returns:
  - content: the Simulator object.
    type: Simulator
content_markdown: ~
description: "Performs simulations of the system by integrating the system dynamics."
left_code_blocks: ~
methods:
  - name: "getStates"
    content: "Returns a structured state variable that you can use to pass as the initial state to the simulator. All variable values default to zero."
    parameters: ~
    returns:
      - content: The states.
        type: "[ocl.Variable](#apiocl_variable)"
  - name: "getParameters"
    content: "Returns a structured state variable that allows you to set parameters for the simulation. All parameter values default to zero."
    parameters: ~
    returns:
      - content: The parameters.
        type: "[ocl.Variable](#apiocl_variable)"

  - name: "reset"
    content: "Sets the initial state of the simulation."
    parameters:  
      - name: x0
        content: "Initial state"
        type: "[ocl.Variable](#apiocl_variable) or numeric"

  - name: "step"
    content: "Simulate one step using the control input."
    parameters:  
      - name: u
        content: "The controls"
        type: "[ocl.Variable](#apiocl_variable) or numeric"
      - name: dt
        content: "The timestep"
        type: numeric
    returns:
      - content: The state.
        type: "[ocl.Variable](#apiocl_variable)"
      - content: Algebraic variables.
        type: "[ocl.Variable](#apiocl_variable)"
---
