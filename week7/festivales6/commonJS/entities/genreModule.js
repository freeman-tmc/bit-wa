  // Genre constructor function
  function Genre(genre) {
    this.name = genre;
    this.getData = function () {
        var acronym = (this.name[0] + this.name[this.name.length - 1]);
        return acronym.toUpperCase();
    }
}

module.exports = {Genre};