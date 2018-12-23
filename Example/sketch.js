const kmean;

function setup() {
  createCanvas(windowWidth, windowHeight);
  kmean = new Kmeans(20, 40);
  kmean.init();
  kmean.update();
}

function mousePressed() {
  kmean.addSpots(mouseX, mouseY);
}

function mouseDragged() {
  kmean.addSpots(mouseX, mouseY);
}
