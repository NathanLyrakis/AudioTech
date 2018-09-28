function setup() {
    myCanvas = createCanvas(640,480);
    background(225,100,200);

}

function draw() {
if (mouseIsPressed) {
stroke(100,100,200);
fill(0);
} else {
  stroke(200,100,100);
fill(255);
}
ellipse(mouseX, mouseY, 80, 80);
}
