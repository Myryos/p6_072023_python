const gap = 64

const slide_shows = document.querySelectorAll(".section_content")
for (let i = 0; i < slide_shows.length; i++) {
    let content = slide_shows[i].querySelector(".slide_show")
    let right = slide_shows[i].querySelector(".arrow_right")
    let left = slide_shows[i].querySelector(".arrow_left")

    let width = slide_shows[i].offsetWidth

    right.addEventListener("click", e => {
        slide_shows[i].scrollBy(width + gap, 0)
        if (slide_shows[i].scrollWidth !== 0) {
            left.style.display = 'flex'
        }
        if (slide_shows[i].scrollWidth - width - gap <= slide_shows[i].scrollLeft + width) {
            right.style.display = 'none'
        }
    })
    left.addEventListener("click", e => {
        slide_shows[i].scrollBy(-(width + gap), 0)
        if (slide_shows[i].scrollLeft - width - gap <= 0) {
            left.style.display = "none"
        }
        if (!content.scrollWidth - width - gap <= slide_shows[i].scrollLeft + width) {
            right.style.display = 'flex'
        }
    })

    window.addEventListener('resize', e => {
        width = slide_shows[i].offsetWidth
    })
}