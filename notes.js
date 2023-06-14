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
