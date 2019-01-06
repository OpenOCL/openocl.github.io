---
title: OclSystem
position:
type: Class
parameters:
returns:
methods_abstract: 

  - name: setupVariables()
    parameters:
  	returns:
    content: Implement this method to define the system variables. You can create state, control and algebraic variables using the class methods.

  - name: setupEquation(x, z, u, p)   
    parameters:
      - name: x
        type: OclVariable
        content: State variables
      - name: z
        type: OclVariable
        content: Algebraic Variables
      - name: u
        type: OclVariable
        content: Control variables
      - name: p
        type: OclVariable
        content: Parameters
    returns:
    content: Implement this method to specify the differential and algebraic equations. It is possible to define only ordinary differential equations (ODE system), or differential and algebraic equations (DAE system).

methods: 
  - name: addState(id, size)
    parameters:
      - name: id
        type: char
        content: Name of the state variable
      - name: size
        type: int, optional
        content: Size of the state variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1].
    returns:
    content: Adds a state variable to the system. This function must be called within the setupEquation method.

  - name: addAlgVar(id, size)
    parameters:
      - name: id
        type: char
        content: Name of the algebraic variable
      - name: size
        type: int, optional
        content: Size of the algebraic variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1].
    returns:
    content: Adds an algebraic variable to the system. This function must be called within the setupEquation method.

  - name: addControl(id, size)
    parameters:
      - name: id
        type: char
        content: Name of the control variable
      - name: size
        type: int, optional
        content: Size of the control variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1].
    returns:
    content: Adds an control input to the system. This function must be called within the setupEquation method.

 - name: addParameter(id, size)
    parameters:
      - name: id
        type: char
        content: Name of the parameter
      - name: size
        type: int, optional
        content: Size of the control variable. Scalar, vector, and matrix valued variables are allowed. If a scalar value s is given, the size of the variable will be [s,1]. Defaults to [1,1].
    returns:
    content: Adds a parameter. This function must be called within the setupEquation method.

 - name: setODE(id, equation)
    parameters:
      - name: id
        type: char
        content: Name of the state variable for that the differential equation is given.
      - name: equation
        type: OclVariable or Matlab matrix
        content: The equation specifies the derivative of a state variable. Right hand side of the differential equation dot(x) = f(x,z,u,p) for state variable x.
    returns:
    content: Adds a differential equation to the system. Note that for every state variable a differential equation must be specified.

 - name: setAlgEquation(equation)
    parameters:
      - name: equation
        type: OclVariable or Matlab matrix
        content: Algebraic equation g in the form g(x,z,u,p)=0
    returns:
    content: Adds an algebraic equation to the system. Note that in order to be able to simulate the system, the total number of rows of the algebraic equations needs to be equal to the total number/dimension of algebraic variables.

content_markdown:
  The system is implemented by inheriting from the System class. You need to implement the two methods setupVariables and setupEquation. Have a look at the VanDerPolSystem.m in the Examples folder get an impression on how it works.
  
left_code_blocks:
right_code_blocks:
---