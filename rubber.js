class Rubber {
    constructor(x, y, radius) {
      var options = {
        'restitution':0.5,
        'friction':0.5,
        'density':2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      ellipseMode(RADIUS);
      strokeWeight(3);
      stroke(0)
      fill(rgb(0,247,247));
      ellipse(pos.x,pos.y,40);;

    }
  }