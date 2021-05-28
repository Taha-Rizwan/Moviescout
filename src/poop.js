const request = require('request')

const poop = (Search, callback) => {
  const key = "49ff761f"
  const url = 'http://omdbapi.com/?t=' + encodeURIComponent(Search) + '&apikey=' +encodeURIComponent(key) 
  
  request({url: url, json: true}, (error, {body}) =>{
    if(!body.Title) {
      callback(undefined,  {
        title: 'Enter a correct name!',
        year: undefined,
        release: undefined,
        genre: undefined,
        director: undefined,
        actors: undefined,
        poster: undefined,
        plot: undefined,
        imdb: undefined,
        metascore:undefined,
        length: undefined,
        rated: undefined
      }
        )
    }
    else if(body.Title) {
      callback(undefined, {
       title: body.Title,
       year: body.Year,
       release: body.Released,
       genre: body.Genre,
       director: body.Director,
       actors: body.Actors,
       poster: body.Poster,
       plot: body.Plot,
       imdb: body.imdbRating,
       metascore: body.Metascore,
       length: body.Runtime,
       rated: body.Rated
      }
      )
    } 
    else {
      callback(undefined,{
        error: 'Server is down!'
      })
    }
  })
}



module.exports = poop