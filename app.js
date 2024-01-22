function createGameboard () {

    let gameboard = [];
    for (let i = 0; i < 3; i++) {
        gameboard[i]=[]
        for (let j = 0; j < 3; j++) {
            gameboard[i].push("");
        }
    }

    return gameboard;
}

console.log(createGameboard());

const setupForm = document.getElementById("setupForm")

console.log(submitButton);

let game;

let Player1Value;
let Player2Value;

setupForm.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log("This shit fires")
    
    Player1Value = document.getElementById("PlayerOne").value
    Player2Value = document.getElementById("PlayerTwo").value

    if ((Player1Value == "X" && Player2Value == "O") || (Player1Value == "O" && Player2Value == "X") ) {
        game = displayController(Player1Value, Player2Value);
    }
    else if (Player1Value !== "X" && Player2Value !== "O") {
        alert("Please enter the correct values");
    }
    else if (Player2Value !== "X" && Player2Value !== "O") {
        alert("Please enter the correct values");
    }
})

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
button1.addEventListener("click", () => {
    //button1.innerHTML = Player1Value;
    game.nextMove(0,0);
})

button2.addEventListener("click", () => {
    game.nextMove(0,1);
})

button3.addEventListener("click", () => {
    game.nextMove(0,2);
})

button4.addEventListener("click", () => {
    game.nextMove(1,0);
})

button5.addEventListener("click", () => {
    game.nextMove(1,1);
})

button6.addEventListener("click", () => {
    game.nextMove(1,2);
})

button7.addEventListener("click", () => {
    game.nextMove(2,0);
})

button8.addEventListener("click", () => {
    game.nextMove(2,1);
})

button9.addEventListener("click", () => {
    game.nextMove(2,2);
})


