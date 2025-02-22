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
console.log("test");
let gameBoard = createBoard();

function placeMarker(board, marker, position){
    if(board[position] === ''){
        board[position] = marker;
        console.log(board);
    } else {
        console.log('This spot is already taken!');
    } 
}

function displayWinner(){
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== ''){
        console.log('Winner!');
    } 

}
placeMarker(gameBoard, 'X', 0);
placeMarker(gameBoard, 'x', 1);
placeMarker(gameBoard, 'X', 2);
displayWinner();