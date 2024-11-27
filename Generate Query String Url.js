




const input = {
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
}

let  url="https://localhost:400";

// *Output:* 


https://localhost:400?keyOne=value one&keyTwo=value Two&keyThree=value Three



// Note: Do not modify the original object, return a new object.

function urlGenerator(obj,url)
{
    let result = url ;
    let concatentedPart; // ? will be added only once 

    for(key in obj) {
       
concatentedPart = !result.includes("?") ? ('?' + `${key}=` + `${obj[key]}` ) : ('&' + `${key}=` + `${obj[key]}` );
    //    if( !result.includes("?") )
    //      concatentedPart = '?' + `${key}=` + `${obj[key]}`;

    //     else{
    //         concatentedPart ='&' + `${key}=` + `${obj[key]}`
    //     }

        result += concatentedPart;
    }
    console.log(result);
}

urlGenerator(input,url);