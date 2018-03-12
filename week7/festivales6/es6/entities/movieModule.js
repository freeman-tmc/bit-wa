 
 import Genre from './genreModule.js';
 
 // Movie constructor function
  function Movie(title, duration, genre) {
    this.title = title;
    this.genre = new Genre(genre);
    this.duration = duration;
    this.getData = function () {
        var movieInfo = this.title + ', ' + this.duration + 'min, ' + this.genre.getData();
        return movieInfo;
    }
}

// function for creating Movie objects
export function createMovie(name, duration, genre) {
    var newMovie = new Movie(name, duration, genre);
    return newMovie;
}

