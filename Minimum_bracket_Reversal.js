
function bracketReversal(inputbracket) {
    let openCount = 0; // Counts unbalanced '{'
    let closeCount = 0; // Counts unbalanced '}'

    for (let i = 0; i < inputbracket.length; i++) {
        if (inputbracket[i] === '{') {
            openCount++;
        } else {
            if (openCount > 0) {
                openCount--; // Balance one '{' with '}'
            } else {
                closeCount++; // Unbalanced '}'
            }
        }
    }

    // If total unbalanced brackets are odd, return -1
    if ((openCount + closeCount) % 2 !== 0) {
        return -1;
    }

  
    return Math.ceil(openCount / 2) + Math.ceil(closeCount / 2);
}


console.log(bracketReversal('{{{'));         
console.log(bracketReversal('{{{{}}'));
console.log(bracketReversal('}}}{'));        
console.log(bracketReversal('{{{{}}}}'));    
console.log(bracketReversal('}}}{}}{'));     


