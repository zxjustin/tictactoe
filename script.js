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
            document.getElementById("message").textContent = "It's a Tie! 😐";
            gameOver = true;
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
    
   for (let [a, b, c] of winningCombos) {
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById("message").textContent = `Player ${gameBoard[a]} Wins! 🎉`;
            document.querySelectorAll(".cell")[a].classList.add("winner");
            document.querySelectorAll(".cell")[b].classList.add("winner");
            document.querySelectorAll(".cell")[c].classList.add("winner");
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

        if (value === 'X'){
            cell.innerHTML = '<img src = "x.png" alt = "X" width = "100" height = "100">';
        } else if (value === 'O'){
            cell.innerHTML = '<img src = "o.png" alt = "O" width = "100" height = "100">';
        }
       
        cell.addEventListener("click", () => placeMarker(gameBoard, currentPlayer, index));
        boardContainer.appendChild(cell);
    })
}

document.getElementById("reset").addEventListener("click",(resetGame)); 

function resetGame(){
    const boardContainer = document.getElementById('board');
    boardContainer.style.opacity = "0"; // fades out
    setTimeout(() => {
    gameBoard = createBoard();
    gameOver = false;
    currentPlayer = 'X';
    document.getElementById("message").textContent = "";
    document.querySelectorAll(".cell").forEach(cell => cell.classList.remove("winner"))
    renderBoard();
    boardContainer.style.opacity = "1"; // fades in
    }, 100);
}
console.log(checkWinner());
renderBoard();