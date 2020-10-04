function findOppositeNumber(n,inputNumber) {
    if (4<=n<=20) {
        let result = inputNumber+(n/2);
        if(result<n){
            alert(result);
        }else if(result>=n){
            alert(result-n)
        }
    }
}

const n = prompt("nhap n: ")
const inputNumber = prompt("Nhap input number")
findOppositeNumber(parseInt(n),parseInt(inputNumber))