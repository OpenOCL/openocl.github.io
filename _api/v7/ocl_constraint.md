---
version: 7
name: ocl.Constraint
title: ocl.Constraint
description: "The constraint handler allows to add constraints to the optimal control problem definition."
type: class
methods:
 - content: "Adds a constraint to the optimal control problem."
   name: "add"
   parameters:
     - content: "Left hand side of the constraint equation"
       name: lhs
       type: "[ocl.Variable](#apiocl_variable) or Matlab matrix"
     - content: "One of the following operators as a string: '<=', '==', '>='"
       name: op
       type: char
     - content: "Right hand side of the constraint equation"
       name: rhs
       type: "[ocl.Variable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - name: "userdata"
    content: "Returns the userdata object the can be passed to [ocl.Problem](#apiocl_problem) or [ocl.Stage](#apiocl_stage)."
position: 12

---
