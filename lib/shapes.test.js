
// Jest tests for shapes!

const { Shape, Square, Circle, Triangle } = require('./shapes.js');
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");


describe("Square", () => {
    test("Test for a square, green fill, black 3w  outline", () => {
      const square = new Square();
      expect(square.makeSquare("green", "wow", "black")).toEqual(
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect x="70" y="20" width="160" height="160" fill="green"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">wow</text>
        </svg>`
      );
    });
  });

// describe("Square", () => {
//     it("Test for a square, green fill, black 3w  outline", () => {
//         const square = new Square();
//         const expectedSvg = `<rect fill="" x="70" y="20" width="160" height="160" stroke="black" stroke-width="3"/>`;
//         square.setColor("green")
//         const testSvg = square.render();
//         expect(testSvg).toEqual(expectedSvg);
//     });
// });


describe("Circle", () => {
    test("Test for a square, purple fill, black 3w outline", () => {
      const circle = new Circle();
      expect(circle.makeCircle("purple", "bby", "blue")).toEqual(
        `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
        
      <circle cx="150" cy="120" r="100" fill= "purple"/>
        
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">bby</text>
        
      </svg>`
      );
    });
  });

// describe("Circle", () => {
//     it("Test for a square, purple fill, black 3w outline", () => {
//         const circle = new Circle();
//         const expectedSvg = `<circle fill="green" cx="150" cy="120" r="100" stroke="black" stroke-width="3"/>`;
//         circle.setColor("purple")
//         const testSvg = circle.render();
//         expect(testSvg).toEqual(expectedSvg);
//     });
// });

describe("Triangle", () => {
    test("Test for a triangle, pink fill, black 3w outline", () => {
      const triangle = new Triangle();
      expect(triangle.makeTriangle("pink", "lol", "white")).toEqual(
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="pink"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">lol</text>
        </svg>`
      );
    });
  });

// describe("Triangle", () => {
//     it("Test for a triangle, pink fill, black 3w outline", () => {
//         const triangle = new Triangle();
//         const expectedSvg = `<polygon fill="pink" points="150, 18 244, 182 56, 182" />`;
//         triangle.setColor("pink")
//         const testSvg = triangle.render();
//         expect(testSvg).toEqual(expectedSvg);
//     });
// });

