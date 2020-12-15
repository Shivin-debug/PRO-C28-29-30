class Stone{
    constructor(x, y, r){
      var s_options = {
        isStatic: false,
        restitution: 0.2, 
        friction: 1,
        density: 1.2
      }

      this.stone = Bodies.circle(x, y, r, s_options);
      this.r = r;
      this.image = loadImage("stone.png");
      World.add(world, this.stone);
    }
    display(){
      var s = this.stone.position;
      push()
      translate(s.x, s.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop()
    }
}