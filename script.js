class Colors {

    constructor() {
    
        // Arrays hold the three seperate color output options.
        this._first = ["Red", "Blue", "Green"];
        this._second = ["Black", "White", "Orange"];
        this._third = ["Pink", "Purple", "Gray"];
    
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

