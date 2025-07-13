/* Write your code below */
class Matrix{
    constructor(row, col){
        this._row = row;
        this._col = col;
        this.matrix = [];
        this.generateMatrix();
    }

    generateMatrix() {
    this.matrix = []; 
    let counter = 1;

    for (let i = 0; i < this._row; i++) {
        const row = [];
        for (let j = 0; j < this._col; j++) {
            row.push(counter++);
        }
        this.matrix.push(row);
    }
}

    print() {
        for (let i = 0; i < this._row; i++) {
            let rowStr = "";
            for (let j = 0; j < this._col; j++) {
                rowStr += this.matrix[i][j] + "\t";
            }
            console.log(rowStr);
        }
    }

    get(row,col){
        return(this.matrix[row][col]);
    }

    alter(row, col, val){
        this.matrix[row][col] = val; 
    }

    printColumn(col){
        for (let val of this.matrix){
            console.log(val[col]);
        }
    }

    printRow(row){
        for (let val of this.matrix[row]){
            console.log(val);
        }
    }

    findCoordinate(value){
        for (let row in this.matrix){
            for (let col in this.matrix[row]){
                if(this.matrix[row][col] === value)
                    return {x:col, y:row}
            }
        }        
    }
}
module.exports = Matrix;



// //You can paste the code from the lesson below to test your solution
// let m = new Matrix(3, 4)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */
    
//  m.alter(0, 0, m.get(1, 1))
//  m.printColumn(0) //prints 6, 5, 9 (separate lines)
//  m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

// m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

/* Do not remove the exports below */
module.exports = Matrix