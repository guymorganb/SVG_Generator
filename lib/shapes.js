/**
 * JavaScript
 * Create a Class that abstracts methods used in creating various .svg shapes
 */

class shapes {
    constructor(height=200, width=320, text, color){
        this.height = height;
        this.width = width;
        this.text = text;
        this.color = color;
    }
}

module.exports = shapes;