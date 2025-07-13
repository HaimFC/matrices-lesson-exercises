/* Write your code below */
const Matrix = require('./Matrix');

class EmployeeMatrix{
    constructor(){
        this.EmployeeMatrix = new Matrix(0, 0);
    }

    loadData(salaryData) {
        const row = salaryData.length;
        const col = Object.keys(salaryData[0]).length;

        this.EmployeeMatrix._row = row;
        this.EmployeeMatrix._col = col;
        this.EmployeeMatrix.matrix = [];

        for (let i = 0; i < row; i++) {
            const values = Object.values(salaryData[i]);
            this.EmployeeMatrix.matrix.push(values);
        }
    }
    print(){
        this.EmployeeMatrix.print();
    }

    getEmployees(department){
        let names = [];
        for(let row of this.EmployeeMatrix.matrix){
            if(department === row[2])
                names.push(row[1]);
        }
        return names;
    }

    getTotalSalary(department){
        let salaries = 0;
        for(let row of this.EmployeeMatrix.matrix){
            if(department === row[2])
                salaries += row[3];
        }
        return salaries;
    }

    findRichest(){
        let richest = this.EmployeeMatrix.matrix[0][1];
        let biggestSalary = this.EmployeeMatrix.matrix[0][3];
        for(let row of this.EmployeeMatrix.matrix){
            if(row[3] > biggestSalary){
                biggestSalary = row[3];
                richest = row[1];
            }
        }
        return richest;
    }
}



//You can paste the code from the lesson below to test your solution
let data = [
        { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
        { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
        { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
        { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
        { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
        { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]


let m = new EmployeeMatrix()
    
m.loadData(data)
m.print()


//prints
// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200


console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]


console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300

console.log(m.findRichest()) //prints Anisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix