---
categories: tutorials
title: "[Tutorial01] Double pole cart model"
permalink: /:categories/:title/
mathjax: true
hidden: true
---

We start the *tutorial series for optimal control* with implementing the simulation model of a **double pendulum on a cart**, or **double-pole cart**, or **double cart-pole** if you like. 
The idea of this tutorial series is to implement the code for the tutorials while writing the blog posts, so it is to be seen how far we will get.

### Basic system outline

We briefly summarize the features/requirements that we would like to implement for the model:

1. The system has a cart that can move linearly alogn the x-axis.
2. The cart can be controlled by a limited force $f$ that acts along the x-axis.
3. In the center of the cart a pole/pendulum is attached by a uncontrolled revolute joint.
4. At the end of the first pole, a second pole is connected to the first pole by a revolute joint that can be controlled by a limited torque $\tau$.
5. The system should have realistic physical behaviour, i.e. we use physical parameters like mass, momentum.
6. The system can be simulated from a given state $x_0$.
7. The system is noisy.

To simplify things we assume that the poles are massless. The mass is concentrated as point masses at the end of each pole.

Here, i drew a picture of the system:

![Drawing of double pole cart](/assets/posts/drawing_dpcart.jpg)

### The state of the system

With the model equations we want to describe mathematically how the system evolves with time. But first we need to define the state of the system which describes the situation in which the system currently is. The state has to have *Markov property* which says something like: you should be able to predict future states, when you have only the current state given. So we need this property to be able to simulate the system.

Therefore the state usually does not only include the current location or configuration of the system but also the velocity of the system. Because of *Newton's Laws* we can describe the state of classical mechanical systems by its position and velocity. We know that the system continues moving when there are no forces, and it will acclerate/decelerate when there are external forces according to $F=m a$ etc.

So for our double pole cart system, we can describe the state by the following set of variables:
* Position of the cart $p$
* Velocity of the cart $v$
* Angle of the first pole $\theta$
* Angular velocity of the first pole $\dot{\theta}$
* Angle of the second pole $\phi$
* Angular velocity of the second pole $\dot{\phi}$

### The dynamical system equations

Now comes the hard part. Although we could probably find the equations online somewhere (like [here](https://www.acin.tuwien.ac.at/fileadmin/cds/pre_post_print/glueck2013.pdf) or at least for the double pendulum [here](https://www.youtube.com/watch?v=neh86u7_TIk)) we will try to derive the equations from scratch.


First we can determine the positions of the masses $p_1$ and $p_2$. Here is another picture: 

![Drawing of single pendulum](/assets/posts/tut01_drawing_pendulum.jpg)

From the picture we can see that $p_1$ can be calculated by
$$
p_1 = \\begin{bmatrix} p_x + \cos{\theta} l_1 \\\sin{\theta} l_1 \\end{bmatrix}
$$

Lets start with a **single pendulum**.

So, our first pendulum is described by the position of the hinge/joint $p_1$, the angle $\theta$, and the angular velocity $\dot{\theta}$. The only force acting on the pendulum is the gravity force $f_g$. Here is another picture: 



Only the orthorgonal part of the force $f^{\top}_g$ creates a moment around $p_1$. The torque is 
$$
\tau = f^{\top}_g l_1 = \sin(\theta) f_g l_1 \,,
$$
which relates to the angular acceleration by 
$$
\tau = I \ddot{\theta} \,.
$$

For the inertia $I_1$ we can take the [inertia of a rod](http://hyperphysics.phy-astr.gsu.edu/hbase/mi2.html) where the the axis is at the end of the rod. If the pendulum has mass $m_1$ the inertia is given by 
$$
I_1 = \frac{1}{3} m_1 l_1 \,.
$$

Putting all together we arrive at
$$
\ddot{\theta} = \frac{3 \sin{\theta} f_g l_1}{m_1 l_1} = \frac{3 \sin{\theta} f_g }{m_1} \,,
$$
and we realize that the length $l_1$ drops out of the equation.

