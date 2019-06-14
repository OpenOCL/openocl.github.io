---
name: ocl.Constraint
title: ocl.Constraint
description: "The constraint handler allows to add constraints to the optimal control problem definition."
type: class
methods: 
 -  content: "Adds a constraint to the optimal control problem."
    name: "add"
    parameters: 
      - content: "Left hand side of the constraint equation"
        name: lhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
      - content: "One of the following operators as a string: '<=', '==', '>='"
        name: op
        type: char
      - content: "Right hand side of the constraint equation"
        name: rhs
        type: "[OclVariable](#apiocl_variable) or Matlab matrix"
    returns: ~
position: 12

---
