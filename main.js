let title = document.querySelector('.title');
let turn = 'X';
let squares = [];
let gameOver = false;

function endGame(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} is the winner!`;
    document.getElementById('item' + num1).style.backgroundColor = 'rgb(255, 191, 0)';
    document.getElementById('item' + num2).style.backgroundColor = 'rgb(255, 191, 0)';
    document.getElementById('item' + num3).style.backgroundColor = 'rgb(255, 191, 0)';
    gameOver = true;
}

function checkDraw() {
    return squares.every(square => square !== '');
}

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if (squares[1] === squares[2] && squares[2] === squares[3] && squares[1] !== '') endGame(1, 2, 3);
    else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] !== '') endGame(1, 4, 7);
    else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[1] !== '') endGame(1, 5, 9);
    else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !== '') endGame(2, 5, 8);
    else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[3] !== '') endGame(3, 6, 9);
    else if (squares[3] === squares[5] && squares[5] === squares[7] && squares[3] !== '') endGame(3, 5, 7);
    else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[4] !== '') endGame(4, 5, 6);
    else if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] !== '') endGame(7, 8, 9);
    else if (checkDraw() && !gameOver) title.innerHTML = "It's a Draw!";
}

function game(id) {
    if (gameOver) return; 
    let element = document.getElementById(id);
    if (element.innerHTML === '') {
        element.innerHTML = turn;
        turn = turn === 'X' ? 'O' : 'X';
        title.innerHTML = turn + " turn";
    }
    winner();
}

function resetGame() {
    for (let i = 1; i < 10; i++) {
        document.getElementById('item' + i).innerHTML = '';
        document.getElementById('item' + i).style.backgroundColor = '#e74c3c';
    }

    // Toggle the turn between 'X' and 'O'
    if (turn === 'X') {
        title.innerHTML = "O turn";
        turn = 'O';
    } else {
        title.innerHTML = "X turn";
        turn = 'X';
    }

    squares = [];
    gameOver =false;
}