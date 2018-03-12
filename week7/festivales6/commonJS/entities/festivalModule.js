 // Festival constructor function
 function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfAllMovies = function () {
        var sum = 0;
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            sum += this.listOfPrograms[i].numberOfMovies();
        }
        return sum;
    };
    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }
    this.getData = function () {
        var programInfo = "";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            programInfo += '\t' + this.listOfPrograms[i].getData();
        }
        var festivalInfo = this.name + " has " + this.numberOfAllMovies() + " movie titles \n" + programInfo;
        console.log(festivalInfo);
    }
}

module.exports = {Festival};