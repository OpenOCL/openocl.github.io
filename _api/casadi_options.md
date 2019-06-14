--- 
name: CasadiOptions
title: CasadiOptions
description: "Creates an options struct for [ocl.Solver](#apiocl_solver). Check the casadi documentation and the ipopt documentation to see which options are available. The `ipopt` options can be set in 'casadi_options.ipopt'. The default values are the following:"
content_markdown: ~
type: struct
code_block:
  title: Example
  language: m
  code: |- 
    casadi_options = struct;
    casadi_options.ipopt = struct;
    casadi_options.ipopt.linear_solver = 'mumps';
    casadi_options.ipopt.hessian_approximation = 'exact';
methods: ~
parameters: ~
position: 25
returns: 
  - content: "the options struct."
    type: struct
right_code_blocks: ~
---
