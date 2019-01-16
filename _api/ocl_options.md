--- 
name: OclOptions
description: "Creates an options struct for [OclSolver](#apiocl_solver). Check the casadi documentation and the ipopt documentation to see which options are available. These options can be set in 'opt.nlp.ipopt'. The default values are the following:"
content_markdown: ~
code_block:
  title: Example
  language: m
  code: |- 
    opt.solverInterface   = 'casadi';
    opt.iterationCallback = false;
    opt.system_casadi_mx  = false;
    opt.nlp.discretization         = 'collocation';
    opt.nlp.controlIntervals       = 20;
    opt.nlp.collocationOrder       = 3;
    opt.nlp.solver                 = 'ipopt';
    opt.nlp.ipopt.linear_solver = 'mumps';
    opt.nlp.ipopt.hessian_approximation = 'exact';
methods: ~
parameters: ~
position: 5
returns: 
  - content: "the options struct."
    type: struct
right_code_blocks: ~
type: Function
title: OclOptions
---
