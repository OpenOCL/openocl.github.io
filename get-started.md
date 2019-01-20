---
permalink: /get-started/
title: Get Started
---

**Download** the latest release: [OpenOCL v3.10 pre-release (zip)](https://github.com/OpenOCL/OpenOCL/archive/v.3.10.zip), [Release Notes](https://github.com/OpenOCL/OpenOCL/releases/tag/v.3.10)

This version is a pre-release of *OpenOCL v3*. We recommend using this version already until the final release is out because the version contains some changes in the API. The final release of *OpenOCL v3* is due by [January 20, 2019](https://github.com/OpenOCL/OpenOCL/milestone/1). This is also the first release to support Octave! For a list of changes have a look at the [release notes](https://github.com/OpenOCL/OpenOCL/releases/tag/v.3.10). To get the developement version of OpenOCL with the latest developments clone the [master](https://github.com/OpenOCL/OpenOCL/tree/master) branch or a recent [dev branch](https://github.com/OpenOCL/OpenOCL/branches) on github.

The toolbox is tested on Windows/Matlab 2016b, OsX/Matlab 2014b and Ubuntu/Octave 4.2.2. As Matlab is mostly platform independent it should run on other platforms with Matlab versions starting from 2014b.

### Installation

To run OpenOCL you have to get CasADi and adjust your Matlab/Octave path. 

Here is a step-by-step guide:

* Get [CasADi](http://casadi.org) version 3.3 (or newest 3.4 but it is untested) for Matlab or Octave and follow the installation instructions on their page.
* Add the main *CasADi* directory to your Matlab path, not including subdirectories: `addpath 'path/to/casadi'`
* Download [OpenOCL v3.10 pre-release (zip)](https://github.com/OpenOCL/OpenOCL/archive/v.3.10.zip), unzip, and add the folder to your path: `addpath 'path/to/optimal-control-3-01-pre'`. Again do not include the sub-directories!
* Run the StartupOCL.m script: `StartupOCL`
* Run one of the examples, e.g.: `mainRaceCar`

If you would like to save your path using `savepath` or the Matlab path manager, do this **before** running `StartupOCL` in order to not include the sub-directories.



