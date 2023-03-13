class Colors {

    constructor() {
    
        // Arrays hold the three seperate color output options.
        this._first = ["red", "blue", "green"];
        this._second = ["black", "white", "orange"];
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

