--- 
name: OclOCP
description: |
  As for [OclSystem](#apiocl_system) there are two ways to implement an optimal control problem (OCP) The functional and the object oriented approach. If you do not implemented some of the functions or methods they default to zero cost for the cost functions or an empty constraints array for path constraints and boundary conditions.

  **Using OCP function**
You can implement functions for path costs, arrival costs, path constraints, boundary conditions. Pass function handles/pointers to these function to the constructor of OclOCP to create an optimal control problem. For information about the signature of these functions look at the definitions of the abstract methods.

  **By inheriting from OclOCP**
The OCP is defined by inheriting from the OclOCP class. In order to specify cost functions and boundary conditions you have to implement the corresponding methods. 

code_block:
  title: Example OCP
  language: m
  code: |-
parameters: 
  - content: "Function handle to the function that defines the path costs. The signature of the corresponding function can be seen in the abstract methods definition."
    name: fhPathCosts
    type: "function handle, optional"
  - content: "Function handle to the function that defines the arrival costs. The signature of the corresponding function can be seen in the abstract methods definition."
    name: fhArrivalCosts
    type: "function handle, optional"
  - content: "Function handle to the function that defines the path constraints. The signature of the corresponding function can be seen in the abstract methods definition."
    name: fhPathConstraints
    type: "function handle, optional"
  - content: "Function handle to the function that defines the boundary conditions. The signature of the corresponding function can be seen in the abstract methods definition."
    name: fhBoundaryConditions
    type: "function handle, optional"
methods_abstract: 
  - content: "In this method you can implement the path cost (also called Lagrange cost or intermediate cost) function."
    name: "pathCosts"
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
      - content: Time
        name: t
        type: "[OclVariable](#apiocl_variable)"
      - content: "Final time"
        name: tf
        type: "[OclVariable](#apiocl_variable)"
      - content: "Parameters"
        name: p
        type: "[OclVariable](#apiocl_variable)"
  - content: "In this method you can specify the costs on the final state (also called Mayer terms)."
    name: "arrivalCosts"
    parameters: 
      - content: "State variables"
        name: x
        type: "[OclVariable](#apiocl_variable)"
      - content: "Final time"
        name: tf
        type: "[OclVariable](#apiocl_variable)"
      - content: Parameters
        name: p
        type: "[OclVariable](#apiocl_variable)"
    returns: ~
  - content: "Specifies the path constraints."
    name: "pathConstraints"
    code_block:
      title: Path constraints Example
      language: m
      code: |-
        function pathConstraints(self,x,t,p)
          self.addPathConstraint(x.Fx^2+x.Fy^2,'<=',p.Fmax^2);
        end
    parameters: 
      - content: "State variables"
        name: x
        type: "[OclVariable](#apiocl_variable)"
      - content: Time
        name: t
        type: "[OclVariable](#apiocl_variable)"
      - content: Parameters
        name: p
        type: "[OclVariable](#apiocl_variable)"
    returns: ~
  - content: "Specifies the boundary conditions on intial state x0 and final state xf."
    name: "boundaryConditions"
    code_block:
      title: Boundary conditions
      language: m
      code: |-
        function boundaryConditions(self,x0,xF,p)
          self.addBoundaryCondition(x0.p(1)^2+x0.p(2)^2-p.l^2,'==',0);
          self.addBoundaryCondition(dot(x0.p,x0.v),'==',0);
        end
    parameters: 
      - content: "Initial state variables"
        name: x0
        type: "[OclVariable](#apiocl_variable)"
      - content: "Final state variables"
        name: xf
        type: "[OclVariable](#apiocl_variable)"
      - content: Parameters
        name: p
        type: "[OclVariable](#apiocl_variable)"
    returns: ~
  - content: "Specifies cost terms that depend on any variable of the discretized problem which is a non-linear program (NLP)."
    name: discreteCosts
    parameters: 
      - content: "Contains all variable of the discretized OCP."
        name: vars
        type: "[OclVariable](#apiocl_variable)"
    returns: ~
methods: 
  - content: "Adds a path cost term of the form c_p(x,z,u,t,tf,p)."
    name: addPathCost
    parameters: 
      - name: cost
        content: "Scalar variable containing the cost"
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - content: "Adds an end cost term of the form c_f(x,tf,p)."
    name: addArrivalCost
    parameters: 
      - name: cost
        content: "Scalar variable containing the cost"
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - content: "Adds a path constraint of the form c_p_lower(x,u,z,p)<=c_p(x,u,z,p)<=c_p_upper(x,u,z,p) to the optimal control problem."
    name: "addPathConstraint"
    parameters: 
      - content: "Left hand side of the constraint equation"
        name: lhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
      - content: "One of the following operators as a string: '<=', '==', '>='"
        name: operator
        type: char
      - content: "Right hand side of the constraint equation"
        name: rhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - content: "Adds a boundary constraint of the form c_b_lower(x0,xf,p)<=c_b(x0,xf,p)<=c_b_upper(x0,xf,p) that can depend on the initial and final states to the optimal control problem."
    name: "addBoundaryCondition"
    parameters: 
      - content: "Left hand side of the constraint equation"
        name: lhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
      - content: "One of the following operators as a string: '<=', '==', '>='"
        name: operator
        type: char
      - content: "Right hand side of the constraint equation"
        name: rhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - content: "Adds a cost term that can depend on any variable in the discretized optimal control problem."
    name: addDiscreteCost
    parameters: 
      - content: "Scalar variable containing the cost c_d(v_d)"
        name: cost
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
position: 2
returns: ~
title: OclOCP
type: Class
---
