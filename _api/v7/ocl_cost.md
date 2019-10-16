---
version: 7
name: ocl.Cost
title: ocl.Cost
description: The cost handler allows to add cost terms in a cost function definition.
type: class
methods:
  - content: "Adds a cost term."
    name: add
    parameters:
      - name: cost
        content: "Scalar variable containing the cost"
        type: "[ocl.Variable](#apiocl_variable) or Matlab matrix"
    returns: ~
  - name: "userdata"
    content: "Returns the userdata object the can be passed to [ocl.Problem](#apiocl_problem) or [ocl.Stage](#apiocl_stage)."
position: 11
---
