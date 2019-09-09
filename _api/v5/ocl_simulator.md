--- 
version: 5
name: Simulator
title: Simulator
position: 50
type: class
code_block:
  title: Simulator Example
  language: m
  code: |-
    simulator = Simulator(PendulumSystem);

    x0 = simulator.getStates();
    x0.p = [0;1];
    x0.v = [-0.5;-1];

    p = simulator.getParameters();
    p.m = 1;
    p.l = 1.5;

    t = linspace(0,4,20);

    % apply constant force
    uVec = simulator.getControlsVec(20);
    uVec.F = 10;

    [xVec,zVec,uVec] = simulator.simulate(x0,t,uVec,p);
parameters: 
  - content: "The system dynamics"
    name: "system"
    type: "[OclSystem](#apiocl_system)"
  - content: "Options struct, can be created with Simulator.getOptions(). Defaults to empty struct."
    name: "options"
    type: "struct, optional"
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
    parameters: ~
    returns: 
      - content: The states.
        type: "[OclVariable](#apiocl_variable)"
  - name: "getParameters"
    content: "Returns a structured state variable that allows you to set parameters for the simulation. All parameter values default to zero."
    parameters: ~
    returns: 
      - content: The parameters.
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
      - content: The state trajectory.
        type: "[OclVariable](#apiocl_variable)"
      - content: The trajectory of algebraic variables.
        type: "[OclVariable](#apiocl_variable)"
      - content: The control inputs applied to the system.
        type: "[OclVariable](#apiocl_variable)"
---
