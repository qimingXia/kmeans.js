# Kmeans.js

## Live Demo
[Click Here](https://gruselhaus.github.io/kmeans.js/Example/)

## Requirements
  * p5.js (0.7.2 or higher)

## Functions
#### Add new Spots
```javascript
//Positions
let x = 100;
let y = 100;

//if you want to add more than one spot, you can set an optional parameter
let morethanone = 4;

//Call .addSpots to add a new Spot
k.addSpots(x, y, morethanone);
```

#### Add new Nodes
```javascript
//the Position of the Node will be randomly picked
k.addNode();
```

## Example
``` javascript
let kmean;

function setup() {
  createCanvas(windowWidth, windowHeight);
  kmean = new Kmeans(20, 40);
  kmean.init();
  kmean.update();
};

function mousePressed() {
  kmean.addSpots(mouseX, mouseY);
}

function mouseDragged() {
  kmean.addSpots(mouseX, mouseY);
}
```

