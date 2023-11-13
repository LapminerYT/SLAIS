let imageCards = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]

const randomize = (arr) => {
    return arr.concat(arr).sort(() => .5 - Math.random());
}

const createImageCard = (card) => {
    return `<div class="card visible-card">
                <img class="icon" src="./assets/images/${card}.png" alt="${card} icon">
            </div>`
}

const generateCards = () => {
    imageCards = randomize(imageCards);

    for (let x = 0; x < 20; x++) {
        cards[x].innerHTML += createImageCard(imageCards[x]);
    }
}