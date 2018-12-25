Kmeans k;

void setup() {
  size(240,240);
  k = new Kmeans(3, 40);
  k.init();
}

void draw() {}

void mousePressed() {
  float x = mouseX;
  float y = mouseY;
  k.addSpot(x, y);
}
