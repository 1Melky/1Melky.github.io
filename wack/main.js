console.log('main loaded');

// string voor de verschillende img
const moleimgarry = ['url(/wack/img/active/dug.jpg)', 'url(/wack/img/active/haar.png)',' url(/wack/img/active/staan.jpg)',' url(/wack/img/active/mol.png)'];

let minumumTime = 500;
let maximum = 1250;
let gameStarted = false;

let playerPoints = 3;

let timerId;


// tijd aan passenknop function
let tijd1 = document.querySelector('.tijd')
tijd1.addEventListener('click', function tijdKnopMax() {
  let max = prompt('Maximum Tijd')
     maximum = max
});

let tijd3 = document.querySelector('.tijd2')
tijd3.addEventListener('click', function tijdKnopMin() {
 let min = prompt('Minimum Tijd')
  minumumTime = min
});

const playerPointsElement = document.querySelector('.player-points');

const allTiles = document.querySelectorAll('.tile')

console.log(allTiles);

const startGameButton = document.querySelector('.sidebar');

// start knop om het spel te beginnen 
startGameButton.addEventListener('click', function() {
    if(!gameStarted) {
        startGame();
    }
    gameStarted = true;
    playerPoints = 3;
    playerPointsElement.textContent = playerPoints;

    // startGameButton.classList.remove('hov');
});

// hier is de function om een random getal te krijgen 

getRandomNumber(1, 50)

function getRandomNumber(min, max) {
    let random = Math.random();
    // console.log(random);
    // console.log(min);
    // console.log(max);
    // console.log(Math.floor(random));
    // console.log(max - min + 1);
    console.log(Math.floor(random * (max - min + 1)));
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// tiles click baar maken wanneer het spel begint
allTiles.forEach(function(tile) {
    // console.log(tile);
    tile.addEventListener('click', function (){
if (gameStarted) {
    tileclicked(tile);

}
        
    })
});

// activateRandomTile();
// hier is het punten systeem voor het spel als je op een tile clicked
function tileclicked(tile) {
    console.log(tile);
    if (tile.classList.contains('active')){
        playerPoints = playerPoints + 1;
        let audio = new Audio('audio/p.mp3');
        audio.play();
    }
    else{
        playerPoints = playerPoints - 1;
        let audio = new Audio('audio/r.mp3');
        audio.play();
    }
    if(playerPoints <= 0){
        endGame();
    }
    console.log(playerPoints);
    tile.classList.remove('active');
    playerPointsElement.textContent = playerPoints;
}

// dit is een function om constant random activetiles te maken 
function activateRandomTile() {
    const currentActiveTile = document.querySelector('.tile.active');
    if (currentActiveTile) {
        currentActiveTile.classList.remove('active');
    }
    let randomTileNumber = getRandomNumber(0, allTiles.length - 1);
    const selectedTile = allTiles[randomTileNumber];
    selectedTile.classList.add('active');
    selectedTile.style.setProperty('--mole-background-img', moleimgarry[getRandomNumber(0, moleimgarry.length -1)]);

    startGame();
}



function startGame() {
    const randomTime = getRandomNumber(minumumTime, maximum);
    timerId = setTimeout(activateRandomTile, randomTime)
    
}

// dit zorgt er voor dat de stopknop het spel stopt
let stopKnop = document.querySelector('.reset').addEventListener('click', endGame)

// dit is de eind game funtion
function endGame() {
    gameStarted = false
    startGameButton.disabled = false
    clearInterval(timerId);
    // alert('Je hebt verlorren');

}


function clearTiles() {
    for (let i = 0; i < allTiles.length; i++) {
       const tileElement = allTiles[i];
       tileElement.classList.remove('active')
    }
}