function displayController (playerOneValue, playerTwoValue) {

    //console.log(player_setup().symbolPlayer_One);
    //console.log(player_setup().symbolPlayer_Two);

    const gameboard = createGameboard();

    let current_player = "Player One";

    function printGameboard() {
        return gameboard;
    }
   
    //Let's start with player one and then alternate
    const nextMove = (row, col) => {
            
        if (current_player == "Player One") {
        
            if (gameboard[row][col] == "X" || gameboard[row][col] == "O") {
                current_player ==  "Player One"
                console.log("Player One (X): Space is filled. Select a different space")
                //return printGameboard()

                console.log(gameboard);
            }
            else {
                gameboard[row][col] = playerOneValue;

                if (row == 0 && col == 0) {
                    button1.innerHTML = playerOneValue
                }
                else if(row == 0 && col == 1) {
                    button2.innerHTML = playerOneValue
                }
                else if(row == 0 && col == 2) {
                    button3.innerHTML = playerOneValue
                }
                else if(row == 1 && col == 0) {
                    button4.innerHTML = playerOneValue
                }
                else if(row == 1 && col == 1) {
                    button5.innerHTML = playerOneValue
                }
                else if(row == 1 && col == 2) {
                    button6.innerHTML = playerOneValue
                }
                else if(row == 2 && col == 0) {
                    button7.innerHTML = playerOneValue
                }
                else if(row == 2 && col == 1) {
                    button8.innerHTML = playerOneValue
                }
                else if(row == 2 && col == 2) {
                    button9.innerHTML = playerOneValue
                }

                current_player = "Player Two";
                if (win_check(gameboard) == "X wins" || win_check(gameboard) == "O wins") {
                    console.log(win_check(gameboard))
                    function popupFunc() {
                        var popup = document.getElementById("myPopup");
                        popup.innerHTML = playerOneValue + " wins";
                        popup.classList.toggle("show");
                    }
                    popupFunc();
                }
                //return printGameboard()
                console.log(gameboard);
            }
            return printGameboard();
       }
       else if (current_player == "Player Two") {

            if (gameboard[row][col] == "X" || gameboard[row][col] == "O"){
                current_player ==  "Player Two"
                console.log("Player Two (O): Space is filled. Select a different space")
                //return printGameboard()
                console.log(gameboard);
            }
            else {
                gameboard[row][col] = playerTwoValue;
                current_player = "Player One";
                if (win_check(gameboard) == "O wins" || win_check(gameboard) == "X wins") {
                    console.log(win_check(gameboard))
                    function popupFunc() {
                        var popup = document.getElementById("myPopup");
                        popup.innerHTML = playerTwoValue + " wins";
                        popup.classList.toggle("show");
                    }
                    popupFunc();
                }

                if (row == 0 && col == 0) {
                    button1.innerHTML = playerTwoValue
                }
                else if(row == 0 && col == 1) {
                    button2.innerHTML = playerTwoValue
                }
                else if(row == 0 && col == 2) {
                    button3.innerHTML = playerTwoValue
                }
                else if(row == 1 && col == 0) {
                    button4.innerHTML = playerTwoValue
                }
                else if(row == 1 && col == 1) {
                    button5.innerHTML = playerTwoValue
                }
                else if(row == 1 && col == 2) {
                    button6.innerHTML = playerTwoValue
                }
                else if(row == 2 && col == 0) {
                    button7.innerHTML = playerTwoValue
                }
                else if(row == 2 && col == 1) {
                    button8.innerHTML = playerTwoValue
                }
                else if(row == 2 && col == 2) {
                    button9.innerHTML = playerTwoValue
                }
                //return printGameboard()
                console.log(gameboard);
            }
            return printGameboard();
       }     
        //createGameboard[row, col] = "Y";aaa
            
    }


    return {
        nextMove: nextMove,
        printGameboard: printGameboard,
    }


}

 
function win_check(arr) {

    let countForX = 0;
    let countForO = 0;

    let firstColVertX = 0; 
    let firstColVertO = 0; 

    let secondColVertX = 0;
    let secondColVertO = 0; 

    let thirdColVertX = 0;
    let thirdColVertO = 0;


    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr[i].length; j++) {
            //console.log(arr[i][j]);
            if (arr[i][j] == "X") {
                countForX++
            }
            else if (arr[i][j] == "O") {
                countForO++
            }
            if(countForX == 3) {
                console.log("This function fired")
                return "X wins"

                
            }
            else if(countForO == 3) {
                console.log("O function fired");
                return "O wins"

                
            }
        }
        
        countForX = 0;
        countForO = 0; 
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == "X"){
            firstColVertX++
        }
        else if (arr[i][0] == "O") {
            firstColVertO++;
        }

        if (firstColVertX == 3) {
            return "X wins"
        }
        else if (firstColVertO == 3) {
            return "O wins"
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] == "X"){
            secondColVertX++
        }
        else if (arr[i][1] == "O") {
            secondColVertO++
        }

        if (secondColVertX == 3) {
            return "X wins"
        }
        else if (secondColVertO == 3) {
            return "O wins"
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][2] == "X"){
            thirdColVertX++
        }
        else if (arr[i][2] == "O") {
            thirdColVertO++
        }

        if (thirdColVertX == 3) {
            return "X wins"
        }
        else if (thirdColVertO == 3) {
            return "O wins"
        }
    }

    if (arr[0][0] == "X" && arr[1][1] == "X" && arr[2][2] == "X") {
        console.log("diagonal")
        return "X wins";
    }
    else if (arr[0][0] == "O" && arr[1][1] == "O" && arr[2][2] == "O") {
        console.log("diagonal")
        return "O wins"
    }
    else if (arr[2][0] == "X" && arr[1][1] == "X" && arr[0][2] == "X") {
        console.log("diagonal")
        return "X wins"
    }
    else if (arr[2][0] == "O" && arr[1][1] == "O" && arr[0][2] == "O") {
        console.log("diagonal")
        return "O wins"
    }

}


console.log("Pick a symbol for Player One");

//displayController();
























/*

function Gameboard() {
    const rows = 6;
    const columns = 7;
    const board = [];
  

    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(Cell());
      }
    }
 
    const getBoard = () => board;
  
    
    const dropToken = (column, player) => {
      
      const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);
  
      if (!availableCells.length) return;
  
      
      const lowestRow = availableCells.length - 1;
      board[lowestRow][column].addToken(player);
    };
  
  
    const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
      console.log(boardWithCellValues);
    };
  
    
    return { getBoard, dropToken, printBoard };
  }
  

  
  function Cell() {
    let value = 0;
  
    // Accept a player's token to change the value of the cell
    const addToken = (player) => {
      value = player;
    };
  
    // How we will retrieve the current value of this cell through closure
    const getValue = () => value;
  
    return {
      addToken,
      getValue
    };
  }
  

  function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
  ) {
    const board = Gameboard();
  
    const players = [
      {
        name: playerOneName,
        token: 1
      },
      {
        name: playerTwoName,
        token: 2
      }
    ];
  
    let activePlayer = players[0];
  
    const switchPlayerTurn = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;
  
    const printNewRound = () => {
      board.printBoard();
      console.log(`${getActivePlayer().name}'s turn.`);
    };
  
    const playRound = (column) => {
      // Drop a token for the current player
      console.log(
        `Dropping ${getActivePlayer().name}'s token into column ${column}...`
      );
      board.dropToken(column, getActivePlayer().token);
  

      switchPlayerTurn();
      printNewRound();
    };
  
    // Initial play game message
    printNewRound();
  

    return {
      playRound,
      getActivePlayer
    };
  }
  
  const game = GameController(); */

