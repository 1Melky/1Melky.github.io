// function winnaar () {
//         if () {
        
//     }
// }

document.querySelector(".tile1");
let winner = false;
let currentplayer = "X"
let playerXpoint = 0;
let playerOpoint = 0;
const playerxpointelement = document.querySelector(".scoreX")
const playeropointelement = document.querySelector(".scoreO")
let counter=0 
function XOfunction(event) {
  if (winner) {
    return;
  }

  if(event.target.textContent !== "") {
    // box is al ingevuld
    return;
  }

    event.target.textContent= currentplayer;
    if (currentplayer == "X") {
         currentplayer = "O"
    }
    else if  (currentplayer == "O") {
        currentplayer = "X"
    }
    counter=counter+1;
    if (counter >= 5) {
      const box1 = document.querySelector(".tile1");
      const box2 = document.querySelector(".tile2");
      const box3 = document.querySelector(".tile3");
      const box4 = document.querySelector(".tile4");
      const box5 = document.querySelector(".tile5");
      const box6 = document.querySelector(".tile6");
      const box7 = document.querySelector(".tile7");
      const box8 = document.querySelector(".tile8");
      const box9 = document.querySelector(".tile9");
      if (box1.textContent == "X" && box4.textContent == "X" && box7.textContent == "X" ) {
        alert("X win")
        scorexo("X")
      }
      else if (box2.textContent == "X" && box5.textContent == "X" && box8.textContent == "X" ) {
        alert("X win")
        scorexo("X")
      }
      else if (box3.textContent == "X" && box6.textContent == "X" && box9.textContent == "X" ) {
        alert("X win")
        scorexo("X")
      }
      else if (box1.textContent == "X" && box2.textContent == "X" && box3.textContent == "X" ) {
        alert("X win")
        scorexo("X")
      }
      else if (box4.textContent == "X" && box5.textContent == "X" && box6.textContent == "X" ) {
        alert("X win")
        scorexo("X")
      }
      else if (box7.textContent == "X" && box8.textContent == "X" && box9.textContent == "X" ) {
        alert("X win")
        scorexo("X")
      }
      else if (box1.textContent == "X" && box5.textContent == "X" && box9.textContent == "X" ) {
        alert("X win")
        scorexo("X")
      }
      else if (box3.textContent == "X" && box5.textContent == "X" && box7.textContent == "X" ) {
        alert("X win")
        scorexo("X")
      }
      
      
      



           if (box1.textContent == "O" && box4.textContent == "O" && box7.textContent == "O" ) {
        alert("O win")
        scorexo("O")
      }
      else if (box2.textContent == "O" && box5.textContent == "O" && box8.textContent == "O" ) {
        alert("O win")
        scorexo("O")
      }
      else if (box3.textContent == "O" && box6.textContent == "O" && box9.textContent == "O" ) {
        alert("O win")
        scorexo("O")
      }
      else if (box1.textContent == "O" && box2.textContent == "O" && box3.textContent == "O" ) {
        alert("O win")
        scorexo("O")
      }
      else if (box4.textContent == "O" && box5.textContent == "O" && box6.textContent == "O" ) {
        alert("O win")
        scorexo("O")
      }
      else if (box7.textContent == "O" && box8.textContent == "O" && box9.textContent == "O" ) {
        alert("O win")
        scorexo("O")
      }
      else if (box1.textContent == "O" && box5.textContent == "O" && box9.textContent == "O" ) {
        alert("O win")
        scorexo("O")
      }
      else if (box3.textContent == "O" && box5.textContent == "O" && box7.textContent == "O" ) {
        alert("O win")
        scorexo("O")
      }
      

    }
}


//  const reset = document.querySelector(".reset");
//  const tile = document.querySelector(".tile1");
//  reset.addEventListener('click', reset);
//  function reset(){
//   // queryselector voor alle tiles
// document.querySelector(".tile1");
//   //text content leeg maken
// textContent.tile = "";
//  };
function resetfunction() {
  winner = false;
  const tile1 = document.querySelector('.tile1');
tile1.textContent = ""

const tile2 = document.querySelector('.tile2');
tile2.textContent = ""

const tile3 = document.querySelector('.tile3');
tile3.textContent = ""

const tile4 = document.querySelector('.tile4');
tile4.textContent = ""

const tile5 = document.querySelector('.tile5');
tile5.textContent = ""

const tile6 = document.querySelector('.tile6');
tile6.textContent = ""

const tile7 = document.querySelector('.tile7');
tile7.textContent = ""

const tile8 = document.querySelector('.tile8');
tile8.textContent = ""

const tile9 = document.querySelector('.tile9');
tile9.textContent = ""
};

const btn0 = document.querySelector('.reset')
btn0.addEventListener('click', resetfunction )




const myBtn1 = document.querySelector('.tile1');
myBtn1.addEventListener('click', XOfunction);

document.querySelector(".tile2");
const myBtn2 = document.querySelector('.tile2');
myBtn2.addEventListener('click', XOfunction);

