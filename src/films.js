// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(function(elem){
    return elem.director
  });
  /* console.log("EXERCICE 1 ->", result); */
  return result;
}

// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(array, director) {
  
  let result = array.filter(movie => movie.director == director)

  /* console.log(result) */
  return result
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
  let result = array.filter(movie => movie.director == director);
  
  let averageScore = averageScoreF(result)

  return Number((averageScore/result.length).toFixed(2))
}

function averageScoreF(result){
  let finalScore = result.reduce((score, result) => {
    let newScore = score + result.score
    return newScore
  }, 0)
  return finalScore
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let moviesArr = array.map(movie => movie.title)
                        .sort()
                        .slice(0, 20)

  return moviesArr
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let moviesArr = array.map(movie => movie);

  moviesArr.sort(function (x, y) {
    let difYear = x.year - y.year

    if(difYear === 0){
      if (x.title < y.title) {
        return -1;
      }
  
      if (x.title > y.title) {
          return 1;
      }
    }
    return difYear  
  });
  
  return moviesArr
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  let result = array.filter(movie => movie.genre == genre);
  
  let averageScore = averageScoreF(result)
  let totalElem = result.length
  
  
  let index = result.find(elem => elem.score == '')
  
  if(index != undefined){
    totalElem--
    result.splice(index, 1)
  }
  console.log('rdo--', totalElem)
  
  console.log(Number((averageScore/totalElem).toFixed(2)))
  return Number((averageScore/totalElem).toFixed(2))
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
