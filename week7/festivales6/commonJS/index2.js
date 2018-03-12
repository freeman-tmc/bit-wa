const {createMovie} = require('./entities/movieModule.js');
const {createProgram} = require ('./entities/programModule.js');
const {Festival} = require('./entities/festivalModule.js');

// creating movie objects
var movie1 = createMovie('Revenant', 130, 'adventure');
var movie2 = createMovie('Batman, Dark Knight', 100, 'action');
var movie3 = createMovie('Warcraft', 140, 'fantasy');
var movie4 = createMovie('Star Wars, The Last Jedi', 110, 'space opera');

// creating program objects
var prog1 = createProgram("2018 04 13");
var prog2 = createProgram("2018 04 14");

// adding movies to programs
prog1.addMovie(movie1);
prog1.addMovie(movie2);
prog2.addMovie(movie3);
prog2.addMovie(movie4);

 // creating Festival object
 var fest = new Festival('Weekend Festival');

 // adding programs to Festival objects
 fest.addProgram(prog1);
 fest.addProgram(prog2);

 // displaying Festival content
 fest.getData();