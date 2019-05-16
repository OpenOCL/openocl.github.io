---
permalink: /get-started-42/
last_modified_at: 2019-05-16
title: Getting Started
---

# Getting started

On this page you can download the latest OpenOCL v4.22. You can find older versions [here](https://github.com/OpenOCL/OpenOCL/releases).

| Windows (Matlab > R2016a, 64bit)   | Linux (Matlab > R2016a, 64bit)   | Other  |
|:----------|:--------|:---------|
| Matlab package (easiest) | Matlab package (easiest) | Get and setup CasADi (step 1) |
| Matlab code + binaries (you need to setup the path manually) | [Matlab code + binaries](https://github.com/OpenOCL/OpenOCL/releases/download/v4.22/OpenOCL-4.22-linux.zip) (you need to setup the path manually) | Matlab Code (step2, you need to setup the path manually)  |

### Matlab package installation and execution

If you have downloaded the **Matlab package** you are ready to go, just double click on the file and Matlab will install the packages as an Add-on.
Then type 

```m
StartupOCL
```

and run an example, e.g.

```m
mainCartPole
```

### Matlab code + binaries

If you have downloaded the **Matlab code + binaries**, you need to unzip the downloaded folder, and navigate to it. Then do 

```m
StartupOCL
```

and run an example, e.g.

```m
mainCartPole
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


