---
version: 7
name: "@"
title: "@(costh,k,K,x,p)"
type: function
description: Function signature for the grid cost function.
altname: gridcost
parameters:

  - name: "costh"
    content: "Cost handler that allows to add cost terms."
    type: "[ocl.Cost](#apiocl_cost)"

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
