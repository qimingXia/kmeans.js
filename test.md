<a name="Kmeans.module_js"></a>

## js
**Requires**: <code>module:p5.js</code>  
**Author**: Nico Finkernagel  
**License**: MIT  
**Copyright**: Nico Finkernagel 2018  

* [js](#Kmeans.module_js)
    * [~Kmeans](#Kmeans.module_js..Kmeans)
        * [.spots](#Kmeans.module_js..Kmeans+spots) : <code>Array</code>
        * [.nodes](#Kmeans.module_js..Kmeans+nodes) : <code>Array</code>
        * [.numofclusters](#Kmeans.module_js..Kmeans+numofclusters) : <code>Integer</code>
        * [.numofspots](#Kmeans.module_js..Kmeans+numofspots) : <code>Integer</code>
        * [.finished](#Kmeans.module_js..Kmeans+finished) : <code>Boolean</code>
        * [.background](#Kmeans.module_js..Kmeans+background) : <code>Integer</code>
    * [~Node](#Kmeans.module_js..Node)
        * [.x](#Kmeans.module_js..Node+x) : <code>Float</code>
        * [.y](#Kmeans.module_js..Node+y) : <code>Float</code>
        * [.r](#Kmeans.module_js..Node+r) : <code>Integer</code>
        * [.g](#Kmeans.module_js..Node+g) : <code>Integer</code>
        * [.b](#Kmeans.module_js..Node+b) : <code>Integer</code>
        * [.w](#Kmeans.module_js..Node+w) : <code>Integer</code>
        * [.spots](#Kmeans.module_js..Node+spots) : <code>Array</code>
        * [.kmean](#Kmeans.module_js..Node+kmean) : <code>Kmeans</code>
    * [~Spot](#Kmeans.module_js..Spot)
    * [~constructor(_numofclusters, _numofspots, _background)](#Kmeans.module_js..constructor)
    * [~init()](#Kmeans.module_js..init)
    * [~update()](#Kmeans.module_js..update)
    * [~show()](#Kmeans.module_js..show)
    * [~constructor(_r, _g, _b, _kmeans)](#Kmeans.module_js..constructor)
    * [~show()](#Kmeans.module_js..show)
    * [~update()](#Kmeans.module_js..update)
    * [~clearSpots()](#Kmeans.module_js..clearSpots)
    * [~show](#Kmeans.module_js..show) : <code>function</code>
    * [~update](#Kmeans.module_js..update) : <code>function</code>

<a name="Kmeans.module_js..Kmeans"></a>

### js~Kmeans
Kmeans

**Kind**: inner class of [<code>js</code>](#Kmeans.module_js)  
**Beta**:   
**Uses**: Spot  
**Uses**: Node  

* [~Kmeans](#Kmeans.module_js..Kmeans)
    * [.spots](#Kmeans.module_js..Kmeans+spots) : <code>Array</code>
    * [.nodes](#Kmeans.module_js..Kmeans+nodes) : <code>Array</code>
    * [.numofclusters](#Kmeans.module_js..Kmeans+numofclusters) : <code>Integer</code>
    * [.numofspots](#Kmeans.module_js..Kmeans+numofspots) : <code>Integer</code>
    * [.finished](#Kmeans.module_js..Kmeans+finished) : <code>Boolean</code>
    * [.background](#Kmeans.module_js..Kmeans+background) : <code>Integer</code>

<a name="Kmeans.module_js..Kmeans+spots"></a>

#### kmeans.spots : <code>Array</code>
Spots Array

**Kind**: instance property of [<code>Kmeans</code>](#Kmeans.module_js..Kmeans)  
**Default**: <code>[]</code>  
**Properties**

| Name |
| --- |
| spots | 

<a name="Kmeans.module_js..Kmeans+nodes"></a>

#### kmeans.nodes : <code>Array</code>
Nodes Array

**Kind**: instance property of [<code>Kmeans</code>](#Kmeans.module_js..Kmeans)  
**Default**: <code>[]</code>  
**Properties**

| Name |
| --- |
| nodes | 

<a name="Kmeans.module_js..Kmeans+numofclusters"></a>

#### kmeans.numofclusters : <code>Integer</code>
Number of Clusters, Nodes to be generated

**Kind**: instance property of [<code>Kmeans</code>](#Kmeans.module_js..Kmeans)  
**Default**: <code>0</code>  

| Param | Type |
| --- | --- |
| _numofclusters | <code>Integer</code> | 

**Properties**

| Name |
| --- |
| numofclusters | 

<a name="Kmeans.module_js..Kmeans+numofspots"></a>

#### kmeans.numofspots : <code>Integer</code>
Number of Spots, Spots to be generated

**Kind**: instance property of [<code>Kmeans</code>](#Kmeans.module_js..Kmeans)  
**Default**: <code>0</code>  

| Param | Type |
| --- | --- |
| _numofspots | <code>Integer</code> | 

**Properties**

| Name |
| --- |
| numofspots | 

<a name="Kmeans.module_js..Kmeans+finished"></a>

#### kmeans.finished : <code>Boolean</code>
If Value is true the Kmeans algorithm has finished

**Kind**: instance property of [<code>Kmeans</code>](#Kmeans.module_js..Kmeans)  
**Default**: <code>false</code>  
**Properties**

| Name |
| --- |
| finished | 

<a name="Kmeans.module_js..Kmeans+background"></a>

#### kmeans.background : <code>Integer</code>
Background color as a gray scale value

**Kind**: instance property of [<code>Kmeans</code>](#Kmeans.module_js..Kmeans)  
**Default**: <code>255</code>  

| Param | Type |
| --- | --- |
| _background | <code>Integer</code> | 

<a name="Kmeans.module_js..Node"></a>

### js~Node
Node

**Kind**: inner class of [<code>js</code>](#Kmeans.module_js)  
**Beta**:   

* [~Node](#Kmeans.module_js..Node)
    * [.x](#Kmeans.module_js..Node+x) : <code>Float</code>
    * [.y](#Kmeans.module_js..Node+y) : <code>Float</code>
    * [.r](#Kmeans.module_js..Node+r) : <code>Integer</code>
    * [.g](#Kmeans.module_js..Node+g) : <code>Integer</code>
    * [.b](#Kmeans.module_js..Node+b) : <code>Integer</code>
    * [.w](#Kmeans.module_js..Node+w) : <code>Integer</code>
    * [.spots](#Kmeans.module_js..Node+spots) : <code>Array</code>
    * [.kmean](#Kmeans.module_js..Node+kmean) : <code>Kmeans</code>

<a name="Kmeans.module_js..Node+x"></a>

#### node.x : <code>Float</code>
X Position

**Kind**: instance property of [<code>Node</code>](#Kmeans.module_js..Node)  
**Properties**

| Name |
| --- |
| x | 

<a name="Kmeans.module_js..Node+y"></a>

#### node.y : <code>Float</code>
Y Position

**Kind**: instance property of [<code>Node</code>](#Kmeans.module_js..Node)  
**Properties**

| Name |
| --- |
| y | 

<a name="Kmeans.module_js..Node+r"></a>

#### node.r : <code>Integer</code>
R - Value for Color

**Kind**: instance property of [<code>Node</code>](#Kmeans.module_js..Node)  
**Properties**

| Name |
| --- |
| r | 

<a name="Kmeans.module_js..Node+g"></a>

#### node.g : <code>Integer</code>
G - Value for Color

**Kind**: instance property of [<code>Node</code>](#Kmeans.module_js..Node)  
**Properties**

| Name |
| --- |
| g | 

<a name="Kmeans.module_js..Node+b"></a>

#### node.b : <code>Integer</code>
B - Value for Color

**Kind**: instance property of [<code>Node</code>](#Kmeans.module_js..Node)  
**Properties**

| Name |
| --- |
| b | 

<a name="Kmeans.module_js..Node+w"></a>

#### node.w : <code>Integer</code>
Radius for rendering

**Kind**: instance property of [<code>Node</code>](#Kmeans.module_js..Node)  
**Properties**

| Name |
| --- |
| w | 

<a name="Kmeans.module_js..Node+spots"></a>

#### node.spots : <code>Array</code>
Array that holds the Spots

**Kind**: instance property of [<code>Node</code>](#Kmeans.module_js..Node)  
**Properties**

| Name |
| --- |
| spots | 

<a name="Kmeans.module_js..Node+kmean"></a>

#### node.kmean : <code>Kmeans</code>
Reference to the parent Kmeans Object

**Kind**: instance property of [<code>Node</code>](#Kmeans.module_js..Node)  
**Properties**

| Name |
| --- |
| kmean | 

<a name="Kmeans.module_js..Spot"></a>

### js~Spot
Spot

**Kind**: inner class of [<code>js</code>](#Kmeans.module_js)  
**Beta**:   
<a name="Kmeans.module_js..constructor"></a>

### js~constructor(_numofclusters, _numofspots, _background)
Constructor

**Kind**: inner method of [<code>js</code>](#Kmeans.module_js)  

| Param | Type |
| --- | --- |
| _numofclusters | <code>Array</code> | 
| _numofspots | <code>Array</code> | 
| _background | <code>Integer</code> | 

<a name="Kmeans.module_js..init"></a>

### js~init()
This function initializes the Kmeans object. It generates the nodes & spots.

**Kind**: inner method of [<code>js</code>](#Kmeans.module_js)  
<a name="Kmeans.module_js..update"></a>

### js~update()
"Task Manager" for the Algoritm. The algoritm only runs if the Variable 'finished' is false

**Kind**: inner method of [<code>js</code>](#Kmeans.module_js)  
<a name="Kmeans.module_js..show"></a>

### js~show()
This function calls the show functions of the childs

**Kind**: inner method of [<code>js</code>](#Kmeans.module_js)  
<a name="Kmeans.module_js..constructor"></a>

### js~constructor(_r, _g, _b, _kmeans)
Constructor

**Kind**: inner method of [<code>js</code>](#Kmeans.module_js)  

| Param | Type | Description |
| --- | --- | --- |
| _r | <code>Integer</code> | R-Value for Color |
| _g | <code>Integer</code> | G-Value for Color |
| _b | <code>Integer</code> | B-Value for Color |
| _kmeans | <code>Kmeans</code> | Kmeans Parent |

<a name="Kmeans.module_js..show"></a>

### js~show()
Renders the Object with p5.js Methods

**Kind**: inner method of [<code>js</code>](#Kmeans.module_js)  
<a name="Kmeans.module_js..update"></a>

### js~update()
Main Kmeans Algoritm.

**Kind**: inner method of [<code>js</code>](#Kmeans.module_js)  
<a name="Kmeans.module_js..clearSpots"></a>

### js~clearSpots()
Clears the spots Array

**Kind**: inner method of [<code>js</code>](#Kmeans.module_js)  
<a name="Kmeans.module_js..show"></a>

### js~show : <code>function</code>
If this function is called it generates a new Node with random positions

**Kind**: inner typedef of [<code>js</code>](#Kmeans.module_js)  
<a name="Kmeans.module_js..update"></a>

### js~update : <code>function</code>
If this function is called new Spots will be generated

**Kind**: inner typedef of [<code>js</code>](#Kmeans.module_js)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Float</code> | x-position for the new Spot |
| y | <code>Float</code> | y-position for the new Spot |
| n | <code>Integer</code> | Optional: If this value is set, multiple Spots will generated with a random offset of the params x & y |

