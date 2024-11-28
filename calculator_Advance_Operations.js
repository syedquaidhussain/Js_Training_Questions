// Approach 1

// class AdvanceCalculator {

//     square(a){
//        return Math.pow(a,2);
//     }
//     sqrt(a){
//         if(a>=0){

//             return Math.sqrt(a);
//         }
//         else{
//             return `${Math.sqrt(-a)}i`;
//         } 

            
//     }
//     naturalLog(a){
//        if(a<=0)
//           {
//             console.error("Natural logarithm is undefined for zero or negative numbers");
//             return;
//          }
            
//        return Math.log(a);
//     }
//     logWithBase10(a){
//       if(a<=0)
//          {
//             console.log(" logarithm  with base 10 is undefined for zero or negative numbers");
           
//         }
//        return Math.log10(a)
//     }
//     sin(a){
//        return Math.sin(a);
//     }
//     cos(a){
//        return Math.cos(a);
//     }
//     tan(a){
//        return Math.tan(a);
//     }
//     power(a,b){
//        return Math.pow(a,b);
//     }
//     areaOfCircle(radius){
//         if(radius<0){
//          console.error("Radius can not be negative");
//          return null;
//         }
//         return Math.PI * Math.pow(radius,2);
//     }


// }


// Approach 2
class AdvanceCalculator {
   // Method to calculate the square of a number
   square(a) {
       return this.isValidNumber(a) ? a * a : "Invalid input.";
   }

   // Method to calculate the square root of a number
   sqrt(a) {
       if (!this.isValidNumber(a)) return "Invalid input.";
       return a >= 0 ? Math.sqrt(a) : `${Math.sqrt(-a)}i`; 
   }

   // Method to calculate the natural logarithm
   naturalLog(a) {
       if (!this.isValidNumber(a) || a <= 0) return "Natural log undefined for zero or negative numbers.";
       return Math.log(a);
   }

   // Method to calculate base-10 logarithm
   logWithBase10(a) {
       if (!this.isValidNumber(a) || a <= 0) return "Log base 10 undefined for zero or negative numbers.";
       return Math.log10(a);
   }

   // Method to calculate sine of an angle in radians
   sin(a) {
       return this.isValidNumber(a) ? Math.sin(a) : "Invalid input.";
   }

   // Method to calculate cosine of an angle in radians
   cos(a) {
       return this.isValidNumber(a) ? Math.cos(a) : "Invalid input.";
   }

   // Method to calculate tangent of an angle in radians
   tan(a) {
       return this.isValidNumber(a) ? Math.tan(a) : "Invalid input.";
   }

   // Method to calculate a raised to the power of b
   power(a, b) {
       return this.isValidNumber(a) && this.isValidNumber(b) ? Math.pow(a, b) : "Invalid input.";
   }

   // Method to calculate the area of a circle
   areaOfCircle(radius) {
       if (!this.isValidNumber(radius)) return "Invalid input.";
       if (radius < 0) return "Radius cannot be negative.";
       return Math.PI * radius * radius;
   }

   //  Method to validate numbers
   isValidNumber(input) {
       return typeof input === "number" && isFinite(input);
   }
}

// Create an instance of the calculator
const calci = new AdvanceCalculator();

// Test cases
console.log("Square:", calci.square(-2)); // 4
console.log("Square Root:", calci.sqrt(-4)); // 2i
console.log("Natural Log:", calci.naturalLog(2)); // 0.693...
console.log("Log Base 10:", calci.logWithBase10(-20)); // Error message
console.log("Sin (Radians):", calci.sin(2)); // 0.909...
console.log("Cos (Radians):", calci.cos(2)); // -0.416...
console.log("Tan (Radians):", calci.tan(2)); // -2.185...
console.log("Power:", calci.power(2, -2)); // 0.25
console.log("Area of Circle:", calci.areaOfCircle(-2)); // Error message


    



