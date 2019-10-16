---
version: 7
name: "@"
title: "@(conh,k,K,x,p)"
type: function
description: Function signature for the grid constraints function.
altname: gridconstraint
parameters:

  - name: "conh"
    content: "Constraints handler that allows to add constraints."
    type: "[ocl.Constraint](#apiocl_constraint)"

  - name: "k"
    content: "Current grid point index"
    type: "int"

  - name: "K"
    content: "Largest (last) grid point index"
    type: "int"

  - name: "x"
    content: "States"
    type: "[ocl.Variable](#apiocl_variable)"

  - name: p
    content: "Parameters"
    type: "[ocl.Variable](#apiocl_variable)"

methods: ~
---
