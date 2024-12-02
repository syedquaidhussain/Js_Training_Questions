// const operators= ['+','-','*','/'];

// const priority = {
//     '+':1,
//     '-':1,
//     '*':2,
//     '/':2,
    
// };

// function evaluate(operand1, operand2,operator) {
//     switch(operator){
//         case '+':return operand1 + operand2;
//         case '-':return operand1 - operand2;
//         case '*':return operand1 * operand2;
//         case '/':return operand2 / operand1;
//     }


// }

// function calculator(expression) {
   
//     const tokens = expression.match(/(\d+(\.\d+)?)|[+\-*/()]/g); ///////

//     const valuesStack = [];  
//     const operatorStack = [];  
     
//     tokens.forEach(token => {
    
//         if(Number(token)) {
//             valuesStack.push(token);
//         }
//         else if(token === '(') {
//             operatorStack.push(token);

//         }
//         else if(token === ')'){
//             while(token!=='(' || valuesStack.length!==0){ /////operator.Stack !==0
//                 const operand1 = valuesStack.pop();
//                 const operand2 = valuesStack.pop();
//                 const operator = valuesStack.pop();
//                 valuesStack.push(evaluate(operand1,operand2,operator));

//             }
//             operatorStack.pop();//pop ( 


//         }
//         else if(operators.includes(token)){ // token is an valid operator 
      
//             // we will have to check the priority before putting it to the stack.
//             if(operatorStack.length===0)
//             {
//                 operatorStack.push(token);
//             }
//             else if()
         
//         }
          
//     });

        


// }





function calculateExpression(expression) {
    const operators = ['+', '-', '*', '/'];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

    // Function to apply an operation to two numbers
    const applyOperation = (a, b, operator) => {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return 0;
        }
    };

    // Function to evaluate the tokenized expression
    const evaluate = (tokens) => {

        let values = []; // Stack for numbers
        let ops = [];    // Stack for operators

        for (let i = 0; i < tokens.length; i++) {

            const token = tokens[i];

            // If the token is a number, push it to the values stack
            if (!isNaN(token)) {
                values.push(Number(token));
            } 
            // If the token is an opening parenthesis, push it to the ops stack
            else if (token === '(') {
                
                ops.push(token);
            } 
            // If the token is a closing parenthesis, solve the entire sub-expression
            else if (token === ')') {
                while (ops.length && ops[ops.length - 1] !== '(') {
                    const operator = ops.pop();
                    const val2 = values.pop();
                    const val1 = values.pop();
                    values.push(applyOperation(val1, val2, operator));
                }
                ops.pop(); // Removing the opening parenthesis
            } 

            
            // If the token is an operator
            else if (operators.includes(token)) {
                // Process operators with higher or equal precedence
                while (ops.length > 0) {
                    const topOperator = ops[ops.length - 1];
                    if (precedence[topOperator] >= precedence[token]) {
                        const operator = ops.pop();
                        const val2 = values.pop();
                        const val1 = values.pop();
                        values.push(applyOperation(val1, val2, operator));
                    } else {
                        break; // Stop if the precedence is lower
                    }
                }
                // Push the current operator to the stack
                ops.push(token);
            }
        }

        // Process any remaining operators in the stack
        while (ops.length) {
            const operator = ops.pop();
            const val2 = values.pop();
            const val1 = values.pop();
            values.push(applyOperation(val1, val2, operator));
        }

        return values.pop(); // The result is the last remaining value
    };

    const tokens = expression.match(/(\d+(\.\d+)?)|[+\-*/()]/g);
    return evaluate(tokens);
}


const expression = "1 + (2 + 3) * 4 - 10 / 2";
console.log(calculateExpression(expression)); 
