let randomBtn = document.querySelector('#random')

function getRandom() {
let randomResturant = ['Pizza Hut','BlackStone','Panera Bread','iHop','McDonalds','Taystees']
const randomElement = randomResturant[Math.floor(Math.random() * randomResturant.length)];
alert(randomElement)
}


randomBtn.addEventListener('click', getRandom )