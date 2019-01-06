--- 
name: OclVariable
content_markdown: ~
left_code_blocks: ~
methods: 
  - 
    content: "Gets a sub-variable of a variable. You can use the shorthand notation with the dot operator, e.g.: solution.states.x"
    name: "get(id) or var.id"
    parameters: 
      - 
        content: "Name of the state variable"
        name: id
        type: char
    returns: 
      - 
        content: "the sub-variable of the given variable."
        type: OclVariable
  - 
    content: "Sets a value to the variable."
    name: "set(value) or var = value"
    parameters: 
      - 
        content: "The value to be set. The value either has to be of the same dimension as the variable or if possible it will be repeated in some dimensions to fit the variable. Scalar values will be set to all entries of the variable. You can use the shorthand notation, e.g. initialGuess.states.x = [1,2,3]"
        name: value
        type: numeric
    returns: ~
  - 
    content: "Gets a slice of a variable. You can use the shorthand notation e.g.: x = var(1:10,1,:)"
    name: "slice(dim1, dim2, dim3) or var(dim1, dim2, dim3)"
    parameters: 
      - 
        content: "indizes for the first, second, and third dimension. The indizes can be integer arrays or one of: 'all', ':', 'end'."
        name: "dim1, dim2, dim3"
        type: "int or char"
    return: ~
    returns: 
      - 
        content: "the sliced variable."
        type: OclVariable
  - 
    name: value()
    parameters: ~
    returns: 
      - 
        content: "the underlying value of the variable. The value can be either numeric (for initial guess and solution) or symbolic (in system/ocp definitions)."
        type: "numeric or casadi.SX or casadi.MX or sym"
parameters: ~
position: 4
returns: ~
right_code_blocks: ~
title: OclVariable
type: Class
---
