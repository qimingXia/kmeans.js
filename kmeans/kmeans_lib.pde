//  Kmeans Library for Processing
//  Author: Nico Finkernagel

class Kmeans {
  //Variables
  ArrayList<Spot> spots;
  ArrayList<Node> nodes;
  int numofclusters;
  int numofspots;
  boolean finished;
  int xs;
  int ys;

  Kmeans(int numc, int nums) {
    //spots array
    spots = new ArrayList<Spot>();

    //nodes array
    nodes = new ArrayList<Node>();

    //number of clusters
    numofclusters = numc;

    //number of spots
    numofspots = nums;

    //if true kmeans is finished
    finished = false;

    //xspacing for diamond shape
    xs = 7;

    //yspacing for diamond shape
    ys = 7;
  }

  void init() {
    //if number of clusters is zero, set it to one
    if (numofclusters == 0) {
      numofclusters = 1;
    }

    //set up the spots
    for (int i = 0; i < numofspots; i++) {
      float x = random(0, width);
      float y = random(0, height);
      Spot s = new Spot(x,y);
      spots.add(s);
    }

    //set up the nodes
    for (int i = 0; i < numofclusters; i++) {
      Node c = new Node(random(255), random(255), random(255), this);
      nodes.add(c);
    }

    //call the update function
    update();
  }

  void addSpot(float x, float y) {
    //set up the spot
    Spot s = new Spot(x, y);

    spots.add(s);
    numofspots++;

    //call the update function
    finished = false;
    update();
  }

  void addNode() {
    //set up the node
    Node n = new Node(random(255), random(255), random(255), this);

    nodes.add(n);
    numofclusters++;

    //call the update function
    finished = false;
    update();
  }

  void update() {
    //Main algorithm
    while(!finished) {

      //clear the node's spots array
      for (Node n : nodes) {
        if (n.spots.size() > 0) {
          n.clearSpots();
        }
      }

      //find the nearest node for every spot
      for (Spot s : spots) {
        s.findNearest(nodes);
      }

      //compute the new position for the nodes based on their spots
      for (Node n : nodes) {
        if (n.spots.size() > 0) {
          n.update();
        }
      }

      //call the show function
      show();

      //break the loop if there's no spot
      if (numofspots == 0) {
        finished = true;
      }

    }
  }

  void show() {
    //canvas background
    background(255);

    //show the spots
    for (Spot s : spots) {
      s.show();
    }

    //show the nodes
    for (Node n : nodes) {
      n.show();
    }
  }

  class Spot {
    //Variables
    float x;
    float y;
    int r;
    Node node;

    Spot(float ix, float iy) {
      //x position
      x = ix;

      //y position
      y = iy;

      //radius
      r = 10;

      //reference to the node
      node = null;
    }

    void show() {
      //no Stroke
      noStroke();

      //fill with white
      fill(255);

      //if kmeans background is white fill the color of the node
      if (node != null) {
        color c = color(node.r, node.g, node.b);
        fill(c);
      };

      //draw this as a circle
      ellipse(x, y, r, r);

      // Lines to nodes
      if (node != null) {
        color c = color(node.r, node.g, node.b);
        stroke(c);
      };
      line(x, y, node.x, node.y);
    }

    void findNearest(ArrayList<Node> n) {
      //set max Distance to epic high value
      float maxD = 1000000000;
      //set winner to null
      Node winner = null;

      //loop through all of the nodes
      for (Node sn : n) {
        float d = dist(this.x, this.y, sn.x, sn.y);
        //if the distance is less tan the winner's set the node as the winner
        if (d < maxD) {
          maxD = d;
          winner = sn;
        }
      }
      //if there's a winner
      if (winner != null) {
        //reference this to the winner's node's
        winner.spots.add(this);
        //reference the winner node to this
        node = winner;
      }
    }
  }

  class Node {
    //Variables
    float x;
    float y;
    float r;
    float g;
    float b;
    int w;
    ArrayList<Spot> spots;
    Kmeans kmean;

    Node(float ir, float ig, float ib, Kmeans input_kmean) {
      //x position
      x = random(0, width);

      //y position
      y = random(0, height);

      //colors (r, g, b)
      r = ir;
      g = ig;
      b = ib;

      //radius
      w = 15;

      //array that holds the spots
      spots = new ArrayList<Spot>();

      //reference to the kmeans object
      kmean = input_kmean;
    }

    void show() {
      //draw the node
      strokeWeight(1.5);
      stroke(0);
      color c = color(this.r, this.g, this.b);
      fill(c);
      float x = this.x;
      float y = this.y;
      float xs = kmean.xs;
      float ys = kmean.ys;
      beginShape();
      vertex(x, y - ys);
      vertex(x + xs, y);
      vertex(x, y + ys);
      vertex(x - xs, y);
      endShape(CLOSE);
    }

    void update() {
      //declare sum variables
      float xsum = 0;
      float ysum = 0;

      //loop through all spots and sum up their x and y position
      for (Spot s : spots) {
        xsum += s.x;
        ysum += s.y;
      }

      //divide by the number of spots to recieve the average x and y position
      float nx = floor(xsum/spots.size());
      float ny = floor(ysum/spots.size());

      //if the new position is the actual position the algorithm has finished
      if (nx == x && ny == y) {
        kmean.finished = true;
      }

      //set the position of the node to the new position
      x = nx;
      y = ny;
    }

    void clearSpots() {
      spots = new ArrayList<Spot>();
    }
  }
}
