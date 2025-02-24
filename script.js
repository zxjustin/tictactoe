//empty 3x3 grid
function createBoard(){
    let board = [
        '','','',
        '','','',
        '','',''
    ];
    console.log(board);
    return board;
}

let gameBoard = createBoard();

function placeMarker(board, marker, position){
    if(board[position] === ''){
        board[position] = marker;
        console.log(board);
    } else {
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
    for (let i = 0; i < winningCombos.length; i++){
        const [a,b,c] = winningCombos[i];
        if(gameBoard[a] && gameBoard[a] ===gameBoard[b] && gameBoard[a] === gameBoard[c]){
            console.log('Winner! is', gameBoard[a]);
            return gameBoard[a];
        }
    }  
    return null
}
placeMarker(gameBoard, 'O', 0);
placeMarker(gameBoard, 'O', 4);
placeMarker(gameBoard, 'O', 8);
console.log(checkWinner());