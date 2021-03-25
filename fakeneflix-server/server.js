const express = require('express')
const cors = require('cors')

const bodyParser = require('body-parser')
const app = express()
const port = 8080
const fs = require('fs')
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})
app.use(bodyParser.json())

const getMovies = () => {
    const moviesJson = fs.readFileSync("data/movies.json")
    const movies = JSON.parse(moviesJson)
    return movies
}

app.get('/', (req, res) => {
    res.json(getMovies)
})

app.get('/MovieDetail/:id', (req, res) => {
    const movieDetail = getMovies().filter(f => f.id == req.match.params.id)
    res.json(movieDetail)
})

app.get('/Auth', (req, res) => {

})
app.listen(port, () => {
    console.log('server started on port ' + port)
})