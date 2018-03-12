 // Program constructor function
 function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.numberOfMovies = function() {
        return this.listOfMovies.length;
    }
    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }
    this.getData = function () {
        var movieInfo = "";
        var programLength = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            movieInfo += '\t\t' + this.listOfMovies[i].getData() + '\n';
            programLength += this.listOfMovies[i].duration;
        }
        var programInfo = this.date + ", program duration " + programLength + "min\n" + movieInfo;
        return programInfo;
    }
}

// createProgram function
function createProgram(day) {
    var newProgram = new Program(day);
    return newProgram;
}

module.exports = {createProgram};