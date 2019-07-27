---
version: 6
name: "@"
title: "@(ch,x,z,u,p)"
type: function
description: Function handle signature for the path cost function.
parameters:

  - name: "ch"
    content: "Cost handler"
    type: "[ocl.Cost](#apiocl_cost)"

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
