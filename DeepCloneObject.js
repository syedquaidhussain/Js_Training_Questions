
function deepClone(obj) {

    // Checking if the value is not an object or is null
    if (typeof obj !== 'object' || obj === null) {
        return obj;  // Base case
    }

    // Handling arrays separately
    if (Array.isArray(obj)) {
        let arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]); 
        }
        return arrCopy;
    }

    // Handling objects (non-array)
    let objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {  
            objCopy[key] = deepClone(obj[key]);
        }
    }

    return objCopy;
}

function deepClone(obj) {

    // Checking if the value is not an object or is null
    if (typeof obj !== 'object' || obj === null) {
        return obj;  // Base case
    }

    // Handling arrays separately
    if (Array.isArray(obj)) {
        let arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]); 
        }
        return arrCopy;
    }

    // Handling objects (non-array)
    let objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {  
            objCopy[key] = deepClone(obj[key]);
        }
    }

    return objCopy;
}

const original = {
    name: "Ravi Kumar",
    age: 28,
    address: {
        street: "15, MG Road",
        city: "Bangalore",
        coordinates: {
            lat: 12.9716,
            long: 77.5946
        }
    },
    hobbies: ["cricket", "reading books", "traveling"]
};

// Deep cloning the object
const cloned = deepClone(original);

// Modifying the cloned object
cloned.name = "Anjali Sharma";
cloned.address.city = "Mumbai";
cloned.hobbies[0] = "painting";

// Checking that the original object is unchanged.
console.log("Original:", original);
console.log("Cloned:", cloned);

