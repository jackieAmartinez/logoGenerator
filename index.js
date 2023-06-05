
// runs the application using imports from lib/!
const { Shape, Square, Circle, Triangle } = require("./lib/shapes.js");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// const responses = await import('./shapes.test.js');


function whoThatShape() {
    inquirer.prompt([
            {
                type: "list",
                name: "promptShape",
                message: "What shape she serving?",
                choices: ["Square", "Circle", "Triangle"],
            },
            {
                type: "list",
                name: "promptShapeColor",
                message: "Now what color is she serving?",
                choices: ["Magenta", "Pink", "Fuschia", "White"]
            },
            {
                type: "input",
                name: "promptText",
                message: "Okay, and what she got to say?"
            },
            {
                type: "list",
                name: "promptTextColor",
                message: "And for the final razzle dazzle?",
                choices: ["Magenta", "Pink", "Fuschia", "White"]
            },
        ])
        .then((answers) => {
            // match shapes with shapes
            let newShape = answers.promptShape;
            let newColor = answers.promptShapeColor;
            let newText = answers.promptText;
            let newTextColor = answers.promptTextColor;
            console.log(newShape, newColor, newText, newTextColor);

            if (newShape == "Circle") {
                const circle = new Circle(newColor, newText, newTextColor);
                const output = circle.makeCircle(
                    circle.color,
                    circle.text,
                    circle.textColor);
                console.log(output);
                fs.writeFile(`./examples/CIR:${newText}.svg`, output, (err) =>
                    err ? console.log(err) : console.log('You did it! GO LOOK AT YOUR CIRCLE!')
                );
            }
            else if (newShape == "Square") {
                const square = new Square(newColor, newText, newTextColor);
                const output = square.makeSquare(square.color, square.text, square.textColor);
                console.log(output);
                fs.writeFile(`./examples/SQ:${newText}.svg`, output, (err) =>
                    err ? console.log(err) : console.log('You did it! GO LOOK AT YOUR SQUARE!')
                );
            }
            else if (newShape == "Triangle") {
                const triangle = new Triangle(newColor, newText, newTextColor);
                const output = triangle.makeTriangle(triangle.color, triangle.text, triangle.textColor);
                console.log(output);
                fs.writeFile(`./examples/TRI:${newText}.svg`, output, (err) =>
                    err ? console.log(err) : console.log('You did it! GO LOOK AT YOUR TRIANGLE!')
                );
            }

        });
}

whoThatShape();

// Instead change the require of inquirer.js in /Users/jacquelinemartinez/Desktop/Bootcamp-Downloads/challenge-10/index.js to a dynamic import() which is available in all CommonJS modules.

// Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/jacquelinemartinez/Desktop/Bootcamp-Downloads/challenge-10/node_modules/inquirer/lib/inquirer.js from /Users/jacquelinemartinez/Desktop/Bootcamp-Downloads/challenge-10/index.js not supported.