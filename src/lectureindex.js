const navBar = document.querySelector("#game-list")
const detailImg = document.querySelector("#detail-image")
const detailTitle = document.querySelector("#detail-title")
const detailScore = document.querySelector("#detail-high-score")
const highScoreForm = document.querySelector("#high-score-form")

fetch("http://localhost:3000/games")
.then(res => res.json())
.then(data => {
    data.forEach(game => {
        const h5 = document.createElement('h5')
        h5.textContent = `${game.name} (${game.manufacturer_name})`
        navBar.append(h5)

        h5.addEventListener("click", event => {
            addGameDetail(game)
        })
    })
    
    addGameDetail(data[0])
})

function addGameDetail(game) {
    detailImg.src = game.image
    detailTitle.textContent = game.name
    detailScore.textContent = game.high_score
}

highScoreForm.addEventListener("submit", e => {
    e.preventDefault()
    const newHighScore = e.target[0].value
    detailScore.textContent = newHighScore
    e.target.reset()
})