const Form = document.querySelector('form')
const search = document.querySelector('input')
const title = document.querySelector('#title')
const year = document.querySelector('#year')
const imdb = document.querySelector('#imdb')
const release = document.querySelector('#release')
const genre = document.querySelector('#genre')
const rated = document.querySelector('#rated')
const poster = document.querySelector('#poster')
const plot = document.querySelector('#plot')
const director = document.querySelector('#director')
const actors = document.querySelector('#actors')
const meta = document.querySelector('#meta')
const star = document.querySelector('#star')
const length = document.querySelector('#length')
const card = document.querySelector('#card')
const error = document.querySelector('#error')

Form.addEventListener('submit', (e) => {
  e.preventDefault()
  const thing = search.value
  title.textContent = 'loading...'
  card.style.display='none'
  star.style.display='none'
  poster.style.display = 'none'
  plot.textContent = ''
  director.textContent =''
  actors.textContent = ''
  error.textContent = ''
  console.log('Ans is a nigga!')
  fetch('poop?Search=' + thing).then((response) => {
    response.json().then((data) => {
      if (data.year === undefined) {
        card.style.display='none'
        star.style.display='none'
        poster.style.display = 'none'
        plot.textContent = ''
        director.textContent =''
        actors.textContent = ''
        error.textContent = 'Enter a correct name'
      }else{
      card.style.display='block'
      star.style.display='block'
      title.textContent = data.title
      year.textContent = '('+data.year +')'
      rated.textContent = data.rated
      release.textContent = data.release
      genre.textContent = data.genre
      imdb.textContent = data.imdb+'/10'
      meta.textContent = data.metascore
      length.textContent = data.length
      poster.src = data.poster
      poster.style.display = 'block'
      plot.textContent = data.plot
      director.textContent ='Director: ' + data.director
      actors.textContent = 'Actors: ' + data.actors
      }
    })
  })
})
