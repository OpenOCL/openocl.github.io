---
name: "@(dae_handler,x,z,u,p)"
title: "@(dae_handler,x,z,u,p)"
type: function
description: Function handle signature for DAE function.
parameters: 

  - name: "dae_handler"
    content: "DAE handler"
    type: "[ocl.DaeHandler](#apiocl_dae_handler)"
    
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
