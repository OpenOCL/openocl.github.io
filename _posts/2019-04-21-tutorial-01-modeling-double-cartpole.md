---
categories: tutorials
title: "[Tutorial01] Modeling for Reinforcement learning and optimal control: Double pendulum on cart"
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
6. We would like to be able to simulate the system from a given, or randomly chosen state $x_0$.
7. The system is noisy.

To simplify things we assume that the poles are massless. The mass is concentrated as point masses at the end of each pole.

Here, we drew a picture of the system:

![Drawing of double pole cart](/assets/posts/drawing_dpcart.jpg)

The structure of the double pendulum on a cart is desribed by a set of parameters which we choose (more or less) arbitrarily:[
\\[
\begin{align}
  r_1 = 1 \\, \mathrm{[m]} \\quad \mathrm{length of the first pole} \\\
  r_2 = 1 \\, \mathrm{[m]} \\quad \mathrm{length of the second pole} \\\
  m_c = 5 \\, \mathrm{[kg]} \\quad \mathrm{mass of the cart} \\\
  m_1 = 1 \\, \mathrm{[kg]} \\quad \mathrm{mass of the first pole} \\\
  m_2 = 1 \\, \mathrm{[kg]} \\quad \mathrm{mass of the second pole} \\\
  g = 9.81 \\, \mathrm{[m s^{-1}]} \\quad \mathrm{gravitational acceleration} \\\
\end{end}
\\]


### The state of the system

With the model equations we want to describe mathematically how the system evolves with time. But first we need to define the state of the system which describes the situation in which the system currently is. The state has to have *Markov property* which says something like: you should be able to predict future states, when you have only the current state given. We need this property to be able to simulate the system.

Therefore the state usually does not only include the current location or configuration of the system but also the velocity of the system. Because of *Newton's Laws* we can describe the state of classical mechanical systems by its position and velocity. We know that the system continues moving when there are no forces, and it will acclerate/decelerate when there are external forces according to $F=m a$ etc.

So for our double pole cart system, we can describe the state by the following set of variables:
* The position of the cart $q_0 \in \mathcal{R}$ in the x-direction
* The angle of the first pole $q_1 \in \mathcal{R}$
* The angle of the second pole $q_2 \in \mathcal{R}$
* The velocity of the cart $\dot{q}_0 \in \mathcal{R}$ in the x-direction
* The angular velocity of the first pole $\dot{q}_1 \in \mathcal{R}$
* The angular velocity of the second pole $\dot{q}_2 \in \mathcal{R}$

This choice of state is a minimal representation of the state of the system. All variables are scalar, and real numbers. We do not need to describe e.g. the position of the cart in y-direction as the cart can not move *upwards*.

### The dynamical system equations

Now follows the hard part! We use the *Euler–Lagrange equations* [[wikipedia](https://en.wikipedia.org/wiki/Euler%E2%80%93Lagrange_equation)] to model the system dynamics. The *Euler–Lagrange* method is an energy based method that is a bit easier and requires less thinking than for example the (recursive) Newton-Euler method.

We start with calculating the center of mass positions of the three body parts of the cart-pole system, and express the positions as functions of the state variables. We derive the center of mass positions because we can use them to define the potential and kinetic energies of the body parts which we will use to obtain the dynamical equations. The three body parts are: the cart, the first pole, the second pole. 

**Kinematics** The kinematics describe the static and moving structures of a system without the inertial and accelerating properties. For the double cart-pole we therefore desribe the center of mass positions and velocities.

The position $p_c \in \mathcal{R}^2$ of the cart is easy:

\\[
p_c = \\begin{bmatrix} q_0 \\\ 0 \\end{bmatrix} \\,,
\\]
as the y-coordinate of the cart is always $0$.

The center of mass position of the first pole $p_1 \in \mathcal{R}^2$ is half-way along the first pole. Here is another picture: 

![Drawing of single pendulum](/assets/posts/tut01_drawing_pendulum.jpg)

From the picture we can see that $p_1$ can be calculated by

\\[
p_1 = p_c + \frac{l_1}{2}  \\begin{bmatrix}  \cos(q_1)  \\\ \\sin(q_1) \\end{bmatrix} \\,.
\\]

The center of mass position of the second pole can be derived similarily. Here we need to go to the end of the first pole (not only the half length), and add the two joint angles to get the direction of the second pole. The position of the second pole $p_2$ can be calculated by

\\[
p_2 = p_c + l_1  \\begin{bmatrix} \cos(q_1)  \\\ \\sin(q_1) \\end{bmatrix} +  \frac{l_2}{2} \\begin{bmatrix}  \cos(q_1+q_2) \\\ \\sin({q_1+q_2})\\end{bmatrix} \\,.
\\]

From the *center of mass* positions we can get the velocities by differentiation. The velocity of the cart is given by

\\[
v_c = \\begin{bmatrix} \dot{q}_0 \\\ 0 \\end{bmatrix} \\,,
\\]

the *center of mass* velocity of the first pole is given by

\\[
v_1 = v_c + \frac{l_1}{2}  \\begin{bmatrix}  - \sin(\\theta\) \dot{\theta}  \\\ \\cos({\theta}) \dot{\theta} \\end{bmatrix} \\,,
\\]

and the velocity of the second pole is 

\\[
v_2 = v_c + l_1  \\begin{bmatrix} - \sin(\\theta\) \dot{q}_1  \\\ \\cos(q_1) \dot{q}_1 \\end{bmatrix} +  \frac{l_2}{2} \\begin{bmatrix}  - \sin(q_1+q_2) (\dot{q}_1+\dot{q}_2) \\\ \\cos(q_1+q_2) (\dot{q}_1+ \dot{q}_2) \\end{bmatrix} \\,.
\\]


**Dynamics** The dynamics of a system describe the inertial and accelerating properties of a system.

We derive the dynamics using the Euler-Lagrange energy method. We start with the kinetic energy. The overall kinetic energy is the sum of the kinetic energies of the three body parts.

The kinetic energy of the cart is 
\\[
K_c = \frac{1}{2} m_c v_c^2 \,,
\\]

the kinetic energy of the first pole is 
\\[
K_1 = \frac{1}{2} m_1 v_1^2 \,,
\\]

and the kinetic energy of the second pole is
\\[
K_2 = \frac{1}{2} m_2 v_2^2 \,.
\\]

For the potential energy of the system we again sum the potential energies of the individual parts. The cart has constant potential energy as it can not move up or down in the earth gravitational field. We can therefore omit it as it would be elimiated in the equations later.

The potential energy of the first pole is
\\[
P_1 = m_1 g p_1(2) \,,
\\]

and the potential energy of the second pole is
\\[
P_2 = m_2 g p_2(2) \,,
\\]
where $g=9.81$ is the gravitational acceleration.

Now we can plug the kinetic energies and the potential energies into the *Euler-Lagrange* equation:
\\[
\frac{\partial (K_c+K_1+K_2-P_1-P_2)}{\partial q} - \frac{\partial (K_c+K_1+K_2-P_1-P_2)}{\partial \dot{q}} = [f,0,0]^\top \\,,
\\]
where $q=[q_0,q_1,q_2]^\top$ are the coordinates of the system, $\dot{q}=[\dot{q_0},\dot{q_1},\dot{q_2}]^\top$ are the velocities of the system, and $f$ is the force input (external force) that only acts on the cart in x-direction.

We can calculate the derivatives in the *Euler-Lagrange* equation by hand, and solve for $\ddot{q}=[\ddot{q}_0,\ddot{q}_1,\ddot{q}_2]^\top$ but it is easier and less error prone to let the computer do the calculations for you. We prepared scripts in [Python]() and [Matlab]() for you that use symbolic toolboxes with symbolic differentiation and do the calculation for us. From the scripts it turns out that we get something much more complicated than we expected! So here it comes..

\\[
\\begin{align} 
\ddot{q}_0 = & (-f \cos(2q_2) + 3 f - 4 \dot{q}_1 \cos^2(q_1) - \dot{q_1} \cos^2(q_1-q_2) - \dot{q}_1 \cos^2(q_1 + q_2) \\\
             & - 2 \dot{q}_1 \dot{q}_2 \cos(q_1 - q_2) - 2 \dot{q}_1 \dot{q}_2 \cos(q_1+q_2) - \dot{q}_2 \cos^2(q_1 - q_2) \\\
             & - \dot{q}_2 \cos^2(q_1 + q_2) + \frac{981}{50} \sin(2 q_1) )  (-2 \cos(2 q_1) + 5 \cos(2 q_2) - 17)^{-1}
\\end{align}
\\]

Ok i am giving up here ...

\\[
\ddot{q}_1 = \mathrm{exercise..}
\\]

\\[
\ddot{q}_2 = \mathrm{exercise..}
\\]

These type of equations are called *ordinary differential equations* as they relate the state variables ($q_0$, $q_1$, $q_2$, $\dot{q}_0$, $\dot{q}_1$, $\dot{q}_2$) to their derivative ($\ddot{q}_0$, $\ddot{q}_1$, $\ddot{q}_2$). Remember that our state was given by $x=[q_0, q_1, q_2, \dot{q}_0, \dot{q}_1, \dot{q}_2]^\top$.

We can now use a numerical integration method like *explicit Euler* [[wikipedia]()], *Runge-Kutta 4* [[wikipedia]()], or even implicit methods like *implicit Euler* [[wikipedia]()], *BDF* [[wikipedia]()] or *Collocation* [[wikipedia]()] to simluate the system. Fortunately in Python and Matlab there are already excellent implementation available that we can use (although at least the explicit methods are super easy to implement!).

To be able to use the integration methods we need to bring the equations into a particular form. We already collected all the state variables into a vector $x$, the controls are usually called $u$ which for the cart-pole just the force $u=f$. The (non-linear) system dynamics can be presented in the explicit form as

\\[
\dot{x} = f(x,u) \\,,
\\]

which is the most common form of representing general dynamical system in the explicit form.

For our cart-pole system this means we need to add some trivial equations which are $\dot{x}_0=\dot{q}_0$, $\dot{x}_1=\dot{q}_1$, and $\dot{x}_2=\dot{q}_2$. Together our *ordinary differential equations* for the double-cart-pole are:

\\[
\dot{x} = \begin{bmatrix} \dot{q}_0 \\\ \dot{q}_1 \\\ \dot{q}_2 \\\ \ddot{q}_0 \\\ \ddot{q}_1 \\\ \ddot{q}_2  \end{bmatrix}   \\,,
\\]

where $\ddot{q}_0$, $\ddot{q}_1$, $\ddot{q}_2$ are the long equations from above.

And here are the Python and Matlab implementations to simlulate the system starting from a random state $x_0$ for 5 second:

```Python

```

```m
function simulate_doublecartpole
  
  % parameters
  p = doublecartpole_parameters;
  
  % get a random starting state between min state and max state
  x_min = [-1; -pi; -pi; -.05; -1; -1];
  x_max = -x_min;
  x0 = rand(6,1) .* (x_max-x_min)+x_min;
  
  % simulate
  tspan = [0:0.01:5];
  [tspan, X] = ode45(@ode_function, tspan, x0);
  
  draw_doublecartpole(tspan, X, x_min, x_max, p);
 
end

function xdot = ode_function(t, x)
  f = 0;
  
  q_0 = x(1);
  q_1 = x(2);
  q_2 = x(3);
  
  qdot_0 = x(4);
  qdot_1 = x(5);
  qdot_2 = x(6);
  
  qddot_0 = (-f.*cos(2*q_2)+3*f-4*qdot_1.^2.*cos(q_1)-qdot_1.^2.*cos(q_1-q_2) ...
             -qdot_1.^2.*cos(q_1+q_2)-2*qdot_1.*qdot_2.*cos(q_1-q_2)-...
             2*qdot_1.*qdot_2.*cos(q_1+q_2)-qdot_2.^2.*cos(q_1-q_2) ... 
             -qdot_2.^2.*cos(q_1+q_2)+981*sin(2*q_1)/50) ...
             ./ (-2*cos(2*q_1)+5*cos(2*q_2)-17);
  qddot_1 = (3*f.*sin(q_1)-f.*sin(q_1+2*q_2)-2*qdot_1.^2.*sin(2*q_1) ...
             -11*qdot_1.^2.*sin(q_2)-5*qdot_1.^2.*sin(2*q_2) ...
             -qdot_1.^2.*sin(2*q_1+q_2)-22*qdot_1.*qdot_2.*sin(q_2) ...
             -2*qdot_1.*qdot_2.*sin(2*q_1+q_2)-11*qdot_2.^2.*sin(q_2) ...
             -qdot_2.^2.*sin(2*q_1+q_2)+18639*cos(q_1)/100 ...
             -981*cos(q_1+2*q_2)/20)./(-2*cos(2*q_1)+5*cos(2*q_2)-17); 
  qddot_2 = (-300*f.*sin(q_1)-200*f.*sin(q_1-q_2)+200*f.*sin(q_1+q_2) ...
             +100*f.*sin(q_1+2*q_2)+200*qdot_1.^2.*sin(2*q_1) ...
             +3100*qdot_1.^2.*sin(q_2)+1000*qdot_1.^2.*sin(2*q_2) ...
             +100*qdot_1.^2.*sin(2*q_1+q_2)+2200*qdot_1.*qdot_2.*sin(q_2) ...
             +1000*qdot_1.*qdot_2.*sin(2*q_2)+200*qdot_1.*qdot_2.*sin(2*q_1+q_2) ...
             +1100*qdot_2.^2.*sin(q_2)+500*qdot_2.^2.*sin(2*q_2) ...
             +100*qdot_2.^2.*sin(2*q_1+q_2)-18639*cos(q_1)-9810*cos(q_1-q_2) ...
             +9810*cos(q_1+q_2)+4905*cos(q_1+2*q_2))./(100*(-2*cos(2*q_1)+5*cos(2*q_2)-17));
  
  xdot = [qdot_0;qdot_1;qdot_2;qddot_0;qddot_1;qddot_2];
end
```

We add a function to animate the system in [Python]() and [Matlab]{}, and we get this nice simulation:

Easy!

Get all the code bundled in a zip file: [Python](), [Matlab](), [Octave]().

Upcoming articles (ideas):
- Creating an OpenAI Gym environment for the double pendulum on a cart.
- Reinfocement learning (Q-learning) with double pendulum on a cart..
- A more elaborate article on adding different type of noise (equation error, output, sensor, actuator, etc noise)
- Implementing a model-predictive controller for double pendulum on a cart using [OpenOCL](https://openocl.org).

