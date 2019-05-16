---
permalink: /get-started/
last_modified_at: 2019-05-16
title: Getting Started
---

# Getting started

On this page you can download the latest OpenOCL v4.28. You can find older versions [here](https://github.com/OpenOCL/OpenOCL/releases).

| Windows (Matlab > R2016a, 64bit) and <br> Linux (Matlab > R2014b, 64bit)   | Other (requires two steps) |
|:----------|:----------|
| [Matlab .mltbx package](https://github.com/OpenOCL/OpenOCL/releases/download/v4.28/OpenOCL.v4.28.mltbx) (easiest) | [Get and setup CasADi](https://web.casadi.org/get/) (step 1) |
| [Matlab code as zip](https://github.com/OpenOCL/OpenOCL/releases/download/v4.28/OpenOCL-4.28.zip) (you need to setup the path manually) | [Matlab code as zip](https://github.com/OpenOCL/OpenOCL/releases/download/v4.28/OpenOCL-4.28.zip) (you need to setup the path manually) |

## Matlab .mltbx package installation and execution

If you have downloaded the **Matlab .mltbx package** you are ready to go, just double click on the file and Matlab will install the packages as an Add-on. 

Then run an example, e.g.

```m
ocl.mainCartPole
```

If the file ending `.mltbx` is not associated with Matlab, open Matlab navigate to the `.mltbx` file, and double click within Matlab and install the toolbox.

![Installing .mltbx Matlab toolbox](/assets/img/mltbx-install.png)

During the first run, the toolbox will ask to download necessary software (CasADi). Confirm by typing `y` and pressing `[enter]`.

![First run confirmation message](/assets/img/firstrun.png)

Then these two plots should show up:

![First run cart pole plots](/assets/img/firstrun_plots.png)

## Matlab code as zip

If you have downloaded the **Matlab code**, you need to unzip the downloaded folder, and navigate to it. Then run an example, e.g.

```m
ocl.mainCartPole
```

If you would like to save your path using `savepath` or the Matlab path manager, add the main folder of OpenOCL without subfolders, 
and save the path. It is best to save the path **before** running `StartupOCL` so that the sub-directories of OpenOCL will not be 
saved to the path (by executing `StartupOCL` some folder will be added to the path).

## Other configurations

If you have another configuration you need to setup CasADi manually.  

Here is a step-by-step guide:

* Get the latest CasADi version for Matlab or Octave and follow the installation [instructions](https://web.casadi.org/get/) on their page.
* Add the main *CasADi* directory to your Matlab path, not including subdirectories: `addpath 'path/to/casadi'`
* Download [OpenOCL v4.20 (zip)](https://github.com/OpenOCL/OpenOCL/archive/v4.20.zip), unzip, and add the folder to your path: `addpath 'path/to/OpenOCL-v4.20'`. Again do not include the sub-directories!
* Run the StartupOCL.m script: `StartupOCL`
* Run one of the examples, e.g.: `mainCartPole`

If you would like to save your path using `savepath` or the Matlab path manager, do this **before** running `StartupOCL` in order to not include the sub-directories.

Let us know if you run into any problems at info@openocl.org!

