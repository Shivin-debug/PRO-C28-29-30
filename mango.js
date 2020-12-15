class Mango{
    constructor(x, y, r){
      var m_options = {
        isStatic:true,
        restitution: 0,
        friction: 1
      }

      this.mango = Bodies.circle(x, y, r, m_options);
      this.r = r;
      this.image = loadImage("mango.png");
        
      World.add(world, this.mango)
    }
    display(){
      var m = this.mango.position;
      push()
      translate(m.x, m.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      push()
    }
}
