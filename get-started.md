---
permalink: /get-started/
last_modified_at: 2019-06-04
title: Getting Started
---

# Getting started  

You can clone the repository with 
```
git clone https://github.com/OpenOCL/OpenOCL.git
```

or download the latest [Matlab code as zip](https://github.com/OpenOCL/OpenOCL/archive/v7.01.zip), you need to unzip the downloaded folder, and navigate to it. Then run an example, e.g.

```m
ocl.examples.cartpole
```

If you would like to save your path using `savepath` or the Matlab path manager, add the main folder of OpenOCL without subfolders, 
and save the path. It is best to save the path **before** running *OpenOCL* so that the sub-directories of OpenOCL will not be 
saved to the path (by executing `ocl` scripts, some folder will be added to the path).

You can also get OpenOCL through [Mathworks file exchange](https://www.mathworks.com/matlabcentral/fileexchange/71566-openocl-open-optimal-control-library).

## Other configurations

If you have another configuration (e.g. Octave) you need to setup CasADi manually.  

Here is a step-by-step guide:

* [Get the latest CasADi](https://web.casadi.org/get/) version for Matlab or Octave and follow the installation instructions on their page.
* Add the main *CasADi* directory to your Matlab path, not including subdirectories: `addpath 'path/to/casadi'`
* Download [Matlab code as zip](https://github.com/OpenOCL/OpenOCL/archive/v7.01.zip), unzip, and add the folder to your path: `addpath 'path/to/OpenOCL-vX.XX'`. Again do not include the sub-directories!
* Run one of the examples, e.g.: `ocl.examples.cartpole`

If you would like to save your path using `savepath` or the Matlab path manager, do this **before** running the example in order to not include the sub-directories.

Let us know if you run into any problems at info@openocl.org!

