---
permalink: /get-started/
last_modified_at: 2019-04-17
title: Get Started
---

# Getting started

**Download** the latest release: [OpenOCL v4.20 (zip)](https://github.com/OpenOCL/OpenOCL/archive/v4.20.zip), [Release Notes](https://github.com/OpenOCL/OpenOCL/releases)

The toolbox is being tested on Windows/Matlab 2016b, OsX/Matlab 2014b and Ubuntu/Octave 4.2.2. As Matlab is mostly platform independent it should run on other platforms with Matlab versions starting from 2014b.

### Installation

To run OpenOCL you have to get CasADi and adjust your Matlab/Octave path. 

Here is a step-by-step guide:

* Get the latest [CasADi](http://casadi.org) version for Matlab or Octave and follow the installation [instructions](https://web.casadi.org/get/) on their page.
* Add the main *CasADi* directory to your Matlab path, not including subdirectories: `addpath 'path/to/casadi'`
* Download [OpenOCL v4.20 (zip)](https://github.com/OpenOCL/OpenOCL/archive/v4.20.zip), unzip, and add the folder to your path: `addpath 'path/to/OpenOCL-v4.20'`. Again do not include the sub-directories!
* Run the StartupOCL.m script: `StartupOCL`
* Run one of the examples, e.g.: `mainCartPole`

If you would like to save your path using `savepath` or the Matlab path manager, do this **before** running `StartupOCL` in order to not include the sub-directories.

Let us know if you run into any problems at info@openocl.org!


