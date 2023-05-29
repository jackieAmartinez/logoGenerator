// Class: shape [constructor]
// Output: setColor function
// Affected classes: square, circle, triangle
class Shape {
    constructor() {
        this.color = "COLOR";
        this.text = "TEXT"
        this.textColor = "TEXTCOLOR"
    }
    setColor(colorVar) {
        this.color = colorVar;
    }

    setText(textVar) {
        this.text = textVar;
    }

    setTextColor(textColorVar) {
        this.textColor = textColorVar; 
    }
    
}

// Class: square
// Return: shape, color 
// Inherited Properties: shape class
class Square extends Shape {
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" stroke="black" stroke-width="3"/>`;
    }
}

// Class: circle
// Return: shape, color 
// Inherited Properties: shape class
class Circle extends Shape {
    render() {
        return `<circle fill="${this.color}" cx="150" cy="120" r="100" stroke="black" stroke-width="3"/>`;
    }
}

// Class: triangle
// Return: shape, color 
// Inherited Properties: shape class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" stroke="black" stroke-width="3"/>`;
    }
}


// Classes to be exported: shape, square, circle, and triangle
module.exports = { Shape, Triangle, Square, Circle }