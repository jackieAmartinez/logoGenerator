// Class: shape [constructor]
// Output: setColor function
// Affected classes: square, circle, triangle
class Shape {
    constructor(color, text, textColor) {
   
    this.color = color;
    this.text = text;
    this.textColor = textColor;
    }


    // setColor(colorVar) {
    //     this.color = colorVar;
    // }

    // setText(textVar) {
    //     this.text = textVar;
    // }

    // setTextColor(textColorVar) {
    //     this.textColor = textColorVar; 
    // }
    
};

// Class: square
// Return: shape, color 
// Inherited Properties: shape class
class Square extends Shape {
    makeSquare = (color, text, textColor) => {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect x="70" y="20" width="160" height="160" fill="${color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
    };
}

// class Square extends Shape {
//     render() {
//         return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" stroke="black" stroke-width="3"/>`;
//     }
// };

// Class: circle
// Return: shape, color 
// Inherited Properties: shape class

class Circle extends Shape {
    makeCircle = (color, text, textColor) => {
      return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          
          <circle cx="150" cy="120" r="100" fill= "${color}"/>
          
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          
          </svg>`;
    };
  }

// class Circle extends Shape {
//     render() {
//         return `<circle fill="${this.color}" cx="150" cy="120" r="100" stroke="black" stroke-width="3"/>`;
//     }
// };

// Class: triangle
// Return: shape, color 
// Inherited Properties: shape class

class Triangle extends Shape {
    makeTriangle = (color, text, textColor) => {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
    };
}

// class Triangle extends Shape {
//     render() {
//         return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" stroke="black" stroke-width="3"/>`;
//     }
// };


// Classes to be exported: shape, square, circle, and triangle
module.exports = { Shape, Triangle, Square, Circle };