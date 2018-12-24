/**
 * @module "Kmeans.js"
 * @author Nico Finkernagel
 * @copyright Nico Finkernagel 2018
 * @license MIT
 * @requires p5.js
 * @version 0.0.1
 */

/**
 * @class Kmeans
 * @uses Spot
 * @uses Node
 * @constructor
 * @param {Array} _numofclusters
 * @param {Array} _numofspots
 * @param {Integer} _background
 */
class Kmeans {
  constructor(_numofclusters, _numofspots, _background) {
    /**
     * Spots Array
     * @property spots
     * @type Array
     * @default []
     */
    this.spots = [];

    /**
     * Nodes Array
     * @property nodes
     * @type Array
     * @default []
     */
    this.nodes = [];

    /**
     * Number of Clusters, Nodes to be generated
     * @property numofclusters
     * @type Integer
     * @param {Integer} _numofclusters
     * @default 0
     */
    this.numofclusters = _numofclusters || 0;

    /**
     * Number of Spots, Spots to be generated
     * @property numofspots
     * @type Integer
     * @param {Integer} _numofspots
     * @default 0
     */
    this.numofspots = _numofspots || 0;;

    /**
     * Indicates if Kmeans Algoritm has finished
     * @description If Value is true the Kmeans algorithm has finished
     * @property finished
     * @type Boolean
     * @default false
     */
    this.finished = false;

    /**
     * Background Color
     * @description Background color as a gray scale value
     * @type Integer 
     * @param {Integer} _background
     * @default 255
     */
    this.background = _background || 255;
  }

  /**
   * @method init
   * @description This function initializes the Kmeans object. It generates the nodes & spots.
   */
  init() {
    for (let i = 0; i < this.numofspots; i++) {
      this.spots.push(new Spot());
    }
    for (var i = 0; i < this.numofclusters; i++) {
      let c = new Node(random(255), random(255), random(255), this);
      this.nodes.push(c);
    }
  }

  /**
   * @method addNode
   * @description If this function is called it generates a new Node with random positions
   * @callback update
   * @callback show
   */
  addNode() {
    //set up the node
    let n1 = new Node(random(255), random(255), random(255), this);

    this.nodes.push(n1);
    this.numofclusters++;

    //call the update function
    this.finished = false;
    this.update();
    this.show();
  }

  /**
   * @method addSpots
   * @description If this function is called new Spots will be generated
   * @param {Float} x x-position for the new Spot
   * @param {Float} y y-position for the new Spot
   * @param {Integer} n Optional: If this value is set, multiple Spots will generated with a random offset of the params x & y
   * @callback update
   */
  addSpots(x, y, n) {
    // if num is zero or one, make on spot else make num * spots
    if (n == 1 || n == undefined) {
      let spot = new Spot(mouseX, mouseY);
      this.spots.push(spot);
      this.numofspots++;
    } else {
      for (let i = 0; i < n; i++) {
        let spot = new Spot(mouseX + random(-10, 10), mouseY + random(-10, 10));
        this.spots.push(spot);
        this.numofspots++;
      }
    }
    this.finished = false;
    this.update();
  }

  /**
   * @method update
   * @description "Task Manager" for the Algoritm. The algoritm only runs if the Variable 'finished' is false
   */
  update() {
    //Main algorithm
    while (!this.finished) {
      //clear the nodes spots array
      for (let node of this.nodes) {
        if (node.spots.length > 0) {
          node.clearSpots();
        }
      }

      //find the nearest node for every spot
      for (let spot of this.spots) {
        spot.findNearest(this.nodes);
      }

      //find new position for the nodes based on their points
      for (let node of this.nodes) {
        if (node.spots.length > 0) {
          node.update();
        }
      }

      //call the show function
      this.show();

      //break the loop if theirs no spot
      if (this.numofspots == 0) {
        this.finished = true;
      }
    }
  }

  /**
   * @method show
   * @description This function calls the show functions of the childs
   */
  show() {
    //canvas background;
    background(this.background);

    //show the spots
    for (let spot of this.spots) {
      spot.show();
    }

    //show the nodes
    for (let node of this.nodes) {
      node.show();
    }
  }
}

/**
 * @class Node
 * @constructor
 * @param {Integer} _r R-Value for Color
 * @param {Integer} _g G-Value for Color
 * @param {Integer} _b B-Value for Color
 * @param {Kmeans} _kmeans Kmeans Parent
 */
