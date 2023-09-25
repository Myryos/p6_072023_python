const BASE_URL = "http://localhost:8000/api/v1/"

async function main() {
    getBestMovie(BASE_URL + "titles/", { sort_by: "-imdb_score" }).then(res => {
        renderBestFilm(res)
    })
    getMovies(BASE_URL + "titles/", { sort_by: "-imdb_score", page_size: 35 }).then(res => {
        renderMovieList(res, ".best_films")
    })
    getMovies(BASE_URL + "titles/", { genre: "Animation", page_size: 7 }).then(res => {
        renderMovieList(res, ".animation")
    })
    getMovies(BASE_URL + "titles/", { genre: "Horror", page_size: 7 }).then(res => {
        renderMovieList(res, ".horror")
    })
    getMovies(BASE_URL + "titles/", { genre: "War", page_size: 7 }).then(res => {
        renderMovieList(res, ".war")
    })
}

async function eventListener() {
    let movies = document.getElementsByClassName("movie")
    let modal = document.querySelector(".film_modal")

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }

    for (const movie of movies) {
        movie.addEventListener('click', function () {
            renderFilmModal(movie.id, modal)
            modal.style.display = 'block'
            let close = document.querySelector(".close_btn")
            console.log(close)
            close.addEventListener('click', function () {
                modal.style.display = "none"
            })
        })
    }
}

main().finally(() => {
    setTimeout(() => { eventListener() }, 500)
})





