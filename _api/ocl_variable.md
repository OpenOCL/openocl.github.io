---
title: OclVariable
position:
type: Class
parameters:
returns:
methods: 
  
  - name: get(id) or var.id
    parameters:
      - name: id
        type: char
        content: Name of the state variable
    returns: 
      - type: OclVariable
        content: the sub-variable of the given variable.
    content: Gets a sub-variable of a variable. You can use the shorthand notation with the dot operator, e.g.: solution.states.x
  
  - name: set(value) or var = value
    parameters:
      - name: value
        type: numeric
        content: The value to be set. The value either has to be of the same dimension as the variable or if possible it will be repeated in some dimensions to fit the variable. Scalar values will be set to all entries of the variable. You can use the shorthand notation, e.g. initialGuess.states.x = [1,2,3]
    returns: 
    content: Sets a value to the variable.

  - name: slice(dim1, dim2, dim3) or var(dim1, dim2, dim3)
    parameters:
      - name: dim1, dim2, dim3
        type: int or char
        content: indizes for the first, second, and third dimension. The indizes can be integer arrays or one of: 'all', ':', 'end'.
    returns: 
      - type: OclVariable
        content: the sliced variable.
    content: Gets a slice of a variable. You can use the shorthand notation e.g.: x = var(1:10,1,:)
  

  - name: value()
    parameters:
    returns: 
    - type: numeric or casadi.SX or casadi.MX or sym
      content: the underlying value of the variable. The value can be either numeric (for initial guess and solution) or symbolic (in system/ocp definitions).

content_markdown:

left_code_blocks:
right_code_blocks:
---