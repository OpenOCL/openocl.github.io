---
version: 7
name: "@"
title: "@(daeh,x,z,u,p)"
type: function
description: Function handle signature for DAE function.
altname: dae
parameters:

  - name: "daeh"
    content: "DAE handler"
    type: "[ocl.DaeHandler](#apiocl_dae_handler)"

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
