// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor({length, width, height}) {
        this.length = length;
        this.width = width ? width : length;
        this.height = height ? height : length;
    }
    volume() {
        return (this.length * this.width * this.height);
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5})
console.log(cuboid);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


/*
I'm not quite sure why Cubes are sub classes of Cuboids. It makes sense in theory, but . . .
Cubes only need one side length(instead of length, width, and height).
The comment above is also asking us to rewrite our own methods.
So we're not really inheriting anything from the CuboidMaker at all...
How can we make the Cube class extend from the Cuboid class while STILL ENSURING that Cubes are Cubes?
  If someone tries to create a cube with different lengths and widths, we don't want those values to get stored via the Cuboid class.
*/

/*
SOLUTION: Desctructure the class parameters:
The CuboidMaker now accepts '{length, width, height}' as opposed to simply 'attr'
  If there is no width or height given, then those values = the length value
Our CubeMaker class now ONLY accepts a length property. It then sends this length property to CuboidMaker.
This means, if we accidentally input a width or height for a cube, they will not be added in as values.
Instead, the cube created will ONLY have the length value for all three sides.

For the methods, I simply added two new methods that have a Q after the name for 'cube'. 
For cubes, 'volume()' = 'volumeQ()' and 'surfaceArea()' = 'surfaceAreaQ()'
The math, however takes slightly different inputs.
*/

class CubeMaker extends CuboidMaker {
    constructor({length}) {
        super({length});
    }
    volumeQ() {
        return Math.pow(this.length, 3);
    }
    surfaceAreaQ() {
        return 6 * Math.pow(this.length, 2);
    }
}

const cube = new CubeMaker({length: 5, width: 17, height: 0.5}) // everything but length is irrelevant!
console.log(cube);
console.log(cube.volume());  // 125
console.log(cube.volumeQ()); // 125
console.log(cube.surfaceArea());  // 150
console.log(cube.surfaceAreaQ()); // 150