class Node {
  constructor(_r, _g, _b, _kmean) {
    /**
     * X Position
     * @property x 
     * @type Float
     */
    this.x = random(0, width);

    /**
     * Y Position
     * @property y
     * @type Float
     */
    this.y = random(0, height);

    /**
     * R - Value for Color
     * @property r
     * @type Integer
     */
    this.r = _r;

    /**
     * G - Value for Color
     * @property g
     * @type Integer
     */
    this.g = _g;

    /**
     * B - Value for Color
     * @property b
     * @type Integer
     */
    this.b = _b;

    /**
     * Radius for rendering
     * @property w
     * @type Integer
     */
    this.w = 15;

    /**
     * Array that holds the Spots
     * @property spots
     * @type Array
     */
    this.spots = [];

    /**
     * Reference to the parent Kmeans Object
     * @property kmean
     * @type Kmeans
     */
    this.kmean = _kmean;
  }

  /**
   * @method show
   * @description Renders the Object with p5.js Methods
   */
  show() {
    strokeWeight(2);
    stroke(0);
    let c = color(this.r, this.g, this.b);
    fill(c);
    let x = this.x;
    let y = this.y;
    let xs = 7
    let ys = 7
    beginShape();
    vertex(x, y - ys);
    vertex(x + xs, y);
    vertex(x, y + ys);
    vertex(x - xs, y);
    endShape(CLOSE);
  }

  /**
   * @method update
   * @description Main Kmeans Algoritm. 
   */
  update() {
    //declare sum variables
    let xsum = 0;
    let ysum = 0;

    //loop through all spots and sum up their x and y positions
    for (let i = 0; i < this.spots.length; i++) {
      xsum += this.spots[i].x;
      ysum += this.spots[i].y;
    }

    //divide by the number of spots to get an average x and y position
    let nx = floor(xsum / this.spots.length);
    let ny = floor(ysum / this.spots.length);

    //if the new position is the acutal position kmean is finished
    if (nx == this.x && ny == this.y) {
      this.kmean.finished = true;
    }

    //set the position of the node to the new position
    this.x = nx;
    this.y = ny;
  }

  /**
   * @method clearSpots
   * @description Clears the spots Array
   */
  clearSpots() {
    this.spots = [];
  }
}

/**
 * @class Spot
 * @constructor
 * @param {Float} _x X Position
 * @param {Float} _y Y Position
 */
class Spot {
  constructor(_x, _y) {
    /**
     * X Position
     * @property x
     * @type Float
     */
    this.x = _x || random(0, width);

    /**
     * Y Position
     * @property y
     * @type Float
     */
    this.y = _y || random(0, height);

    /**
     * Radius of the Object
     * @property r
     * @type Integer
     * @default {Integer} 10
     */
    this.r = 10;

    /**
     * Refence to the Node Object
     * @property node
     * @type Node
     * @default Null
     */
    this.node = null;
  }

  /**
   * @method findNearest
   * @description Searches for the nearest Node and generate relations
   */
  findNearest(nodes1) {
    //set max Distance to Infinity
    let maxD = Infinity;
    //set winner to null
    let winner = null;

    //loop to all of the nodes
    for (let i = 0; i < nodes1.length; i++) {
      let d = dist(this.x, this.y, nodes1[i].x, nodes1[i].y);
      //if the distance is less than the winners set the node as the winner
      if (d < maxD) {
        maxD = d;
        winner = nodes1[i];
      }
    }
    //reference this to the winner node
    winner.spots.push(this);
    //reference the winner node to this
    this.node = winner;
  }

  /**
   * @method show
   * @description Renders the Object with p5.js Methods
   */
  show() {
    //no Stroke
    noStroke();

    //fill with white
    fill(255);

    //if kmeans background is white fill the color of the node
    if (this.node) {
      if (this.node.kmean.background >= 215) {
        let c = color(this.node.r, this.node.g, this.node.b);
        fill(c);
      }
    }

    //draw this as a circle
    ellipse(this.x, this.y, this.r);

    // Lines to nodes
    if (this.node) {
      let c = color(this.node.r, this.node.g, this.node.b);
      stroke(c);
    }
    line(this.x, this.y, this.node.x, this.node.y);
  }
}