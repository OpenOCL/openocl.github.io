---
version: 7
name: "@"
title: "@(costh,x,z,u,p)"
type: function
description: Function signature for the path cost function.
altname: pathcost
parameters:

  - name: "costh"
    content: "Cost handler"
    type: "[ocl.Cost](#apiocl_cost)"

  - name: x
    content: "State variables"
    type: "[ocl.Variable](#apiocl_variable)"

  - name: z
    content: "Algebraic states"
    type: "[ocl.Variable](#apiocl_variable)"

  - name: u
    content: "Controls"
    type: "[ocl.Variable](#apiocl_variable)"

  - name: p
    content: "Parameters"
    type: "[ocl.Variable](#apiocl_variable)"

methods: ~
position: 200
---
