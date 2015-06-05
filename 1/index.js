window.addEventListener('load', function () {
    var button = document.querySelector('.startNewGame');
    var field = document.querySelector('.field');
    var cells = document.querySelectorAll('.cell');
    var winnerMessage = document.querySelector('.winner-message');
    var nextMove = 'x';

    button.addEventListener('click', function startNewGame() {
        for (var i = 0; i < cells.length; i++) {
            cells[i].classList.remove('x');
            cells[i].classList.remove('o');
        }
        nextMove = 'x';
        winnerMessage.innerHTML = '';
    });

    field.addEventListener('click', function handleCellClick(e) {
        if (
            !e.target.classList.contains('cell') ||
            e.target.classList.contains('x') ||
            e.target.classList.contains('o')
        ) {
            return;
        }
        if (getWinner()) {
            return;
        }
        e.target.classList.add(nextMove);
        if (nextMove === 'x') {
            nextMove = 'o';
        } else {
            nextMove = 'x';
        }

        var winner = getWinner();
        if (winner) {
            if (winner === 'x') {
                winnerMessage.innerHTML = 'Крестик победил';
            } else {
                winnerMessage.innerHTML = 'Нолик победил';
            }
        }
    });
});