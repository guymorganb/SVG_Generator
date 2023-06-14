/**
 * JavaScript
 * Create a Class that can be used to generate a square .svg
 */

const shapes = require ('shapes');

class Square extends shapes {
    #color; // privatley scoped variable
   
    consrtuctor(height, width, textx, texty, textAnchor, dominantBaseline, xmlns){
        super(height, width, textx, texty, textAnchor, dominantBaseline, xmlns);
        this.#color = color;
        function Square(x, y, width, height, textColor, fontSize, innerText){
            // some code to make the square
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
