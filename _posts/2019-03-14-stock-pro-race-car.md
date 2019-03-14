---
categories: contributed
title: "[Contributed] 1 to 10 scale stock pro"
permalink: /:categories/:title/
hidden: true
youtube: N1xGLIeHnOg&amp;
---

**Mustafa Alp** from the *Polytechnic University of Milan* sent us a great video of his implementation:

![Animation of race track](/assets/posts/lapsim_2208_v1.gif)

Here are some details on the implementation:
* The vehicle model is a car from the 1:10 scale pro stock division.
* The track path length is 337 meters.
* It is discretized by 815 discretization points.
* Solution time is around 5 minutes with around 300-500 iterations.
* The torque curve of the motor is experimentally determined (25000 rpm limit).
* Aerodynamic downforce and drag coefficients, as well as centres of pressures are from CFD results.
* Mass, center of gravity position, mass moment of inertia, and drivetrain inertia values are from CAD drawings. 
* It use a semi empirical tyre model with vertical load sensitivity, and combined (lateral and longitudinal) slip effects, as well as *roll off* characteristics of force/slip curves.


And here you can see them racing on the same track:

{% include youtubePlayer.html id=youtube %}
