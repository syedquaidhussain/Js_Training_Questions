var expected = {foo: 5};
var actual = {foo: null}; 

// var expected = {foo: undefined};
// var actual = {foo:3}; // this case has not been covered 


function assertObjectsEqual(actual , expected , string) {

    
    //We will do deep comparison
     const keysOfActualObject = Object.keys(actual);

     const keysOfExpectedObject = Object.keys(expected);

     const valuesOfActualObject = Object.values(actual);

     const valuesOfExpectedObject = Object.values(expected);

     const lengthOfActualObject = keysOfActualObject.length;

     const lengthOfExpectedObject = keysOfExpectedObject.length;

     
     //Checking if number of properties are equal
    if(lengthOfActualObject !== lengthOfExpectedObject)
    {
        return false;
    }
     
    //checking properties have equal values 
    for(let i=0;i<lengthOfActualObject;i++) {
    
       if( typeof valuesOfActualObject[i] === 'object' && typeof valuesOfExpectedObject[i] === 'object' ){
        // recusrive Call
       assertObjectsEqual(valuesOfActualObject[i],valuesOfExpectedObject[i],string)
       }

       if(valuesOfActualObject[i] !== valuesOfExpectedObject[i]) {
        return false;
       }

    }


return true;

}

if(assertObjectsEqual(actual,expected,'detects that two objects are equal')){
    console.log("Passed");
    
}

else{
    console.log(`Failed: Expected this ${JSON.stringify(expected)} but got this ${JSON.stringify(actual)}`);
    // Will not work if object has property that has undefined value

    // console.log("Failed: Expected this ",expected );
    // console.log("but got this ",actual );
   
    
    
}



