

function flattenObject(obj, parentKey = '', result = {}) {
    
    for (const key in obj) {
        
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null) {

                // Recursively flatten nested objects
                flattenObject(obj[key], newKey, result);
            } else {

               
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

// Example usage
const a = {
    keyOne: "value One",
    keyTwo: "value Two",
    keyThree: "value Three",
    keyFour: {
        keyA: true,
        keyB: false,
        keyC: {
            keyCOne: "key C one value",
            keyCTwo: "key C two value",
            keyCThree: 1234
        }
    }
};

const ans = flattenObject(a);

console.log(ans);

