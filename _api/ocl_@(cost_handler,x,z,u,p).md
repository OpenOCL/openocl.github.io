---
name: "@(cost_handler,x,z,u,p)"
title: "@(cost_handler,x,z,u,p)"
type: function handle
description: Function handle signature for the path cost function.
parameters: 

  - name: "cost_handler"
    content: "Cost handler"
    type: "[ocl.DaeHandler](#apiocl_daehandler)"
    
  - name: x
    content: "State variables"
    type: "[OclVariable](#apiocl_variable)"

  - name: z
    content: "Algebraic states"
    type: "[OclVariable](#apiocl_variable)"

  - name: u
    content: "Controls"
    type: "[OclVariable](#apiocl_variable)"
    
  - name: p
    content: "Parameters"
    type: "[OclVariable](#apiocl_variable)"

methods: ~
position: 200
---
