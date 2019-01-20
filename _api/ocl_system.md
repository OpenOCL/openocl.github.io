--- 
name: OclSystem
description: |-
  There are two ways to implement the dynamics of a system. The first way is by implementing functions for defining the system variables and equations, and creating an OclSystem using the function handles/pointers. The second way involves involves implementing the system in an object oriented way as a class that is inherited from OclSystem. The second way is a bit more involved but for complex systems it allows using the capabilities of classes, e.g. defining instance variables.
  
  **Using system functions** 
  You need to implement two functions, one for defining the system variables, and a second one for defining the system equations. The system is created by passing the two function handles to the constructor of OclSystem.
  
  **By inheriting from OclSystem** You need to inherit your class from OclSystem and implement the two methods setupVariables and setupEquations as static methods. 
  
code_block:
  title: Example System
  language: m
  code: |-

    %% Example code for the two ways of implementing
    %% system. The two resulting systems sys1 and sys2 are 
    %% equivalent.
    %%
    
    %% Using system functions
    %%
    sys1 = OclSystem(@sysVars,@sysEq);
    
    % Function definitions can be in the same file 
    % (if the main script is wrapped by a function) 
    % or in separate files:
    function sysVars(sh)
      sh.addState('p');
      sh.addState('v');
      sh.addControl('u');  
    end
    function sysEq(sh,x,z,u,p)
      sh.setODE('p',(1-x.v^2)*x.p-x.v+u); 
      sh.setODE('v',x.p);
    end
    
    
    %% By inheriting from OclSystem
    %% 
    sys2 = VanDerPolSystem();
    
    % The class definition must be in a separate file.
    % Note that the methods are marked as Static!
    classdef VanDerPolSystem < OclSystem
      methods (Static)
        function setupVariables(self)    
          self.addState('p');
          self.addState('v');
          self.addControl('u');      
        end
        function setupEquations(self,x,z,u,p)     
          self.setODE('p',(1-x.v^2)*x.p-x.v+u); 
          self.setODE('v',x.p);
        end
      end
    end
parameters:
  - content: "Function handle to the function that sets up the variables. The function for the variables must have one input argument, no return values, and thus the following siganture: varFunctionName(sh) where sh is the system handler that allows to add variables and parameters. If no function handle is provided, the system must be implemented by deriving from OclSystem and implementing the abstract methods setupVariables and setupEquations."
    name: fhVars
    type: "function handle, optional"
  - content: "Function handle to the function that sets up the equations. The function for the variables must have five input argument, no return values, and thus the following signature: eqFunctionName(sh,x,z,u,p) where sh is the system handler that allows to add ODE and DAE equations, x the states, z the algebraic variables, u the control inputs, p the parameters. If no function handle is provided, the system must be implemented by deriving from OclSystem and implementing the abstract methods setupVariables and setupEquations."
    name: fhEquations
    type: "function handle, optional"
methods: 
  - content: "Adds a state variable to the system."
    name: "addState"
    parameters: 
      - content: "Name of the state variable"
        name: "id"
        type: "char"
      - content: "Size of the state variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: size
        type: "int, optional"
      - content: "Lower bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to -inf."
        name: lb
        type: "numeric, optional"
      - content: "Upper bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to inf."
        name: ub
        type: "numeric, optional"
    returns: ~
  - content: "Adds an algebraic variable to the system."
    name: "addAlgVar"
    parameters: 
      - content: "Name of the algebraic variable"
        name: id
        type: char
      - content: "Size of the algebraic variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: size
        type: "int, optional"
      - content: "Lower bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to -inf."
        name: lb
        type: "numeric, optional"
      - content: "Upper bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to inf."
        name: ub
        type: "numeric, optional"
    returns: ~
  - content: "Adds an control input to the system."
    name: "addControl"
    parameters: 
      - content: "Name of the control variable"
        name: id
        type: char
      - content: "Size of the control variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: size
        type: "int, optional"
      - content: "Lower bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to -inf."
        name: lb
        type: "numeric, optional"
      - content: "Upper bound on the variable. This value can be overwritten when you specify bounds for OclSolver with solver.setBound. Defaults to inf."
        name: ub
        type: "numeric, optional"
    returns: ~
  - content: "Adds a parameter."
    name: "addParameter"
    parameters: 
      - content: "Name of the parameter"
        name: id
        type: char
      - content: "Size of the control variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1]."
        name: size
        type: "int, optional"
      - content: "Default value for the parameter. This value can be overwritten when you specify the parameter for OclSolver with solver.setParameter. Defaults to unbounded."
        name: v
        type: "numeric, optional"
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
    content: "Implement this method as a static method to define the system variables. You can create state, control and algebraic variables using the class methods."
    parameters: 
      - content: "System handler, reference to the system object."
        name: sh
        type: "[OclSystem](#apiocl_system)"
    returns: ~
    code_block:
  - content: "Implement this method as a static method to specify the differential and algebraic equations. It is possible to define only ordinary differential equations (ODE system), or differential and algebraic equations (DAE system)."
    name: "setupEquation"
    parameters: 
      - content: "System handler, reference to the system object."
        name: sh
        type: "[OclSystem](#apiocl_system)"
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
    code_block:
    returns: ~
position: 1
returns: ~
right_code_blocks: ~
title: "OclSystem"
type: Class

---
