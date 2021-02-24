// Square
class Obstacle1 {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = width;
    this.y = random(0, height);
    this.isColliding = false;
  }

  
  draw() {
    // Level 1 and 2 look
    let c = color("orange");
    fill(c);
    rect(this.x, this.y, this.width, this.height);
    this.x -= 3;
  }

  drawLevel3() {
    // Level 3 look
    let c = color("coral");
    fill(c);
    rect(this.x, this.y, this.width, this.height);
    this.x -= 4;
  }

  drawLevel4() {
    // Level 4 look
    let c = color("coral");
    fill(c);
    rect(this.x, this.y, this.width, this.height);
    this.x -= 4;
  }
}

// The medium ball
class Obstacle2 extends Obstacle1 {
  constructor(x, y, isColliding) {
    super(x, y, isColliding);
    this.d = 50;
  }

  draw() {
    // Level 1 and 2 look
    let c = color("purple");
    fill(c);
    noStroke();
    circle(this.x, this.y, this.d);
    this.x -= 2;
  }

  drawLevel3() {
    // Level 3 look
    let c = color("aquamarine");
    fill(c);
    noStroke();
    circle(this.x, this.y, this.d);
    this.x -= 3;
  }
}
  // The tiny ball
  class Obstacle3 extends Obstacle2 {
    constructor(x, y, isColliding, d) {
      super(x, y, isColliding);
      this.d = 30;
    }
  
    draw() {
      // Level 1 and 2 look
      let c = color("pink");
      fill(c);
      noStroke();
      circle(this.x, this.y, this.d);
      this.x -= 5;
    }

    drawLevel3() {
      // Level 3 look
      let c = color("deepPink");
      fill(c);
      noStroke();
      circle(this.x, this.y, this.d);
      this.x -= 6;
    }
  }

  // The biggest ball
  class Obstacle4 extends Obstacle2 {
    constructor(x, y, isColliding, d) {
      super(x, y, isColliding);
      this.d = 60;
    }
    
    draw() {
      // Level 1 and 2 look
      let c = color("darkgreen");
      fill(c);
      noStroke();
      circle(this.x, this.y, this.d);
      this.x -= 4;
    }

    drawLevel3() {
      // Level 3 look
      let c = color("darkturquoise");
      fill(c);
      noStroke();
      circle(this.x, this.y, this.d);
      this.x -= 5;
    }
  }

  // #5 Obstacle: navy rectangle
  class Obstacle5 extends Obstacle1 {
    constructor(x, y, width, height, isColliding) {
      super(x, y, isColliding);
      this.width = 75;
      this.height = 40;
    }
    
    draw() {
      // Level 1 and 2 look
      let c = color("navy");
      fill(c);
      noStroke();
      rect(this.x, this.y, this.width, this.height);
      this.x -= 3;
    }

    drawLevel3() {
      // Level 3 look
      let c = color("darkviolet");
      fill(c);
      noStroke();
      rect(this.x, this.y, this.width, this.height);
      this.x -= 4;
    }
  }