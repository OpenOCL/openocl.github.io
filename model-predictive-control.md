---
permalink: /model-predictive-control/
last_modified_at: 2019-05-04
title: Model Predictive Control
---

# Model Predictive Control

*Model Predictive Control*, short **MPC**, is the application of *optimal control theory* to actual physical systems. 
Because many dynamical systems need to be controlled with a high frequency (for example in the millisecond range), in the implementation of
a (model) predictive controller the computation time for calculating the control inputs needs to be considered. In the best case the 
computation time is deterministic (realtime), but often a fast enough average computation time is sufficient. 

Due to this strict demand on the computational efficiency, linear system models, and quadratic cost models are preferred, but there is
ongoing research on realizing predictive controllers with non-linear models.
