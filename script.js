let button = document.getElementById('button');// Generate button.
let firstColor = document.getElementById('first');// First color block.
let secondColor = document.getElementById('second');// Second color block.
let thirdColor = document.getElementById('third');// Third color block.

// Class returns array of three string colors.
class Colors {

    constructor() {
    
        // Arrays hold the three seperate color output options.
        this._first = ["red", "blue", "green"];
        this._second = ["black", "brown", "orange"];
        this._third = ["pink", "purple", "gray"];
    
    }
    
    // Method chooses colors randomly.
    chooseColors() {

        // Generates random colors and puts in output array.
        let output = [this._first[Math.floor(Math.random() * (this._first.length))], 
            this._second[Math.floor(Math.random() * (this._second.length))],
            this._third[Math.floor(Math.random() * (this._third.length))]];

        return output;

    } 

}

// Method renames headers with appropriate color names.
const boxRename = (terms) => {

    firstColor.innerText = terms[0];
    secondColor.innerText = terms[1];
    thirdColor.innerText = terms[2];

}

// Class changes colors of headers in html file.
const changeColors = () =>  {

    // Intakes array of random colors.
    let arr = generator.chooseColors();

    // Assigns colors to each color strip.
    firstColor.style.backgroundColor = arr[0];
    secondColor.style.backgroundColor = arr[1];
    thirdColor.style.backgroundColor = arr[2];

    boxRename(arr);// Method renames boxes with colors.
   
}

let generator = new Colors();// Object used to get new colors.

// Adds click event to generate button.
button.onclick = changeColors;


