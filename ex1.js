function findOppositeNumber(n,inputNumber) {
    if (4<=n<=20) {
        let result = inputNumber+(n/2);
        if(result<n){
            console.log(result);
        }else if(result>=n){
            console.log(result-n)
        }
    }
}

const n = prompt("nhap n: ")
const inputNumber = prompt("Nhap input number")
findOppositeNumber(parseInt(n),parseInt(inputNumber))