const gameNav = document.querySelector(".game-list")
const gameDetailsImage = document.querySelector("#detail-image")
const gameDetailsTitle = document.querySelector("#detail-title")
const gameDetailsHigh = document.querySelector("#detail-high-score")

fetch("http://localhost:3000/games")
.then(res => res.json())
.then(games => {
    games.forEach(game => {
        const createNameElement = document.createElement("h5")
        const createManuElement = document.createElement("h5")
        const inputName = createNameElement.textContent = game.name
        const inputManu = createManuElement.textContent = game.manufacturer_name
        gameNav.append(`${inputName} (${inputManu})`)
    })

    gameDetailsImage = games[0][3]
    // gameDetailsHigh.textContent = games[0][0]
    // gameDetailsImage.textContent = games[0][0]
})

// function createName(obj) {
//     const element = document.createElement("h5")
//     element.textContent = obj.name
//     gameNav.append(obj)
// }

// function createManuName(obj) {
//     const element = document.createElement("h5")
//     element.textContent = obj.manufacturer_name
// }