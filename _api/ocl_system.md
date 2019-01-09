--- 
name: OclSystem
content_markdown: ~
description: "The system is implemented by inheriting from the System class. You need to implement the two methods setupVariables and setupEquation. Have a look at the VanDerPolSystem.m in the Examples folder get an impression on how it works."
left_code_blocks: ~
methods: 
  - content: "Adds a state variable to the system. This function must be called within the setupEquation method."
    name: "addState"
    parameters: 
      - content: "Name of the state variable"
        name: "id"
        type: "char"
      - content: "Size of the state variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: size
        type: "int, optional"
    returns: ~
  - content: "Adds an algebraic variable to the system. This function must be called within the setupEquation method."
    name: "addAlgVar"
    parameters: 
      - content: "Name of the algebraic variable"
        name: id
        type: char
      - content: "Size of the algebraic variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: size
        type: "int, optional"
    returns: ~
  - content: "Adds an control input to the system. This function must be called within the setupEquation method."
    name: "addControl"
    parameters: 
      - content: "Name of the control variable"
        name: id
        type: char
      - content: "Size of the control variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: size
        type: "int, optional"
    returns: ~
  - content: "Adds a parameter. This function must be called within the setupEquation method."
    name: "addParameter"
    parameters: 
      - content: "Name of the parameter"
        name: id
        type: char
      - content: "Size of the control variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: size
        type: "int, optional"
    returns: ~
  - content: "Adds a differential equation to the system. Note that for every state variable a differential equation must be specified."
    name: "setODE"
    parameters: 
      - name: id
        content: "Name of the state variable for that the differential equation is given."
        type: char
      - name: equation
        content: "The equation specifies the derivative of a state variable. Right hand side of the differential equation dot(x) = f(x,z,u,p) for state variable x."
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - name: setAlgEquation
    content: "Adds an algebraic equation to the system. Note that in order to be able to simulate the system, the total number of rows of the algebraic equations needs to be equal to the total number/dimension of algebraic variables."
    parameters: 
      - content: "Algebraic equation g in the form g(x,z,u,p)=0"
        name: equation
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
methods_abstract: 
  - name: setupVariables
    content: "Implement this method to define the system variables. You can create state, control and algebraic variables using the class methods."
    parameters: ~
    returns: ~
    code_block:
      title: Code example
      language: m
      code: |-
        function setupVariables(self)
          % two scalar state variables
          self.addState('x',[1,1]);
          self.addState('y',[1,1]);
          % one scalar control input
          self.addControl('u',[1,1]);      
        end
  - content: "Implement this method to specify the differential and algebraic equations. It is possible to define only ordinary differential equations (ODE system), or differential and algebraic equations (DAE system)."
    name: "setupEquation"
    parameters: 
      - content: "State variables"
        name: x
        type: "[OclVariable](#apiocl_variable)"
      - content: "Algebraic Variables"
        name: z
        type: "[OclVariable](#apiocl_variable)"
      - content: "Control variables"
        name: u
        type: "[OclVariable](#apiocl_variable)"
      - content: Parameters
        name: p
        type: "[OclVariable](#apiocl_variable)"
    returns: ~
parameters: ~
position: 1
returns: ~
right_code_blocks: ~
title: "OclSystem"
type: Class

---
