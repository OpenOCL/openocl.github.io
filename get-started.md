---
permalink: /get-started/
last_modified_at: 2019-06-04
title: Getting Started
---

# Getting started  

On this page you can **download** the latest version of OpenOCL. You can find older versions [here](https://github.com/OpenOCL/OpenOCL/releases).

| Windows (Matlab >= R2013a), Linux (Matlab >= R2014a), Mac (Matlab >= R2015a)   |
|:-------------:|
| [Download Matlab .mltbx package](https://github.com/OpenOCL/OpenOCL/releases/download/v5.08/OpenOCL-v5.08.mltbx) |

If your configuration is not in the list or if you would like to try an alternative way, see below.

With the Matlab **.mltbx** package you are ready to go, just double click on the file and Matlab will install the packages as an Add-on. 

Then run an example by typing

```m
ocl.examples.cartpole
```

in your command window.

If the file ending `.mltbx` is not associated with Matlab, open Matlab navigate to the `.mltbx` file, and *right click* within Matlab on the file and install the toolbox.

![Installing .mltbx Matlab toolbox](/assets/img/mltbx-install.png)

During the first run, the toolbox will ask to download necessary software (CasADi). Confirm by hitting `[enter]`.

![First run confirmation message](/assets/img/firstrun.png)

Then these two plots should show up:

![First run cart pole plots](/assets/img/firstrun_plots.png)

To have a look at the code, type 

```m
open ocl.examples.cartpole
```

![Open Cartpole example code](/assets/img/open_example.png)

To see documentation, type

```m
doc ocl
```

## Matlab code as zip

You can also download the [Matlab code as zip](https://github.com/OpenOCL/OpenOCL/releases/download/v5.08/OpenOCL-v5.08.zip), you need to unzip the downloaded folder, and navigate to it. Then run an example, e.g.

```m
ocl.examples.cartpole
```

If you would like to save your path using `savepath` or the Matlab path manager, add the main folder of OpenOCL without subfolders, 
and save the path. It is best to save the path **before** running *OpenOCL* so that the sub-directories of OpenOCL will not be 
saved to the path (by executing `ocl` scripts, some folder will be added to the path).

## Other configurations

If you have another configuration (e.g. Octave) you need to setup CasADi manually.  

Here is a step-by-step guide:

* [Get the latest CasADi](https://web.casadi.org/get/) version for Matlab or Octave and follow the installation instructions on their page.
* Add the main *CasADi* directory to your Matlab path, not including subdirectories: `addpath 'path/to/casadi'`
* Download [Matlab code as zip](https://github.com/OpenOCL/OpenOCL/releases/download/v5.08/OpenOCL-v5.08.zip), unzip, and add the folder to your path: `addpath 'path/to/OpenOCL-vX.XX'`. Again do not include the sub-directories!
* Run one of the examples, e.g.: `ocl.examples.cartpole`

If you would like to save your path using `savepath` or the Matlab path manager, do this **before** running the example in order to not include the sub-directories.

Let us know if you run into any problems at info@openocl.org!

