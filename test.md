<a name="module_Kmeans Library"></a>

## Kmeans Library
**Requires**: <code>module:p5.js</code>  
**Author**: Nico Finkernagel  
**License**: MIT  
**Copyright**: Nico Finkernagel 2018  

* [Kmeans Library](#module_Kmeans Library)
    * [~Kmeans](#module_Kmeans Library..Kmeans)
        * [.spots](#module_Kmeans Library..Kmeans+spots) : <code>Array</code>
        * [.nodes](#module_Kmeans Library..Kmeans+nodes) : <code>Array</code>
        * [.numofclusters](#module_Kmeans Library..Kmeans+numofclusters) : <code>Integer</code>
        * [.numofspots](#module_Kmeans Library..Kmeans+numofspots) : <code>Integer</code>
        * [.finished](#module_Kmeans Library..Kmeans+finished) : <code>Boolean</code>
        * [.background](#module_Kmeans Library..Kmeans+background) : <code>Integer</code>
    * [~Node](#module_Kmeans Library..Node)
        * [.x](#module_Kmeans Library..Node+x) : <code>Float</code>
        * [.y](#module_Kmeans Library..Node+y) : <code>Float</code>
        * [.r](#module_Kmeans Library..Node+r) : <code>Integer</code>
        * [.g](#module_Kmeans Library..Node+g) : <code>Integer</code>
        * [.b](#module_Kmeans Library..Node+b) : <code>Integer</code>
        * [.w](#module_Kmeans Library..Node+w) : <code>Integer</code>
        * [.spots](#module_Kmeans Library..Node+spots) : <code>Array</code>
        * [.kmean](#module_Kmeans Library..Node+kmean) : <code>Kmeans</code>
    * [~Spot](#module_Kmeans Library..Spot)
    * [~constructor(_numofclusters, _numofspots, _background)](#module_Kmeans Library..constructor)
    * [~init()](#module_Kmeans Library..init)
    * [~update()](#module_Kmeans Library..update)
    * [~show()](#module_Kmeans Library..show)
    * [~constructor(_r, _g, _b, _kmeans)](#module_Kmeans Library..constructor)
    * [~show()](#module_Kmeans Library..show)
    * [~update()](#module_Kmeans Library..update)
    * [~clearSpots()](#module_Kmeans Library..clearSpots)
    * [~show](#module_Kmeans Library..show) : <code>function</code>
    * [~update](#module_Kmeans Library..update) : <code>function</code>

<a name="module_Kmeans Library..Kmeans"></a>

### Kmeans Library~Kmeans
Kmeans

**Kind**: inner class of [<code>Kmeans Library</code>](#module_Kmeans Library)  
**Beta**:   
**Uses**: Spot  
**Uses**: Node  

* [~Kmeans](#module_Kmeans Library..Kmeans)
    * [.spots](#module_Kmeans Library..Kmeans+spots) : <code>Array</code>
    * [.nodes](#module_Kmeans Library..Kmeans+nodes) : <code>Array</code>
    * [.numofclusters](#module_Kmeans Library..Kmeans+numofclusters) : <code>Integer</code>
    * [.numofspots](#module_Kmeans Library..Kmeans+numofspots) : <code>Integer</code>
    * [.finished](#module_Kmeans Library..Kmeans+finished) : <code>Boolean</code>
    * [.background](#module_Kmeans Library..Kmeans+background) : <code>Integer</code>

<a name="module_Kmeans Library..Kmeans+spots"></a>

#### kmeans.spots : <code>Array</code>
Spots Array

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans Library..Kmeans)  
**Default**: <code>[]</code>  
**Properties**

| Name |
| --- |
| spots | 

<a name="module_Kmeans Library..Kmeans+nodes"></a>

#### kmeans.nodes : <code>Array</code>
Nodes Array

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans Library..Kmeans)  
**Default**: <code>[]</code>  
**Properties**

| Name |
| --- |
| nodes | 

<a name="module_Kmeans Library..Kmeans+numofclusters"></a>

#### kmeans.numofclusters : <code>Integer</code>
Number of Clusters, Nodes to be generated

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans Library..Kmeans)  
**Default**: <code>0</code>  

| Param | Type |
| --- | --- |
| _numofclusters | <code>Integer</code> | 

**Properties**

| Name |
| --- |
| numofclusters | 

<a name="module_Kmeans Library..Kmeans+numofspots"></a>

#### kmeans.numofspots : <code>Integer</code>
Number of Spots, Spots to be generated

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans Library..Kmeans)  
**Default**: <code>0</code>  

| Param | Type |
| --- | --- |
| _numofspots | <code>Integer</code> | 

**Properties**

| Name |
| --- |
| numofspots | 

<a name="module_Kmeans Library..Kmeans+finished"></a>

#### kmeans.finished : <code>Boolean</code>
If Value is true the Kmeans algorithm has finished

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans Library..Kmeans)  
**Default**: <code>false</code>  
**Properties**

| Name |
| --- |
| finished | 

<a name="module_Kmeans Library..Kmeans+background"></a>

#### kmeans.background : <code>Integer</code>
Background color as a gray scale value

**Kind**: instance property of [<code>Kmeans</code>](#module_Kmeans Library..Kmeans)  
**Default**: <code>255</code>  

| Param | Type |
| --- | --- |
| _background | <code>Integer</code> | 

<a name="module_Kmeans Library..Node"></a>

### Kmeans Library~Node
Node

**Kind**: inner class of [<code>Kmeans Library</code>](#module_Kmeans Library)  
**Beta**:   

* [~Node](#module_Kmeans Library..Node)
    * [.x](#module_Kmeans Library..Node+x) : <code>Float</code>
    * [.y](#module_Kmeans Library..Node+y) : <code>Float</code>
    * [.r](#module_Kmeans Library..Node+r) : <code>Integer</code>
    * [.g](#module_Kmeans Library..Node+g) : <code>Integer</code>
    * [.b](#module_Kmeans Library..Node+b) : <code>Integer</code>
    * [.w](#module_Kmeans Library..Node+w) : <code>Integer</code>
    * [.spots](#module_Kmeans Library..Node+spots) : <code>Array</code>
    * [.kmean](#module_Kmeans Library..Node+kmean) : <code>Kmeans</code>

<a name="module_Kmeans Library..Node+x"></a>

#### node.x : <code>Float</code>
X Position

**Kind**: instance property of [<code>Node</code>](#module_Kmeans Library..Node)  
**Properties**

| Name |
| --- |
| x | 

<a name="module_Kmeans Library..Node+y"></a>

#### node.y : <code>Float</code>
Y Position

**Kind**: instance property of [<code>Node</code>](#module_Kmeans Library..Node)  
**Properties**

| Name |
| --- |
| y | 

<a name="module_Kmeans Library..Node+r"></a>

#### node.r : <code>Integer</code>
R - Value for Color

**Kind**: instance property of [<code>Node</code>](#module_Kmeans Library..Node)  
**Properties**

| Name |
| --- |
| r | 

<a name="module_Kmeans Library..Node+g"></a>

#### node.g : <code>Integer</code>
G - Value for Color

**Kind**: instance property of [<code>Node</code>](#module_Kmeans Library..Node)  
**Properties**

| Name |
| --- |
| g | 

<a name="module_Kmeans Library..Node+b"></a>

#### node.b : <code>Integer</code>
B - Value for Color

**Kind**: instance property of [<code>Node</code>](#module_Kmeans Library..Node)  
**Properties**

| Name |
| --- |
| b | 

<a name="module_Kmeans Library..Node+w"></a>

#### node.w : <code>Integer</code>
Radius for rendering

**Kind**: instance property of [<code>Node</code>](#module_Kmeans Library..Node)  
**Properties**

| Name |
| --- |
| w | 

<a name="module_Kmeans Library..Node+spots"></a>

#### node.spots : <code>Array</code>
Array that holds the Spots

**Kind**: instance property of [<code>Node</code>](#module_Kmeans Library..Node)  
**Properties**

| Name |
| --- |
| spots | 

<a name="module_Kmeans Library..Node+kmean"></a>

#### node.kmean : <code>Kmeans</code>
Reference to the parent Kmeans Object

**Kind**: instance property of [<code>Node</code>](#module_Kmeans Library..Node)  
**Properties**

| Name |
| --- |
| kmean | 

<a name="module_Kmeans Library..Spot"></a>

### Kmeans Library~Spot
Spot

**Kind**: inner class of [<code>Kmeans Library</code>](#module_Kmeans Library)  
**Beta**:   
<a name="module_Kmeans Library..constructor"></a>

### Kmeans Library~constructor(_numofclusters, _numofspots, _background)
Constructor

**Kind**: inner method of [<code>Kmeans Library</code>](#module_Kmeans Library)  

| Param | Type |
| --- | --- |
| _numofclusters | <code>Array</code> | 
| _numofspots | <code>Array</code> | 
| _background | <code>Integer</code> | 

<a name="module_Kmeans Library..init"></a>

### Kmeans Library~init()
This function initializes the Kmeans object. It generates the nodes & spots.

**Kind**: inner method of [<code>Kmeans Library</code>](#module_Kmeans Library)  
<a name="module_Kmeans Library..update"></a>

### Kmeans Library~update()
"Task Manager" for the Algoritm. The algoritm only runs if the Variable 'finished' is false

**Kind**: inner method of [<code>Kmeans Library</code>](#module_Kmeans Library)  
<a name="module_Kmeans Library..show"></a>

### Kmeans Library~show()
This function calls the show functions of the childs

**Kind**: inner method of [<code>Kmeans Library</code>](#module_Kmeans Library)  
<a name="module_Kmeans Library..constructor"></a>

### Kmeans Library~constructor(_r, _g, _b, _kmeans)
Constructor

**Kind**: inner method of [<code>Kmeans Library</code>](#module_Kmeans Library)  

| Param | Type | Description |
| --- | --- | --- |
| _r | <code>Integer</code> | R-Value for Color |
| _g | <code>Integer</code> | G-Value for Color |
| _b | <code>Integer</code> | B-Value for Color |
| _kmeans | <code>Kmeans</code> | Kmeans Parent |

<a name="module_Kmeans Library..show"></a>

### Kmeans Library~show()
Renders the Object with p5.js Methods

**Kind**: inner method of [<code>Kmeans Library</code>](#module_Kmeans Library)  
<a name="module_Kmeans Library..update"></a>

### Kmeans Library~update()
Main Kmeans Algoritm.

**Kind**: inner method of [<code>Kmeans Library</code>](#module_Kmeans Library)  
<a name="module_Kmeans Library..clearSpots"></a>

### Kmeans Library~clearSpots()
Clears the spots Array

**Kind**: inner method of [<code>Kmeans Library</code>](#module_Kmeans Library)  
<a name="module_Kmeans Library..show"></a>

### Kmeans Library~show : <code>function</code>
If this function is called it generates a new Node with random positions

**Kind**: inner typedef of [<code>Kmeans Library</code>](#module_Kmeans Library)  
<a name="module_Kmeans Library..update"></a>

### Kmeans Library~update : <code>function</code>
If this function is called new Spots will be generated

**Kind**: inner typedef of [<code>Kmeans Library</code>](#module_Kmeans Library)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Float</code> | x-position for the new Spot |
| y | <code>Float</code> | y-position for the new Spot |
| n | <code>Integer</code> | Optional: If this value is set, multiple Spots will generated with a random offset of the params x & y |

