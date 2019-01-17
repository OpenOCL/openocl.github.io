--- 
name: OclOCP
description: "An optimal control problem (OCP) is defined by inheriting from the OclOCP class. In order to specify cost functions and boundary conditions you have to implement the corresponding methods. If you do not implemented some of these method they default to zero cost or empty constraints. Have a look at the VanDerPolOCP.m in the Examples folder."
content_markdown: ~
code_block:
  title: Example OCP
  language: m
  code: |-
    classdef VanDerPolOCP < OclOCP
      methods
        function pathCosts(self,x,z,u,t,tf,p)
          self.addPathCost( x.p^2 );
          self.addPathCost( x.v^2 );
          self.addPathCost( u^2 );
        end
      end
    end
methods_abstract: 
  - 
    content: "In this method you can implement the path cost (also called Lagrange cost or intermediate cost) function."
    name: "pathCosts"
    parameters: 
      - 
        content: "State variables"
        name: x
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: "Algebraic Variables"
        name: z
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: "Control variables"
        name: u
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: Time
        name: t
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: "Final time"
        name: tf
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: "Parameters"
        name: p
        type: "[OclVariable](#apiocl_variable)"
  - 
    content: "In this method you can specify the costs on the final state (also called Mayer terms)."
    name: "arrivalCosts"
    parameters: 
      - 
        content: "State variables"
        name: x
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: "Final time"
        name: tf
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: Parameters
        name: p
        type: "[OclVariable](#apiocl_variable)"
    returns: ~
  - 
    content: "Specifies the path constraints."
    name: "pathConstraints"
    code_block:
      title: Path constraints Example
      language: m
      code: |-
        function pathConstraints(self,x,z,u,t,p)
          self.addPathConstraint(u.Fx^2+u.Fy^2,'<=',p.Fmax^2);
        end
    parameters: 
      - 
        content: "State variables"
        name: x
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: Time
        name: t
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: Parameters
        name: p
        type: "[OclVariable](#apiocl_variable)"
    returns: ~
  - 
    content: "Specifies the boundary conditions on intial state x0 and final state xf."
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
      - 
        content: "Initial state variables"
        name: x0
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: "Final state variables"
        name: xf
        type: "[OclVariable](#apiocl_variable)"
      - 
        content: Parameters
        name: p
        type: "[OclVariable](#apiocl_variable)"
    returns: ~
  - 
    content: "Specifies cost terms that depend on any variable of the discretized problem which is a non-linear program (NLP)."
    name: discreteCosts
    parameters: 
      - 
        content: "Contains all variable of the discretized OCP."
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
  - 
    content: "Adds an end cost term of the form c_f(x,tf,p)."
    name: addArrivalCost
    parameters: 
      - name: cost
        content: "Scalar variable containing the cost"
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - 
    content: "Adds a path constraint of the form c_p_lower(x,u,z,p)<=c_p(x,u,z,p)<=c_p_upper(x,u,z,p) to the optimal control problem."
    name: "addPathConstraint"
    parameters: 
      - 
        content: "Left hand side of the constraint equation"
        name: lhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
      - 
        content: "One of the following operators as a string: '<=', '==', '>='"
        name: operator
        type: char
      - 
        content: "Right hand side of the constraint equation"
        name: rhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - 
    content: "Adds a boundary constraint of the form c_b_lower(x0,xf,p)<=c_b(x0,xf,p)<=c_b_upper(x0,xf,p) that can depend on the initial and final states to the optimal control problem."
    name: "addBoundaryCondition"
    parameters: 
      - 
        content: "Left hand side of the constraint equation"
        name: lhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
      - 
        content: "One of the following operators as a string: '<=', '==', '>='"
        name: operator
        type: char
      - 
        content: "Right hand side of the constraint equation"
        name: rhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - 
    content: "Adds a cost term that can depend on any variable in the discretized optimal control problem."
    name: addDiscreteCost
    parameters: 
      - 
        content: "Scalar variable containing the cost c_d(v_d)"
        name: cost
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
parameters: ~
position: 2
returns: ~
right_code_blocks: ~
title: OclOCP
type: Class
---
