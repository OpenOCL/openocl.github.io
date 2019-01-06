---
title: ocl.Solver(system, ocp, options)
position: 
type: Function
description: Creates a solver object that discretizes the given system and optimal control problem, and calls the underlying optimizer.
parameters:

  - name: system
  	type: OclSystem
    content: The system dynamics
  - name: ocp
  	type: OclOCP
  	content: The optimal control problem
  - name: options
    type: struct
    content: Options struct, can be created with OclOptions()

returns:
  - name: solver
    type: OclSolver
    content:

methods: 

  - name: initialGuess = getInitialGuess()
  	parameters:
  	returns:
    	- name: initialGuess
    	  type: OclVariable
    	  content: Structure variable for setting the initial guess
  - name: solution = solve(initialGuess)

    parameters:
	    - name: initialGuess
	      type: OclVariable
	      content: Provide a good initial guess
    returns: 
    	- name: solution
    	  type: OclVariable
    	  content: The solution of the OCP
        
content_markdown:
left_code_blocks:
  - code_block: |-
      ocl = OclSolver(system,ocp,options);
      initialGuess = ocl.getInitialGuess();
      initialGuess.set(3);
      solutions = ocl.solve(initialGuess);
    title: Code Example
    language: Matlab
---