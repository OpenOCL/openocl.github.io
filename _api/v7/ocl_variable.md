---
version: 7
name: ocl.Variable
title: ocl.Variable
description: The ocl.Variable type is the basic structure to retrieve, store, modify structured optimization variables. You can access subvariables by their name like the state trajectory or the control variables.
parameters: ~
position: 30
returns: ~
type: class
code_block:
  title: Examples
  language: m
  code: |-
    % v is a solution of an OCP
    % p=[px;py;pz] is of size 3x1
    % p trajectory is of size 3x(N+1)
    % F trajectory is of size 1xN
    % with N control intervals
    p = v.states.p;     % get state p trajectory
    F = v.controls.F;   % get control F trajectory

    % set all 3x1 p states to the same value
    v.states.p = [3;2;1];
    % set p states 4 and 5 in the trajectory
    v.states.p(:,4:5) = [1,2,3;4,5,6].';

    % set all px values of p in state trajectory
    v.states.p(1,:) = 4;

    % plotting of state p trajectory:
    plot(t.states.value,v.states.p.value)
content_markdown: ~
left_code_blocks: ~
methods:
  - content: 'Alternative syntax: var.<span class="arg">id</span> Gets a sub-variable of a variable. You can use the shorthand notation with the dot operator, e.g.: solution.states.x'
    name: "get"
    parameters:
      - content: "Name of the state variable"
        name: id
        type: string
    returns:
      - content: "the sub-variable of the given variable."
        type: ocl.Variable
  - content: 'Alternative syntax: var = <span class="arg">value</span> Sets a value to the variable.'
    name: "set"
    parameters:
      - content: "The value to be set. The value either has to be of the same dimension as the variable or if possible it will be repeated in some dimensions to fit the variable. Scalar values will be set to all entries of the variable. You can use the shorthand notation, e.g. initialGuess.states.x = [1,2,3]"
        name: value
        type: numeric
    returns: ~
  - content: 'Alternative syntax: var(<span class="arg">dim1</span>,<span class="arg">dim2</span>) Gets a slice of a variable. You can slice a variable the same way as you would index a matrix in Matlab/Octave which means linear indexing is also possible.'
    name: "slice"
    parameters:
      - content: "indizes for the first dimension. The indizes can be scalar, integer arrays, or you can use : or end."
        name: "dim1"
        type: "int, :, end"
      - content: "indizes for the second dimension. The indizes can be scalar, integer arrays, or you can use : or end."
        name: "dim2"
        type: "int, :, end, optional"
    return: ~
    returns:
      - content: "the sliced variable."
        type: ocl.Variable
  - content: Get the value of the variable. This is particularly useful if you want to plot the numeric values of the variable, for example for the solution. In system and OCP definition this gives you the underlying symbolic values.
    name: value
    parameters: ~
    returns:
      - content: "the underlying value of the variable. The value can be either numeric (for initial guess and solution) or symbolic (in system/ocp definitions)."
        type: "numeric or casadi.SX or casadi.MX or sym"
  - content: "Display function of OclVariable. It shows the size of the variable, the names of the children variables, and a part of the value. The output of an OCP initial guess variable looks similar to:"
    code_block:
      title: Example disp()
      language: m
      code: |-
        Variable:
          Size: [3681 1]
          Type: OclStructure
          Children: states, integrator, controls, parameters, time
          Value: [100;2;1;0;0;0;0;0;0;0;0;0;0;0;0..]
    name: disp
    parameters: ~
    returns:
---
