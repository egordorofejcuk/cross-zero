class Figure {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}
let moves = [];
let key = 0;
document.querySelectorAll('.toggleBtn').forEach(button => {
    button.addEventListener('click', function () {
        let obj = new Figure(this.getAttribute('data-x'), this.getAttribute('data-y'), key === 0 ? "X" : "O");
        this.style.color = "black";
        this.disabled = true;
        if (key === 0) {
            this.textContent = 'X';
            key = 1;
            document.getElementById("text").textContent = "Ход нолика";
        } else {
            this.textContent = 'O';
            key = 0;
            document.getElementById("text").textContent = "Ход крестика";
        }
        moves.push(obj);
    });
});

function disableBut() {
    document.querySelectorAll('.toggleBtn').forEach(button => {
        button.disabled = true;
    });
}

function check() {
    let horizontalx = 0;
    let verticalx = 0;
    let diagonal1x = 0;
    let diagonal1y = 0;
    let horizontaly = 0;
    let verticaly = 0;
    let diagonal2x = 0;
    let diagonal2y = 0;
    let lastMove = moves[moves.length - 1];
    for (let i = 0; i < moves.length; i++) {
        if (moves[i].x === lastMove.x && moves[i].type === lastMove.type) {
            if (moves[i].type === "X") horizontalx++;
            else horizontaly++;
        }
        if (moves[i].y === lastMove.y && moves[i].type === lastMove.type) {
            if (moves[i].type === "X") verticalx++;
            else verticaly++;
        }
        if (moves[i].x === moves[i].y) {
            if (moves[i].type === "X") diagonal1x++;
            else diagonal1y++;
        }
        if (parseInt(moves[i].x) + parseInt(moves[i].y) === 4) {
            if (moves[i].type === "X") diagonal2x++;
            else diagonal2y++;
        }
    }
    if (horizontalx === 3 || verticalx === 3 || diagonal1x === 3 || diagonal2x === 3) {
        document.getElementById("text").textContent = "Крестики победили";
        disableBut();
    }
    else if (horizontaly === 3 || verticaly === 3 || diagonal1y === 3 || diagonal2y === 3) {
        document.getElementById("text").textContent = "Нолики победили";
        disableBut();
    }
    else if (moves.length === 9) {
        document.getElementById("text").textContent = "Ничья";
    }
}