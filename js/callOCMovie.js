async function getMovies(url, params) {
    let movies = []
    await axios.get(url, { params })
        .then(response => {
            movies = movies.concat(response.data.results)
        })
        .catch(error => {
            console.error(error)
            throw error
        })
    return movies
}

async function getBestMovie(url, params) {
    let movie = {}
    await axios.get(url, { params })
        .then(res => {
            movie = res.data.results[0]
        })
        .catch(err => {
            console.error(err)
            throw err
        })
    return movie
}

async function getMovieById(url) {
    let movie = {}
    await axios.get(url)
        .then(res => {
            movie = res.data
        })
        .catch(err => {
            console.error(err)
            throw err
        })
    return movie
}