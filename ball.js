class Ball {
    constructor(x, y, radius) {
      var options = {
        'restitution':0.7,
        'friction':1.0,
        'density':1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      ellipseMode(RADIUS);
      strokeWeight(3);
      stroke("black")
      fill("purple");
      ellipse(pos.x,pos.y,10);;

    }
  }