document.querySelector(".tile3");
const myBtn3 = document.querySelector('.tile3');
myBtn3.addEventListener('click', XOfunction);

document.querySelector(".tile4");
const myBtn4 = document.querySelector('.tile4');
myBtn4.addEventListener('click', XOfunction);

document.querySelector(".tile5");
const myBtn5 = document.querySelector('.tile5');
myBtn5.addEventListener('click', XOfunction);

document.querySelector(".tile6");
const myBtn6 = document.querySelector('.tile6');
myBtn6.addEventListener('click', XOfunction);

document.querySelector(".tile7");
const myBtn7 = document.querySelector('.tile7');
myBtn7.addEventListener('click', XOfunction);

document.querySelector(".tile8");
const myBtn8 = document.querySelector('.tile8');
myBtn8.addEventListener('click', XOfunction);

document.querySelector(".tile9");
const myBtn9 = document.querySelector('.tile9');
myBtn9.addEventListener('click', XOfunction);

function scorexo(player) {
  if (player == "X") {
    playerXpoint = playerXpoint+1
    playerxpointelement.textContent=playerXpoint;
  }
  if (player == 'O') {
    playerOpoint = playerOpoint+1
    playeropointelement.textContent=playerOpoint;
  }
  winner = true;
}
// querySelectorAll daar mee selecter je alle tile clase

// const tiles = document.querySelectorAll(".tile");
// let winner = false;
// let toggle = false; 

// // hier staat alle volgordens die tellen als een win
// const winRows = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6],
// ];

// //een forloop wordt gebruikt om dingen te lopen maar ik weet niet wanneer ik het moet gebruiken zonder dat het vertelt wordt aan me
// for (let i = 0; i < tiles.length; i++) {
//   const tile = tiles[i];
//   //addEventListener wordt gebruikt om een function te laten uit voeren als er iets in de website gebeurt
//   tile.addEventListener("click", (e) => {
//     click.play();
// 		// if tile already has X or O do nothing
// 		if (tile.textContent != "" || winner) return;

// 		// fill in X or O
//     //een if is als er een code iets is dat het de code gaat uitvoeren die je hebt geschreven 
// 		if (toggle) {
// 			tile.textContent = "X";
// 		} else {
// 			tile.textContent = "O";
// 		}
  
// 		// switch player turn
// 		toggle = !toggle;

// 		// check if a row is complete
//     // een function is een code waar je andere code er in kan op slaan
// 		function checkForWin() {
//       let winner = false;
//       for (let i = 0; i < winRows.length; i++) {
//         /**
//          * We pick a winning row from winRows
//          */
//         const row = winRows[i];
    
//         /**
//          * We pick the right tile elements
//          */
//         const x = [tiles[row[0]], tiles[row[1]], tiles[row[2]]];
        
//         /**
//          * We don't compare empty tiles, so we skip
//          * the rest of the code and continue from the
//          * beginning of the loop.
//          */
//         if (x[0].textContent == "" || x[1].textContent == "" || x[2].textContent == "") continue;
    
//         /**
//          * We compare 3 tiles for the same value
//          */
//         if (x[0].textContent === x[1].textContent && x[1].textContent === x[2].textContent) {
//           console.log("We have a winner!");
//           winner = true;
    
//           if (x[0].textContent === "X") updateScore(scoreX);
//           else updateScore(scoreO);
    
//           // if we have a winning situation, break from the loop
//           break;
        
//         console.log("No winner yet.");
//       }
    
//       if (winner) {
//         console.log("Yes we have a winner");
//         // play the winning sound
//         win.play();
//       } else {
//         console.log("Nope...");
//       }
    
//       return winner;
//     }
//   } 
// const board = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
//   ];
  
//   let currentPlayer = 'X';
  
//   function startGame() {
//     const tiles = document.querySelectorAll('.tile');
//     tiles.forEach(tile => {
//       tile.addEventListener('click', handleClick);
//     });
//   }
  
//   function handleClick(event) {
//     const row = Math.floor(event.target.classList[1].slice(-1) / 3);
//     const col = event.target.classList[1].slice(-1) % 3;
//     if (board[row][col] === '') {
//       event.target.textContent = currentPlayer;
//       board[row][col] = currentPlayer;
//       if (checkForWinner()) {
//         alert(`Player ${currentPlayer} has won!`);
//         resetGame();
//       } else {
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//       }
//     }
//   }
  
//   function checkForWinner() {
//     return hasThreeInARow() || hasThreeInAColumn() || hasThreeInADiagonal();
//   }
  
//   function hasThreeInARow() {
//     for (let row = 0; row < board.length; row++) {
//       if (board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer) {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   function hasThreeInAColumn() {
//     for (let col = 0; col < board[0].length; col++) {
//       if (board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer) {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   function hasThreeInADiagonal() {
//     return (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
//            (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer);
//   }
  
//   function resetGame() {
//     board.forEach(row => row.fill(''));
//     const tiles = document.querySelectorAll('.tile');
//     tiles.forEach(tile => {
//       tile.textContent = '';
//     });
//     currentPlayer = 'X';
//   }
  
//   startGame();