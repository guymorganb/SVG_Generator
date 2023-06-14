/**
 * JavaScript
 * Create a Class that can be used to generate a triangle .svg
 */

const shapes = require ('shapes');

class Triangle extends shapes {
    #color; // privatley scoped variable
   
    consrtuctor(height, width, textx, texty, textAnchor, dominantBaseline, xmlns){
        super(height, width, textx, texty, textAnchor, dominantBaseline, xmlns);
        this.#color = color;
        function Triangle(x, y, width, height, textColor, fontSize, innerText){
            // some code to make the triangle
        }
    }
   
    // setter for color
    set color(newColor){
        this.#color = newColor;
    }
    // getter for color
    get color(){
        return this.#color;
    }
}


module.exports = triangle;