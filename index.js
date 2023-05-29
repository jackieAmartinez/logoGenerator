
// runs the application using imports from lib/!
const { Square, Circle, Triangle } = require("./lib/shapes.js");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// const responses = await import('./shapes.test.js');


function whoThatShape() {
    inquirer
        .prompt([
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
                message: "Okay, and what she got to say?",
                validate: function (answer) {
                    if (answer.length < 3) {
                        return console.log("No more than 3 letters, plz + ty!");
                    }
                    return true;
                }
            },
            {
                type: "list",
                name: "promptTextColor",
                message: "And for the final razzle dazzle?",
                choices: ["Magenta", "Pink", "Fuschia", "White"]
            },
        ])
        .then((responses) => {
            let newShape = answers.shape;
            let newColor = answers.color;
            let newText = answers.text;
            let newTextColor = answers.textColor;
            console.log(newShape, newColor, newText, newTextColor);

            if (newShape == "Circle") {
                const circle = new Circle(newColor, newText, newTextColor);
                const output = circle.makeCircle(circle.color, circle.text, circle.textColor);
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

// Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/jacquelinemartinez/Desktop/Bootcamp-Downloads/challenge-10/node_modules/inquirer/lib/inquirer.js from /Users/jacquelinemartinez/Desktop/Bootcamp-Downloads/challenge-10/index.js not supported.

// Instead change the require of inquirer.js in /Users/jacquelinemartinez/Desktop/Bootcamp-Downloads/challenge-10/index.js to a dynamic import() which is available in all CommonJS modules.