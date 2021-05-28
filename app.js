//requiring stuff
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const poop = require('./src/poop')

const app = express()
const port = process.env.PORT || 3000

//Defining path. -_-
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

//Setting up handelbars. ;)
app.set('view engine', 'hbs')
app.set('views' , viewsPath )
hbs.registerPartials(partialsPath)

//Setting static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
  res.render('index', {
    
  })
})

app.get('/poop', (req,res) => {
  if(!req.query.Search) {
    return res.send(
      {error: 'Please provide a movie,series or documentary!'}
    )
  }
  poop(req.query.Search, ((error, {title, year, release, genre, director, actors, poster, plot, imdb, metascore, length, rated}) => {
    if (!req.query.Search) {
      return res.send({
        
      })
    }
    res.send({
      title, year, release, genre, director, actors, poster, plot, imdb, metascore,length,rated,
      Search: req.query.Search
    })
  }))
 
})



app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
