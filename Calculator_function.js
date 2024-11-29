
function calculator(func,...args){
//Verifying and validating the number of arguments allowed as per the requirement of function provided
if(typeof func !== 'function'){
    return 'You have not given valid function';
}
if(func.length !== args.length){
    return `Function is expecting ${func.length} arguments but you have provided ${args.length} arguments`;
}


try{

    return func(...args);
} 
catch(error){
  return  `Error is ${error.message}`;
}
    
    


}

const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

console.log(calculator((x,y)=>x+y,1,2));

console.log(calculator(Math.pow,1,2));

console.log(calculator(undefined,1,2));

console.log(calculator(celsiusToFahrenheit,100));

// Function to calculate the area of circle 
console.log(calculator((radius)=>{
return (Math.PI.toFixed(2) * (radius*radius));
}, 7));