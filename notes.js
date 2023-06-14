const inquirer = require('inquirer');
const fs = require('fs');


// Define the questions for the user
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function (input) {
      return input.length <= 3 || 'Please enter up to three characters.';
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  },
];

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;

  // Generate the SVG markup
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <${shape} fill="${shapeColor}" cx="150" cy="100" r="50"/>
    <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
  </svg>`;

  const test = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle fill="green" cx="150" cy="100" r="50"/><text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="white">GMB</text>
</svg>`

  // Save the SVG to a file
  fs.writeFile('logo.svg', svgMarkup, err => {
    if (err) {
      console.error('Error saving SVG:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
});
//--------------------------------------------------------------------------------------------------------
class SVGGenerator {
  constructor(width = 300, height = 200) {
    this.width = width;
    this.height = height;
    this.elements = [];
  }

  addShape(shapeType, shapeColor) {
    this.elements.push({
      type: shapeType,
      color: shapeColor,
    });
  }

  addText(text, textColor) {
    this.elements.push({
      type: 'text',
      content: text,
      color: textColor,
    });
  }

  generateSVG() {
    let svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">`;

    for (const element of this.elements) {
      if (element.type === 'text') {
        svgMarkup += `<text x="${this.width / 2}" y="${this.height / 2}" text-anchor="middle" fill="${element.color}">${element.content}</text>`;
      } else {
        svgMarkup += `<${element.type} fill="${element.color}" cx="${this.width / 2}" cy="${this.height / 2}" r="${this.height / 4}"/>`;
      }
    }

    svgMarkup += `</svg>`;
    return svgMarkup;
  }
}

const svgGenerator = new SVGGenerator();

svgGenerator.addShape('circle', 'red');
svgGenerator.addText('Hello SVG!', 'blue');

const svgMarkup = svgGenerator.generateSVG();
console.log(svgMarkup);

/**
SVG (Scalable Vector Graphics) supports a variety of shapes. The most basic shapes available in SVG are:
 rect: Defines a rectangle. Can also be used to define a square if height and width are the same.

Example:
svg
<rect x="10" y="10" width="100" height="100" fill="blue" />

circle: Defines a circle.
Example:
svg
<circle cx="60" cy="60" r="50" fill="red" />

ellipse: Defines an ellipse.
Example:
svg
<ellipse cx="120" cy="120" rx="100" ry="50" fill="green" />

line: Defines a line.
Example:
svg
<line x1="0" y1="0" x2="200" y2="200" stroke="black" />

polyline: Defines any shape that consists of only straight lines.
Example:
svg
<polyline points="20,20 40,25 60,40 80,120 120,140 200,180" stroke="black" fill="none" />

polygon: Defines a graphic that contains at least three sides.
Example:
svg
<polygon points="20,20 40,25 60,40 80,120 120,140 200,180" fill="purple" />

path: Defines a path.
Example:
svg
<path d="M10 10 H 90 V 90 H 10 Z" fill="gray" />

Note: There are no explicit square or triangle elements. However, these can be created using rect (for square) and polygon (for triangle) elements.
For instance, a triangle could be created like this:
svg
<polygon points="50,15 100,100 0,100" fill="yellow" />
This defines a triangle with points at (50,15), (100,100), and (0,100).
 */