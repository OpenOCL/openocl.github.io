--- 
name: Simulator
type: Class
parameters: 
  - content: "The system dynamics"
    name: "system"
    type: "[OclSystem](#apiocl_system)"
  - content: "Options struct, can be created with Simulator.getOptions(). Defaults to empty struct."
    name: "options"
    type: "struct, optional"
position: 6
returns: 
  - content: the Simulator object.
    type: Simulator
content_markdown: ~
description: "Performs simulations of the system by integrating the system dynamics."
left_code_blocks: ~
methods: 
  - name: "getControlsVec"
    content: "Gives you a structured variable that allows you to specify an open-loop control input by setting values to the variable. The default value for all variables is zero."
    parameters: 
      - name: N
        type: int
        content: Number of control intervals
    returns: 
      - content: "The control vector."
        type: "[OclVariable](#apiocl_variable)"
  - name: "getStates"
    content: "Returns a structured state variable that you can use to pass as the initial state to the simulator. All variable values default to zero."
    parameters:
    returns: 
      - content: The states."
        type: "[OclVariable](#apiocl_variable)"
  - name: "getParameters"
    content: "Returns a structured state variable that allows you to set parameters for the simulation. All parameter values default to zero."
    parameters:
    returns: 
      - content: The parameters."
        type: "[OclVariable](#apiocl_variable)"
  - name: "simulate"
    content: "Simulates the system for the given time interval."
    parameters:
      - content: "The initial state."
        name: "x0"
        type: "[OclVariable](#apiocl_variable)"
      - content: "Times vector. The system will be evaluated at the given time points."
        name: "times"
        type: "numeric"
      - content: "The parameters set to numeric values."
        name: "p"
        type: "[OclVariable](#apiocl_variable)"
      - content: "Controls vector with open-loop controls. Defaults to zero valued controls."
        name: "uVec"
        type: "[OclVariable](#apiocl_variable), optional"
    returns: 
      - content: The state trajectory."
        type: "[OclVariable](#apiocl_variable)"
      - content: The trajectory of algebraic variables."
        type: "[OclVariable](#apiocl_variable)"
      - content: The control inputs applied to the system."
        type: "[OclVariable](#apiocl_variable)"
---
