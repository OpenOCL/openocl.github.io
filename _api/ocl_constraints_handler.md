---
name: OclConstraintHandler
description: The cost handler allows to add cost terms in a cost function definition.
methods: 
 - content: "Adds a constraint to the optimal control problem."
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
position: 12
title: OclConstraintHandler
type: Class
---
