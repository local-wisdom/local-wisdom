---
title: 'Vectorious'
date: '2015-11-24'
lat: 51.1171140
lng: 56.1171140
author: 'Ramon Gebben'
header: 'http://i.imgur.com/Ex08W0g.jpg'
shop: Daily Javascript
avatar: 'http://i.imgur.com/UBLi3O3.jpg'
template: article.jade
---

Vectorious (GitHub: [mateogianolio/vectorious](https://github.com/mateogianolio/vectorious), License: MIT, npm: vectorious)


Vectorious is a high performance linear algebra library written in Javascript.
It is available via npm or just as a script so you can include it on your page.

Since I'm not a mathematician and did not do a lot of linear algebra, you will have to bare with me.
I will try to give you a good description of what this library can do.

It has two mayor API endpoints to work with: `Matrix` and `Vector`.
The constructor functions for both these functions can be called with a range of different arguments.
Since 2.1.0 Vector implements [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) for increased performance. The default Vector type is Float64Array, but this can be specified upon creation.

We would work with it like so:

```javascript
import { Vector, Matrix } from 'vectorious';

let vector, matrix;

// Create an empty vector of default type Float64Array
vector = new Vector();
/* Vector { type: [Function: Float64Array], length: 0 } */

// Create an empty vector of type Uint8Array
vector = new Vector(Uint8Array);
/* Vector { type: [Function: Uint8Array], length: 0 } */

matrix = new Matrix();
/* Matrix { type: [Function: Float64Array], shape: [] } */

vector = Vector.zeros(5);
/* Vector {
  type: [Function: Float64Array],
  length: 5,
  buffer: ArrayBuffer {},
  values: Float64Array { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0 } } */

vector = new Vector(1, 2, 3, 4, 5);
/* Vector {
  type: [Function: Float64Array],
  length: 5,
  buffer: ArrayBuffer {},
  values: Float64Array { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } } */

matrix = new Matrix(vector);
/* Matrix {
  type: [Function: Float64Array],
  shape: [ 5, 1 ],
  data: Float64Array { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } } */

matrix = Matrix.zeros(2, 2);
/* Matrix {
  shape: [ 2, 2 ],
  data: Float64Array { '0': 0, '1': 0, '2': 0, '3': 0 },
  type: [Function: Float64Array] } */

```

The developer posted an example of how you would map a time range over a sinus.

```javascript
var time = Vector.range(0, Math.PI / 12, Math.PI);
// Which will return
/* Vector {
  type: [Function: Float64Array],
  length: 12,
  buffer: ArrayBuffer {},
  values:
   Float64Array {
     '0': 0,
     '1': 0.2617993877991494,
     '2': 0.5235987755982988,
     '3': 0.7853981633974483,
     '4': 1.0471975511965976,
     '5': 1.308996938995747,
     '6': 1.5707963267948963,
     '7': 1.8325957145940457,
     '8': 2.0943951023931953,
     '9': 2.356194490192345,
     '10': 2.6179938779914944,
     '11': 2.879793265790644 } } */

var sine = time.map(Math.sin);
// Which will return
/* Vector {
  type: [Function: Float64Array],
  length: 12,
  buffer: ArrayBuffer {},
  values:
   Float64Array {
     '0': 0,
     '1': 0.25881904510252074,
     '2': 0.49999999999999994,
     '3': 0.7071067811865475,
     '4': 0.8660254037844386,
     '5': 0.9659258262890682,
     '6': 1,
     '7': 0.9659258262890684,
     '8': 0.8660254037844387,
     '9': 0.7071067811865476,
     '10': 0.49999999999999994,
     '11': 0.2588190451025206 } } */

```

Besides the very extensive API it also accommodates extentions such as [Solve](https://github.com/mateogianolio/vectorious-solve) and [Plot](https://github.com/mateogianolio/vectorious-plot).
Plot for instance can be used to a two-dimensional SVG plot from two input vectors.
