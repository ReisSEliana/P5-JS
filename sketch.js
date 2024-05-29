function setup() {
  createCanvas(1000, 1000);
   background(100, 130, 250); //cor do fundo 
}

function draw() { 
 
  fill(255,10,100); // cor de preenchimento do círculo

if (mouseIsPressed) {
  circle(mouseX, mouseY, 50); // círculo
}
  
}