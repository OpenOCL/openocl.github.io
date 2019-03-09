---
categories: tutorials
title: "[Tutorial01] Double pole cart model"
permalink: /:categories/:title/
mathjax: true
hidden: true
---

We start the *tutorial series for optimal control* with implementing the simulation model of a double pole cart. 
The idea of this tutorial series is to implement the code for the tutorials while writing the blog posts, so it is to be seen how far we will get.

### Basic model outline

Here we describe the features/requirements that we would like to implement for the model.
1. The system has a cart that can move linearly alogn the x-axis.
2. The cart can be controlled by a limited force $f$ that acts along the x-axis.
3. In the center of the cart a pole/pendulum is attached by a uncontrolled revolute joint.
4. At the end of the first pole, a second pole is connected to the first pole by a revolute joint that can be controlled by a limited torque $\tau$.
5. The system should have realistic physical behaviour, i.e. we use physical parameters like mass, momentum.
6. The system can be simulated from a given state $x_0$.
7. The system is noisy.

Here i drew a picture of the system:

![Drawing of double pole cart](/assets/posts/drawing_dpcart.jpg)

### Model equations

We describe the state of the system by a set of variables:
* Position of the cart $p$
* Velocity of the cart $v$
* Angle of the first pole $\theta$
* Angular velocity of the first pole $\dot{\theta}$
* Angle of the second pole $\phi$
* Angular velocity of the second pole $\dot{\phi}$

