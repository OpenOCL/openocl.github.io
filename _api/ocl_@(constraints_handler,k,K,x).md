---
name: "@(constraints_handler,k,K,x)"
title: "@(constraints_handler,k,K,x)"
type: function handle
description: Function handle signature for point constraints function.
parameters: 

  - name: "constraints_handler"
    content: "Constraints handler"
    type: "[ocl.Constraint](#apiocl_constraint)"
    
  - name: "k"
    content: "current grid point index"
    type: "int"
    
  - name: "K"
    content: "last grid point index"
    type: "int"
    
  - name: "X"
    content: "State variable"
    type: "[OclVariable](@apiocl_variable)"

methods: ~
position: 200
---