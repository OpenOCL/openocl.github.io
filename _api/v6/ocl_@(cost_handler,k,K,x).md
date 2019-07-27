---
version: 6
name: "@"
title: "@(cost_handler,k,K,x)"
type: function
description: Function handle signature for point cost function.
parameters:

  - name: "cost_handler"
    content: "cost_handler handler"
    type: "[ocl.Cost](#apiocl_cost)"

  - name: "k"
    content: "current grid point index"
    type: "int"

  - name: "K"
    content: "last grid point index"
    type: "int"

  - name: "X"
    content: "State variable"
    type: "[OclVariable](#apiocl_variable)"

methods: ~
position: 200
---
