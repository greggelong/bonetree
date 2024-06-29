//let hand;
let bone;
function preload() {
  //hand = loadImage("handd.png");
  bone = loadImage("bone.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  stroke("#AEA294");
  strokeWeight(26);
  translate(width / 2, height);
  angleMode(DEGREES);

  //hand.resize(50,0)
  imageMode(CENTER);
  //branch(300, 4,65);
  frameRate(25);
}

function draw() {
  //resetMatrix()
  translate(width / 2, height);
  background(0);
  branch(300, 7, frameCount % 360);
}

function branch(len, d, theta) {
  // exit condition

  if (d == 0) {
    //image(hand,0,0,160,160)
    //ellipse(0,0,20,20)

    return;
  }

  // draw line

  image(bone, 0, -len / 2, len / 4, len);
  //line(0, 0, 0, -len);
  //recursive condition

  // first translate to end of line
  translate(0, -len);

  // srink len
  len *= 0.67;
  // decrement d
  d--;
  // rotate right

  push();
  rotate(theta);

  // call recursive loop
  branch(len, d, theta);
  pop();
  // rotate left
  push();

  rotate(-theta);
  branch(len, d, theta);
  pop();
}
