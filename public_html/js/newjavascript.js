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