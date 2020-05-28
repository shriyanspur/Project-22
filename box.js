class Box{
    constructor(x, y, width, height){
        var box_opt = {
            restitution: 1
        }

        this.body = Bodies.rectangle(150,150,30,30,box_opt);
        this.width = width;
        this.height = height;
        this.image = loadImage("box.png");
        //this.image.scale = 5;
        World.add(world,this.body);
    }
    display(){
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        this.image.scale = 5;
        //pop();
    }
}