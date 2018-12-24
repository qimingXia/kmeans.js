# Kmeans.js

## Live Demo
[Click Here](https://gruselhaus.github.io/kmeans.js/Example/)

## Requirements
  * p5.js (0.7.2 or higher)

## Example
```js
let kmean;

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
```
