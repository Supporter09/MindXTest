function merge2String(str1,str2) {
    var a = str1.split("").filter(Boolean);

    var b = str2.split("");

    var mergedString = '';


    for(var i = 0; i < a.length || i < b.length; i++) {  //loop condition checks if i is less than a.length or b.length
    if(i < a.length)  //if i is less than a.length add a[i] to string first.
        mergedString +=  a[i];
    if(i < b.length)  //if i is less than b.length add b[i] to string.
        mergedString +=  b[i];
    }
    return mergedString;
    
}

let string1 =prompt("Nhap string 1: ")
let string2 = prompt("Nhap string 2: ")
console.log(merge2String(string1,string2))