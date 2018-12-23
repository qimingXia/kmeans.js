<a name="module_Kmeans.js"></a>

## Kmeans.js
**Requires**: <code>module:p5.js</code>  
**Author**: Nico Finkernagel  
**License**: MIT  
**Copyright**: Nico Finkernagel 2018  

* [Kmeans.js](#module_Kmeans.js)
    * [~Kmeans](#module_Kmeans.js..Kmeans)
        * [.spots](#module_Kmeans.js..Kmeans+spots) : <code>Array</code>
        * [.nodes](#module_Kmeans.js..Kmeans+nodes) : <code>Array</code>
        * [.numofclusters](#module_Kmeans.js..Kmeans+numofclusters) : <code>Integer</code>
        * [.numofspots](#module_Kmeans.js..Kmeans+numofspots) : <code>Integer</code>
        * [.finished](#module_Kmeans.js..Kmeans+finished) : <code>Boolean</code>
        * [.background](#module_Kmeans.js..Kmeans+background) : <code>Integer</code>
    * [~Node](#module_Kmeans.js..Node)
        * [.x](#module_Kmeans.js..Node+x) : <code>Float</code>
        * [.y](#module_Kmeans.js..Node+y) : <code>Float</code>
        * [.r](#module_Kmeans.js..Node+r) : <code>Integer</code>
        * [.g](#module_Kmeans.js..Node+g) : <code>Integer</code>
        * [.b](#module_Kmeans.js..Node+b) : <code>Integer</code>
        * [.w](#module_Kmeans.js..Node+w) : <code>Integer</code>
        * [.spots](#module_Kmeans.js..Node+spots) : <code>Array</code>
        * [.kmean](#module_Kmeans.js..Node+kmean) : <code>Kmeans</code>
    * [~Spot](#module_Kmeans.js..Spot)
    * [~constructor(_numofclusters, _numofspots, _background)](#module_Kmeans.js..constructor)
    * [~init()](#module_Kmeans.js..init)
    * [~update()](#module_Kmeans.js..update)
    * [~show()](#module_Kmeans.js..show)
    * [~constructor(_r, _g, _b, _kmeans)](#module_Kmeans.js..constructor)
    * [~show()](#module_Kmeans.js..show)
    * [~update()](#module_Kmeans.js..update)
    * [~clearSpots()](#module_Kmeans.js..clearSpots)
    * [~show](#module_Kmeans.js..show) : <code>function</code>
    * [~update](#module_Kmeans.js..update) : <code>function</code>

<a name="module_Kmeans.js..Kmeans"></a>

### Kmeans.js~Kmeans
Kmeans

**Kind**: inner class of [<code>Kmeans.js</code>](#module_Kmeans.js)  
**Beta**:   
**Uses**: Spot  
**Uses**: Node  

* [~Kmeans](#module_Kmeans.js..Kmeans)
    * [.spots](#module_Kmeans.js..Kmeans+spots) : <code>Array</code>
    * [.nodes](#module_Kmeans.js..Kmeans+nodes) : <code>Array</code>
    * [.numofclusters](#module_Kmeans.js..Kmeans+numofclusters) : <code>Integer</code>
    * [.numofspots](#module_Kmeans.js..Kmeans+numofspots) : <code>Integer</code>
    * [.finished](#module_Kmeans.js..Kmeans+finished) : <code>Boolean</code>
    * [.background](#module_Kmeans.js..Kmeans+background) : <code>Integer</code>

<a name="module_Kmeans.js..Kmeans+spots"></a>

#### kmeans.spots : <code>Array</code>
Spots Array

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans.js..Kmeans)  
**Default**: <code>[]</code>  
**Properties**

| Name |
| --- |
| spots | 

<a name="module_Kmeans.js..Kmeans+nodes"></a>

#### kmeans.nodes : <code>Array</code>
Nodes Array

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans.js..Kmeans)  
**Default**: <code>[]</code>  
**Properties**

| Name |
| --- |
| nodes | 

<a name="module_Kmeans.js..Kmeans+numofclusters"></a>

#### kmeans.numofclusters : <code>Integer</code>
Number of Clusters, Nodes to be generated

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans.js..Kmeans)  
**Default**: <code>0</code>  

| Param | Type |
| --- | --- |
| _numofclusters | <code>Integer</code> | 

**Properties**

| Name |
| --- |
| numofclusters | 

<a name="module_Kmeans.js..Kmeans+numofspots"></a>

#### kmeans.numofspots : <code>Integer</code>
Number of Spots, Spots to be generated

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans.js..Kmeans)  
**Default**: <code>0</code>  

| Param | Type |
| --- | --- |
| _numofspots | <code>Integer</code> | 

**Properties**

| Name |
| --- |
| numofspots | 

<a name="module_Kmeans.js..Kmeans+finished"></a>

#### kmeans.finished : <code>Boolean</code>
If Value is true the Kmeans algorithm has finished

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans.js..Kmeans)  
**Default**: <code>false</code>  
**Properties**

| Name |
| --- |
| finished | 

<a name="module_Kmeans.js..Kmeans+background"></a>

#### kmeans.background : <code>Integer</code>
Background color as a gray scale value

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans.js..Kmeans)  
**Default**: <code>255</code>  

| Param | Type |
| --- | --- |
| _background | <code>Integer</code> | 

<a name="module_Kmeans.js..Node"></a>

### Kmeans.js~Node
Node

**Kind**: inner class of [<code>Kmeans.js</code>](#module_Kmeans.js)  
**Beta**:   

* [~Node](#module_Kmeans.js..Node)
    * [.x](#module_Kmeans.js..Node+x) : <code>Float</code>
    * [.y](#module_Kmeans.js..Node+y) : <code>Float</code>
    * [.r](#module_Kmeans.js..Node+r) : <code>Integer</code>
    * [.g](#module_Kmeans.js..Node+g) : <code>Integer</code>
    * [.b](#module_Kmeans.js..Node+b) : <code>Integer</code>
    * [.w](#module_Kmeans.js..Node+w) : <code>Integer</code>
    * [.spots](#module_Kmeans.js..Node+spots) : <code>Array</code>
    * [.kmean](#module_Kmeans.js..Node+kmean) : <code>Kmeans</code>

<a name="module_Kmeans.js..Node+x"></a>

#### node.x : <code>Float</code>
X Position

**Kind**: instance property of [<code>Node</code>](#module_Kmeans.js..Node)  
**Properties**

| Name |
| --- |
| x | 

<a name="module_Kmeans.js..Node+y"></a>

#### node.y : <code>Float</code>
Y Position

**Kind**: instance property of [<code>Node</code>](#module_Kmeans.js..Node)  
**Properties**

| Name |
| --- |
| y | 

<a name="module_Kmeans.js..Node+r"></a>

#### node.r : <code>Integer</code>
R - Value for Color

**Kind**: instance property of [<code>Node</code>](#module_Kmeans.js..Node)  
**Properties**

| Name |
| --- |
| r | 

<a name="module_Kmeans.js..Node+g"></a>

#### node.g : <code>Integer</code>
G - Value for Color

**Kind**: instance property of [<code>Node</code>](#module_Kmeans.js..Node)  
**Properties**

| Name |
| --- |
| g | 

<a name="module_Kmeans.js..Node+b"></a>

#### node.b : <code>Integer</code>
B - Value for Color

**Kind**: instance property of [<code>Node</code>](#module_Kmeans.js..Node)  
**Properties**

| Name |
| --- |
| b | 

<a name="module_Kmeans.js..Node+w"></a>

#### node.w : <code>Integer</code>
Radius for rendering

**Kind**: instance property of [<code>Node</code>](#module_Kmeans.js..Node)  
**Properties**

| Name |
| --- |
| w | 

<a name="module_Kmeans.js..Node+spots"></a>

#### node.spots : <code>Array</code>
Array that holds the Spots

**Kind**: instance property of [<code>Node</code>](#module_Kmeans.js..Node)  
**Properties**

| Name |
| --- |
| spots | 

<a name="module_Kmeans.js..Node+kmean"></a>

#### node.kmean : <code>Kmeans</code>
Reference to the parent Kmeans Object

**Kind**: instance property of [<code>Node</code>](#module_Kmeans.js..Node)  
**Properties**

| Name |
| --- |
| kmean | 

<a name="module_Kmeans.js..Spot"></a>

### Kmeans.js~Spot
Spot

**Kind**: inner class of [<code>Kmeans.js</code>](#module_Kmeans.js)  
**Beta**:   
<a name="module_Kmeans.js..constructor"></a>

### Kmeans.js~constructor(_numofclusters, _numofspots, _background)
Constructor

**Kind**: inner method of [<code>Kmeans.js</code>](#module_Kmeans.js)  

| Param | Type |
| --- | --- |
| _numofclusters | <code>Array</code> | 
| _numofspots | <code>Array</code> | 
| _background | <code>Integer</code> | 

<a name="module_Kmeans.js..init"></a>

### Kmeans.js~init()
This function initializes the Kmeans object. It generates the nodes & spots.

**Kind**: inner method of [<code>Kmeans.js</code>](#module_Kmeans.js)  
<a name="module_Kmeans.js..update"></a>

### Kmeans.js~update()
"Task Manager" for the Algoritm. The algoritm only runs if the Variable 'finished' is false

**Kind**: inner method of [<code>Kmeans.js</code>](#module_Kmeans.js)  
<a name="module_Kmeans.js..show"></a>

### Kmeans.js~show()
This function calls the show functions of the childs

**Kind**: inner method of [<code>Kmeans.js</code>](#module_Kmeans.js)  
<a name="module_Kmeans.js..constructor"></a>

### Kmeans.js~constructor(_r, _g, _b, _kmeans)
Constructor

**Kind**: inner method of [<code>Kmeans.js</code>](#module_Kmeans.js)  

| Param | Type | Description |
| --- | --- | --- |
| _r | <code>Integer</code> | R-Value for Color |
| _g | <code>Integer</code> | G-Value for Color |
| _b | <code>Integer</code> | B-Value for Color |
| _kmeans | <code>Kmeans</code> | Kmeans Parent |

<a name="module_Kmeans.js..show"></a>

### Kmeans.js~show()
Renders the Object with p5.js Methods

**Kind**: inner method of [<code>Kmeans.js</code>](#module_Kmeans.js)  
<a name="module_Kmeans.js..update"></a>

### Kmeans.js~update()
Main Kmeans Algoritm.

**Kind**: inner method of [<code>Kmeans.js</code>](#module_Kmeans.js)  
<a name="module_Kmeans.js..clearSpots"></a>

### Kmeans.js~clearSpots()
Clears the spots Array

**Kind**: inner method of [<code>Kmeans.js</code>](#module_Kmeans.js)  
<a name="module_Kmeans.js..show"></a>

### Kmeans.js~show : <code>function</code>
If this function is called it generates a new Node with random positions

**Kind**: inner typedef of [<code>Kmeans.js</code>](#module_Kmeans.js)  
<a name="module_Kmeans.js..update"></a>

### Kmeans.js~update : <code>function</code>
If this function is called new Spots will be generated

**Kind**: inner typedef of [<code>Kmeans.js</code>](#module_Kmeans.js)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Float</code> | x-position for the new Spot |
| y | <code>Float</code> | y-position for the new Spot |
| n | <code>Integer</code> | Optional: If this value is set, multiple Spots will generated with a random offset of the params x & y |

