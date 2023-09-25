function renderMovieList(movie_array, class_name) {
    let parent = document.querySelector(class_name)
    let content = parent.querySelector(".section_content")
    let slide_show = content.querySelector(".slide_show")

    movie_array.forEach(movie => {
        slide_show.innerHTML += `<img src="${movie["image_url"]}" class="movie" id="${movie["url"]}" />`
    });
}

function renderBestFilm(movie) {

    getMovieById(movie["url"])
        .then(value => {
            let section = document.querySelector(".best_film")

            let title = section.querySelector(".best_film_title")

            let cover = section.querySelector(".best_film_cover")

            title.innerText = value["title"]

            let description = section.querySelector(".resume")

            description.innerText = value["description"]

            cover.innerHTML += `<img class="best_film_image" src="${value["image_url"]}" alt="${value["title"]}" />`
        })
}

function renderFilmModal(url, modal) {
    getMovieById(url)
        .then(value => {
            let title = modal.querySelector(".title_film")

            let modal_img = modal.querySelector(".modal_body_img")

            let modal_content = modal.querySelector(".modal_body_content")

            title.innerText = `${value["title"]}`

            modal_img.innerHTML = `<img src ="${value["image_url"]}"/>`

            modal_content.innerHTML = `<p>Summary:${value["description"]}</p>
            <p>Genres: ${value["genres"].join(", ")}</p>
            <p>Rating: ${value["rated"]}</p>
            <p>IMDB Score: ${value["imdb_score"]}</p>
            <p>Year: ${value["year"]}</p>
            <p>Directors:${value["directors"].join(", ")}</p>
            <p>Actors: ${value["actors"].join(", ")}</p>
            <p>Duration: ${value["duration"]} min</p>
            <p>Countries: ${value["countries"].join(", ")}</p>
            <p>Income: ${incomeCheck(value["worldwide_gross_income"])}</p> `
        })
}

function incomeCheck(income) {
    if (income == null)
        return 'Unknown income'
    return income + " $"
}