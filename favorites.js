const db = require('mongojs')('favorites_db')
const { prompt } = require('inquirer')
require('console.table')

const viewMovies = () => {
  db.movies.find((err, movies) => {
    if (err) { console.log(err) }
    console.table(movies)
    mainMenu()
  })
}

const createMovie = () => {
  prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title?'
    },
    {
      type: 'input',
      name: 'director',
      message: 'Who is the director?'
    }
  ])
    .then(data => {
      db.movies.insert(data, err => {
        if (err) { console.log(err) }
        mainMenu()
      })
    })
}

const mainMenu = () => {
  prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['View all movies', 'Create a movie']
  })
    .then(({ action }) => {
      switch (action) {
        case 'View all movies':
          viewMovies()
          break
        case 'Create a movie':
          createMovie()
          break
      }
    })
}

mainMenu()
