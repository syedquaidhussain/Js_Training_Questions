// // add

// function add(a,b) {
//     return a+b;
// }
// function sub(a,b) {
//     return a-b;
// }
// function mul(a,b) {
//     return a*b;
// }

// function divide(a,b) {
//     return a/b;
// }


// function modu(a,b) {
//     return a%b;
// }


// console.log(divide(10,0));


class Calculator {
    add(a,b){
        return a+b;
    }
    sub(a,b){
        return a-b;
    }
    mul(a,b){
        return a*b;
    }
    div(a,b){
        if(b===0) {
            console.error("anything divide by zero gives infinity");
        }
        else
         return a/b;
    }
    mod(a,b){
        return a%b;
    }
}


const calci = new Calculator();
console.log("Addition is",calci.add(2,2))
console.log("sub is",calci.sub(2,2))
console.log("multiply is",calci.mul(2,2))
console.log("divide  is",calci.div(2,2))
console.log("modlus is",calci.mod(2,2))
console.log("Error eg",calci.div(2,0))