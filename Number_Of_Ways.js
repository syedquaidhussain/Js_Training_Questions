function countWays(arr, targetSum) {
    // Helper function to recursively find ways to reach the target sum

    function findWays(index, currentSum) {
        // If we've processed all elements, check if the current sum equals the target
        if (index === arr.length) {
            return currentSum === targetSum ? 1 : 0;
        }

        // Recursively try both adding and subtracting the current element
        const add = findWays(index + 1, currentSum + arr[index]);
        const subtract = findWays(index + 1, currentSum - arr[index]);

    
        return add + subtract;
    }

  
    return findWays(0, 0);
}


const arr = [-1, 9, 8, -3, 4];
const targetSum = 5;
console.log(countWays(arr, targetSum)); 
