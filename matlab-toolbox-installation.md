---
permalink: /matlab-toolbox-installation/
last_modified_at: 2019-06-11
title: Installation of the matlab toolbox
---

# Installing OpenOCL as a Matlab toolbox (Add-on)

Download the `.mltbx` file from [here](/get-started/).

With the Matlab toolbox package **.mltbx** you are ready to go, just double click on the file and Matlab will install the packages as an Add-on. 

Then run an optimal control example by typing

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
