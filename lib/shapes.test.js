
// Jest tests for shapes!

const { Square, Circle, Triangle } = require('./shapes');

describe("Square", () => {
    it("Test for a square, green fill, black 3w  outline", () => {
        const square = new Square();
        const expectedSvg = `<rect fill="" x="70" y="20" width="160" height="160" stroke="black" stroke-width="3"/>`;
        square.setColor("green")
        const testSvg = square.render();
        expect(testSvg).toEqual(expectedSvg);
    });
});

describe("Circle", () => {
    it("Test for a square, purple fill, black 3w outline", () => {
        const circle = new Circle();
        const expectedSvg = `<circle fill="green" cx="150" cy="120" r="100" stroke="black" stroke-width="3"/>`;
        circle.setColor("purple")
        const testSvg = circle.render();
        expect(testSvg).toEqual(expectedSvg);
    });
});

describe("Triangle", () => {
    it("Test for a triangle, pink fill, black 3w outline", () => {
        const triangle = new Triangle();
        const expectedSvg = `<polygon fill="pink" points="150, 18 244, 182 56, 182" />`;
        triangle.setColor("pink")
        const testSvg = triangle.render();
        expect(testSvg).toEqual(expectedSvg);
    });
});