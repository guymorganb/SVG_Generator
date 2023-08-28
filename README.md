
  # SVG_Generator App

  ## Badges
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

  ## Description
  - A command line app used to create SVG logos
  
  - Images of the project
  ![step 1](https://github.com/guymorganb/SVG_Generator/blob/main/images/SVG_Test.png?raw=true)

  ![step 2](https://github.com/guymorganb/SVG_Generator/blob/main/images/SVG_run.png?raw=true)

  ##  Link to video-walkthrough
  - https://drive.google.com/file/d/1-Ivwdc8XjPJXw53fghIyVkRP3CG6ZuA4/view?usp=sharing

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  
  ## Installation
  - Navigate to the root directory and use 'npm install' to get all dependencies
  
  ## Usage
  - For anyone who wants to create a custom SVG logo tag from the command line
  
  ## Questions
  - Please reach out to guymorganb@gmail.com to answer questions about this project and follow this link to GitHub. https://github.com/guymorganb

  ## Credits

  EDx University of Denver.

  ## License
  - MIT License
 Copyright (c) [2023][GuyMorganB]

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  ## Features
  - 

  ## How to Contribute
  - Go to github find the repository and clone it, then install dependencies. Email me with questions.
  
  ## Tests
  - npm test

  - User Story
    
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

- Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
