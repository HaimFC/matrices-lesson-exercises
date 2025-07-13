const Matrix = require('./Matrix');


class TicTacToe{

    constructor(){
        this.TicTacToeMatrix = new Matrix(3, 3);
        this.lastPlayer = 0;
    }

    loadBoard() {
        this.TicTacToeMatrix._row = 3;
        this.TicTacToeMatrix._col = 3;
        this.TicTacToeMatrix.matrix = [];

        for (let i = 0; i < 3; i++) {
            this.TicTacToeMatrix.matrix.push(['.', '.', '.']);
        }
    }

    print(){
        this.TicTacToeMatrix.print();
    }

    checkForRow() {
        for (let row of this.TicTacToeMatrix.matrix) {
            if (
                row[0] !== "." &&
                row[0] === row[1] &&
                row[1] === row[2]
            ) {
                return true;
            }
        }
        return false;
    }
    checkForCol() {
        for (let col = 0; col < 3; col++) {
            const a = this.TicTacToeMatrix.matrix[0][col];
            const b = this.TicTacToeMatrix.matrix[1][col];
            const c = this.TicTacToeMatrix.matrix[2][col];

            if (a !== "." && a === b && b === c) {
                return true;
            }
        }
        return false;
    }

    play(rowNum, columnNum, player) {
        const currentVal = this.TicTacToeMatrix.get(rowNum, columnNum);
        if (this.lastPlayer == player){
            console.log("This is not your turn!!!.");
            return;
        }
        if (currentVal === "X" || currentVal === "O") {
            console.log("Can't do this move, cell already taken.");
            return; 
        }

        const symbol = player === 1 ? "X" : "O";
        this.TicTacToeMatrix.alter(rowNum, columnNum, symbol);
        this.lastPlayer = player;
        if (this.checkForRow() || this.checkForCol()) {
            console.log(`Congratulations Player ${player}`);
            this.resetGame();
        }
    }

    resetGame(){
        this.lastPlayer = 0;
        this.loadBoard();
    }
     
}


let board = new TicTacToe()
board.loadBoard()
    
board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1
    
board.print()