--- 
name: ocl.Stage
title: ocl.Stage
description: |
  The definition of a Stage.

code_block:
  title: Example Stage
  language: m
  code: |-
    stage = ocl.Stage([], @vars, @ode, 'N', 10, 'd', 2);
    
    % Function definitions can be in the same file 
    % (if the main script is wrapped by a function) 
    % or in separate files:
    function vars(sh)
      sh.addState('s');
      sh.addState('v');
    end

    function ode(sh,x,~,~,~)
      sh.setODE('s', x.v);
      sh.setODE('v', -10);
    end
    
parameters: 

  - name: "T"
    content: "The end time/horizon length of the optimal control problem. If your system equatiosn are expressed as function of an independent variable other than time, `T` represents not the end time but the endpoint of the integration over the independent variable."
    type: "numeric"
    
  - name: "vars = @(vars_handler)[]"
    content: "System variables function. Optional, defaults to an empty function handle."
    type: "[@(vars_handler)](#apiocl_@(vars_handler))"
    
  - name: "dae = @(dae_handler,x,z,u,p)[]"
    content: "DAE (system equations) function. Optional, defaults to an empty function handle."
    type: "[@(dae_handler,x,z,u,p)](#apiocl_@(dae_handler,x,z,u,p))"
    
  - name: "pathcosts = @(cost_handler,x,z,u,p) 0"
    content: "Path-costs function. Optional, defaults to a function handle returning 0."
    type: "[@(cost_handler,x,z,u,p)](#apiocl_@(cost_handler,x,z,u,p))"
    
  - name: "pointcosts = @(cost_handler,k,K,x) 0"
    content: "Point-costs function. Optional, defaults to a function handle returning 0."
    type: "[@(cost_handler,k,K,x)](#apiocl_@(cost_handler,k,K,x))"
    
  - name: "pointconstraints = @(constraints_handler,k,K,x) []"
    content: "Point-constraints function. Optional, defaults to an empty function handle."
    type: "[@(constraints_handler,k,K,x)](#apiocl_@(constraints_handler,k,K,x))" 
    
position: 10
returns: ~
type: Class
---