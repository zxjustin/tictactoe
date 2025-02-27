//empty 3x3 grid
function createBoard(){
    return [
        '','','',
        '','','',
        '','',''
    ];
}

let gameBoard = createBoard();
let currentPlayer = 'X';
let gameOver = false;

function placeMarker(board, marker, position){
    if (gameOver) //stop games if game is finished
        return;
    if(board[position] === ''){
        board[position] = marker;
        renderBoard(); //render the board update ui

        if (checkWinner()){
            alert(`Player ${marker} wins!`);
            gameOver = true;
            console.log('Winner is', marker);
            return;
        }

        // Check for tie
        if (!gameBoard.includes('')) {
            alert('It\s a tie!');
            gameOver = true;
            console.log("TIE");
            return;
        }
        
        //switch turn
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    } else {
        //alert('This spot is already taken!');
        console.log('This spot is already taken!');
    } 
}

function checkWinner(){
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8], //horizontal
        [0,3,6], [1,4,7], [2,5,8], //vertical
        [0,4,8], [2,4,6] //diagonal
    ];
    //array destructing
    /*for (let i = 0; i < winningCombos.length; i++){
        const [a,b,c] = winningCombos[i];
        if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
            console.log('Winner! is', gameBoard[a]);
            return gameBoard[a];
        }
    }  */ 
   for (let [a, b, c] of winningCombos) {
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return [gameBoard[a], [a, b, c]]; // Return winner + winning cells
        }
    }  
    return null
}

function renderBoard(){
    const boardContainer = document.getElementById('board');
    boardContainer.innerHTML = "";
    
    gameBoard.forEach((value , index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = value; // puts 'X' or 'O' in the cell

        cell.addEventListener("click", () => placeMarker(gameBoard, currentPlayer, index));
        boardContainer.appendChild(cell);
    })
}

document.getElementById("reset").addEventListener("click",(resetGame)); 

function resetGame(){
        gameBoard = createBoard();
        gameOver = false;
        currentPlayer = 'X';
        renderBoard();
}
console.log(checkWinner());
renderBoard();