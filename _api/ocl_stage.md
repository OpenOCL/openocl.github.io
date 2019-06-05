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

  - name: "vars = @(svh) []"
    content: "Function handle to define the Stage variables. Optional, default to an empty function handle."
    type: "[ocl.VarsFunction](#apiocl_varsfunction)"
    
  - name: "dae = @(daeh, x, z, u, p) []"
    content: "Function handle to define the Stage DAEs (system equations). Optional, default to an empty function handle." 
    type: "[ocl.DaeFunction](#apiocl_daefunction)"
    
  - name: "pathcosts = @(x,z,u,p) 0"
    content: "Function handle to the function that defines the path costs of the stage (also called Lagrange cost or intermediate cost). Optional, defaults to a zero function handle."
    type: "[ocl.PathcostsFunction](#apiocl_pathcostsfunction)"
    
  - name: "pointcosts = @(ch,k,K,x) 0"
    content: "Function handle to the function that defines the point costs of the stage. Optional, defaults to a zero function handle."
    type: "[ocl.PointcostsFunction](#apiocl_pointcostsfunction)"
    
  - name: "pointconstraints = @(ch,k,K,x) []"
    content: "Function handle to the function that defines the point constraints of the stage. Optional, defaults to an empty function handle."
    type: "[ocl.PointconstraintsFunction](#apiocl_pointconstraintsfunction)"
    
position: 10
returns: ~
type: Class
---
