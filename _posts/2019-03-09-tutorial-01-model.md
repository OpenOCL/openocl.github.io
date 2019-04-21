---
categories: tutorials
title: "[Tutorial01] Double pendulum on cart"
permalink: /:categories/:title/
mathjax: true
hidden: true
---

We start the *tutorial series for optimal control* with implementing the simulation model of a **double pendulum on a cart**, or **double-pole cart**, or **double cart-pole** if you like. 
The idea of this tutorial series is to implement the code for the tutorials while writing the blog posts, so it is to be seen how far we will get.

### Basic system outline

We briefly summarize the features/requirements that we would like to implement for the model:

1. The system has a cart that can move linearly along the x-axis.
2. The cart can be controlled by a limited force $f$ that acts along the x-axis.
3. In the center of the cart a pole/pendulum is attached by an uncontrolled revolute joint.
4. At the end of the first pole, a second pole is connected to the first pole by a second uncontrolled revolute joint.
5. The system should have realistic physical behaviour, i.e. we use physical parameters like mass, momentum.
6. We would like to be able to simulate the system from a given state $x_0$.
7. The system is noisy.

To simplify things we assume that the poles are massless. The mass is concentrated as point masses at the end of each pole.

Here, we drew a picture of the system:

![Drawing of double pole cart](/assets/posts/drawing_dpcart.jpg)

### The state of the system

With the model equations we want to describe mathematically how the system evolves with time. But first we need to define the state of the system which describes the situation in which the system currently is. The state has to have *Markov property* which says something like: you should be able to predict future states, when you have only the current state given. We need this property to be able to simulate the system.

Therefore the state usually does not only include the current location or configuration of the system but also the velocity of the system. Because of *Newton's Laws* we can describe the state of classical mechanical systems by its position and velocity. We know that the system continues moving when there are no forces, and it will acclerate/decelerate when there are external forces according to $F=m a$ etc.

So for our double pole cart system, we can describe the state by the following set of variables:
* Position of the cart $p \in \mathcal{R}$ in the x-direction
* Velocity of the cart $v \in mathcal{R}$ in the x-direction
* Angle of the first pole $\theta \in mathcal{R}$
* Angular velocity of the first pole $\dot{\theta} \in mathcal{R}$
* Angle of the second pole $\phi \in mathcal{R}$
* Angular velocity of the second pole $\dot{\phi} \in mathcal{R}$

This choice of state is a minimal representation of the state of the system. All variables are scalar, and real numbers. We do not need to describe e.g. the position of the cart in y-direction as the cart can not move *upwards*.

### The dynamical system equations

Now follows the hard part. We use the *Euler–Lagrange equations* to model the system dynamics. The *Euler–Lagrange* method is an energy based method that is quiet straightforward to apply and requires less thinking than for example the (recursive) Newton-Euler method.

We start with calculating the center of mass positions of the three body parts of the cart-pole system, and express the positions as functions of the state variables. We derivate the center of mass positions because we can use them to define the potential and kinetic energies of the body parts. The three body parts are: the cart, the first pole, the second pole.

The position $p_c \in \mathcal{R}^2$ of the cart is easy:
\\[
p_c = \\begin{bmatrix} p \\\ 0 \\,,
\\]
as the y-coordinate of the cart is always $0$.

The center of mass position of the first pole $p_1 \in \mathcam{R}^2$ is half-way along the first pole. Here is another picture: 

![Drawing of single pendulum](/assets/posts/tut01_drawing_pendulum.jpg)

From the picture we can see that $p_1$ can be calculated by
\\[
p_1 = p_c + \frac{l_1}{2} * \\begin{bmatrix}  \cos(\\theta\)  \\\ \\sin({\theta}) \\end{bmatrix} \\,.
\\]

The center of mass position of the second pole can be derived similarily. Here we need to go to the end of the first pole (not only the half length), and add the two joint angles to get the direction of the second pole. $p_2$ can be calculated by
\\[
p_2 = p_c + l_1 * \\begin{bmatrix} \cos(\\theta\)  \\\ \\sin({\theta}) \\end{bmatrix} +  \frac{l_2}{2} \\begin{bmatrix}  \cos(\theta+\phi) \\\ \\sin({\theta+\phi})\\end{bmatrix} \\,.
\\]



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

