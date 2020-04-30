
//X Y starting POS, DX DY destination Pos, Circle Radius
function Particle(x, y, dx, dy, shapeRadius) {
    this.x = x;
    this.y = y;
    this.r = shapeRadius;
    this.dx = dx;
    this.dy = dy; 
    this.history = [];
    var i = 0;
    var k = 0;

    this.update = function() {
   


    };
  
    this.show = function() {
      noStroke();
      fill(0, 150);
      ellipse(this.x, this.y, this.r, this.r);

      for (i = 0; i < this.history.length; i++) {
        var pos = this.history[i];
        fill(random(255));
        ellipse(pos.x, pos.y, this.r, this.r);
      //  vertex(pos.x, pos.y);
      }

    };

    
  }
  