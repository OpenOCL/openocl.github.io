---
categories: contributed
title: "[Contributed] 1:10 scale pro stock remote car racing"
permalink: /:categories/:title/
hidden: false
---

**Mustafa Alp** from the *Polytechnic University of Milan* sent us a great video of his implementation in OpenOCL:

![Animation of race track](/assets/posts/lapsim_2208_v1.gif)  
<span style="font-size: xx-small;">(Image courtesy of Mustafa Alp)</span>

Here are some details on the implementation:
* The vehicle model resembles a car of the 1:10 scale pro stock division remote controlled racing.
* The track length is **337 meters**.
* The simulated laptime of **22.08 seconds** is close to the laptime that is achieved in real racing (see video below). 
* The track is discretized by 815 discretization points.
* The solution time is about **5 minutes** with around **300-500 iterations**.
* The torque curve of the motor is experimentally determined (motor with up to 25000 rpm).
* Aerodynamic downforce and drag coefficients, as well as centres of pressures are from CFD results.
* Mass, center of gravity position, mass moment of inertia, and drivetrain inertia values are from CAD drawings. 
* It uses a semi-empirical **tyre model** with vertical load sensitivity, and combined (lateral and longitudinal) slip effects, as well as *roll off* characteristics of force/slip curves.

And here you can see them racing on the same track:

{% include youtube_player.html id='N1xGLIeHnOg' start=19 border=1 %}


Let us know if **you** have something to share at info [at] openocl.org!
