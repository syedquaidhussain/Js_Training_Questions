function sumNestedArray(arr) {
    // Base case: 
    if (!Array.isArray(arr)) {
        return typeof arr === "number" ? arr : 0;
    }

    // Using recursion with  reduce method to calculate the sum
    return arr.reduce((sum, item) => sum + sumNestedArray(item), 0);
}


console.log(sumNestedArray([1, [2, [3, 4]], 5])); 
console.log(sumNestedArray([10, [20, [30, 40]], [50]])); 
console.log(sumNestedArray([1, "a", [2, [3, "b", 4]], 5])); 
