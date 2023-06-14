/**
 * JavaScript
 * Using inquirer create a command line app to create an .svg logo of various shapes
 */
const filePath = './examples/logo.svg';
const htmlPath = './examples/testSVG.HTML'
const parseUserInput = require('./lib/parseInput')
const data = require('./lib/inquirerQuestions')
const inquirer = require('inquirer');
const fs = require('fs-extra');
const jsdom = require('jsdom')
const { JSDOM } = jsdom 
/*
JSDOM is a class (constructor function) within the jsdom library. 
So, when you use this line of code, 
you're essentially creating a local variable named JSDOM that points to jsdom.JSDOM. 
This is done so that we don't have to write jsdom.JSDOM each time 
you want to use the JSDOM class.
*/

async function insertSvg() {
    try{
        // Load the HTML file
        const html = await fs.readFile(htmlPath, 'utf-8');
        // Load the SVG file
        const svg = await fs.readFile(filePath, 'utf-8');
        // Parse the HTML file with jsdom
        const dom = new JSDOM(html);
        const document = dom.window.document;
        // Find the div where the SVG should be inserted
        const div = document.getElementById("svgs");    
    // Note: because we are using node.js we dont need to include a script tag on the HTML doc being written to
         // Check if the SVG content already exists in the HTML file and insert the SVG
         if (!div.innerHTML.includes(svg)) {
            // If it doesn't exist, append the SVG content
            div.innerHTML += svg;
        }
        // Write the updated HTML back to the file
        await fs.writeFile(htmlPath, dom.serialize());
    }
    catch(error){
        console.log('Error Writing to HTML: ', error)
    }
}

async function init (data) {
    // handling errors
    try{
        const answers = await inquirer.prompt(data)
        const logo = parseUserInput(answers)
        fs.appendFile(filePath, logo + '\n', error =>{
            // handling errors
            if(error){
                console.log("Error:", error)
                return;
            }console.log(`Logo successfully written to ${filePath}.`)
        }) 
    }
    catch(error){
        console.log("Error", error)
        return
    }
    finally{
        insertSvg()
    }
}

init(data)


