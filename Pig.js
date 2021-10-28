class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);//no option named radius in the base class
    this.image = loadImage("sprites/enemy.png");
  }

};