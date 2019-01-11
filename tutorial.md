## Tutorial

In this guide you will learn how to implement a system model and an optimal control problem with *OpenOCL*. You can open the linked examples in separate tabs in your browser. Also check out the [API docs](https://openocl.org/api-docs/) for a more detailed vision into the functions signatures.


### Defining a system model
Have a look at the [VanDerPolSystem.m](https://github.com/JonasKoenemann/optimal-control/blob/master/Examples/01VanDerPol/VanDerPolSystem.m) in the Examples folder.
The system is implemented by inheriting from the OclSystem class.
You need to implement the two methods `setupVariables` and `setupEquation`.

**setupVariables**:
The setupVariables class method is for defining the system variables.
You can create state, control and algebraic variables using the class methods: addState, addAlgVar, addControl.
They have the following signature with no return values:  

```m
self.addState(id,size)  
self.addAlgVar(id,size)
self.addControl(id,size) 
```

Every variable needs to have a unique string valued `id`. The `size` is given as a 2 dimensional matrix e.g. `self.addState('p',[3 1])` to create a 3d vector p. The size is optional for a scalar variable or can be a scalar value to create a variable with the given number of elements.

**setupEquation**:
The setupEquation method is for defining the system equations. Ordinary differential equations (ODE) and differential algebraic equations (DAE) have to be stated in explicit or semi-explicit form.
The signature if the method is:

```m
function setupEquation(self,states,algVars,controls,parameters)
```

The setupEquation method takes 4 input arguments of type Var: states, algVars, controls, parameters.
The Var class provides useful methods to access the content of variables (see description of Var below).
For example, you can get the value of the 3d position state variable p by: `p = states.get('p');`
(shorthand notation: `p = states.p;`)

Inside setupEquation, you can use the `self.setODE` method to specify the derivative for each state variable
The setODE method has the following signature with no return value  

```m
self.setODE(id,equation)
```

For example define the ODE for 3d positions p variable by: `self.setODE('p',v)`; where the velocity v shall be of the same dimension as p.

Use the `self.setAlgEquation` method to define the algebraic equations.
It has the following signature with no return value  

```m
self.setAlgEquation(equation) 
```

The algebraic equation needs to be given as a column vector.
You can use the `setAlgEquation` method multiple times. In order to be able to simulate the system, the total number of rows of the algebraic equations needs to be equal to the total number/dimension of algebraic variables (number of degrees of freedom).


### Defining an optimal control problem (OCP)
Have a look at the [VanDerPolOCP.m](https://github.com/JonasKoenemann/optimal-control/blob/master/Examples/01VanDerPol/VanDerPolOCP.m) in the Examples folder.
The OCP is implemented by inheriting from the OclOCP class.
While the `setupEquation` method for the OclSystem is mandatory, the methods in OclOCP to define the cost functions and boundary conditions are optional. Default values for the costs are zero and an empty constraint list for the constraints.

**Cost functions**: `pathCosts`, `arrivalCosts`
In the `pathCosts` method you can implement the intermediate cost (Lagrange costs) function, and in the `arrivalCosts` (Mayer costs) method you implement the costs on the final state.

```m
function pathCosts(self,states,algVars,controls,time,endTime,parameters)  
function arrivalCosts(self,states,endTime,parameters)  
```
 
The variables states, algVars, controls, time, endTime, and parameters are of type Var.
Use the functions addPathCost and addArrivalCost to add a cost term in the respective methods.   
 
```m
self.addPathCost(equation)  
self.addArrivalCost(equation)
```

**Path constraints**:
Use the `pathConstraints` method for implementing path constraints
The signature is (no return value):    

```m
function pathConstraints(states, algVars, controls, time, parameters)  
```
 
Inside `pathConstraints` you can use the function `addPathConstraint` to add a constraint, the signature is:

```m
self.addPathConstraint(lhs, operator, rhs)   
```

where lhs and rhs are the left hand side and the right hand side of the equation and the operator can be one of '<=', '>=', '=='
   
**Boundary conditions**: 
You can add boundary conditions on the initial and the final state of the trajectory.
The signature is:    

```m
function boundaryConditions(self, states0, statesF, parameters)  
``` 

You can use the functions `addBoundaryCondition` to add a constraint, the signature is:
```m
self.addBoundaryCondition(lhs, operator, rhs)   
``` 

where lhs and rhs are the left hand side and the right hand side of the equation and the operator can be one of '<=', '>=', '=='


### Calling the solver

The essential steps in order to solve your dynamical optimization problem are:   
* Specify solver options
* Create a solver and pass your system and optimal control problem
* Set bounds on variables and parameters
* Specify initial guess
* Call the solver 
* Process the solution

Have a look at the Example script to get an idea how it works: [mainVanDerPol.m](https://github.com/JonasKoenemann/optimal-control/blob/master/Examples/01VanDerPol/mainVanDerPol.m)

### The Variable class: Accessing variables, initial guess, and solution

The Variable type(or CasadiVariable in the CasADi backend) is the basic structure to retrieve, store, modify structured optimization variables.

**Accessing values**

For each variable you can access specific variables by their name, e.g. you can get the position variable from the state by:    

```m
states.get('p')
```
or
```m
states.p
```

If there are multiple variable with the same name, you can slice the variables using a second parameter:   
 
```m
initialGuess.get('states').get('p')  % or initialGuess.states.p will return the position trajectory but   
initialGuess.get('states',1).get('p') % will return only the first position of the trajectory or use   
initialGuess.get('states').get('p',1) % to receive the trajectory of the first position coordinate.
```

The get operator always returns another Algorithmic object. To perform mathematical operations on objects of type Var, you need to access the value of the variable with the value attribute. This can also be useful for plotting when standard Matlab variables types are required:

```m
states.get('p').value
```
or
```m
states.p.value
```

**Setting values**

You can set values to variables using the set methods. The signature is:   

```m
var.set(value)
```

For example to the set the position trajectory in the initial guess, you can use:  
  
```m
initialGuess.get('states').get('p').set(positionTrajectory)   
```

The dimension of the value has to match the size of the variable with the following exceptions. If the value is scalar, then the same value will be set to all entries of the variable. If the number of elements of the value coincides with the number of entries of the variable, then the values will be assigned in the order of the variable (when you assign with e.g. with a column vector value).    

```m
initialGuess.get('states').get('p').set(0)  % will set all positions variables to [0;0;0].
```


### Additional Information

* If you need the model to work with MX type variables in your system, you can pass the option "system_casadi_mx" to the solver
* For larger problems it can be beneficial to install HSL linear solvers for ipopt (http://www.hsl.rl.ac.uk/ipopt/) and pass the linear solver name to the ipopt options
