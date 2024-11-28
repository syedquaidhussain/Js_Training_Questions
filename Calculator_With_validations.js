function validate(a ='default',b='default',...rest) {


    
    //checking Number of parameters is less or more than the number of arguments.
    if(a==='default'){
        console.error("You have not given first parameter or passed variable has not been initialised");
           return;  
    }

    if(b === 'default') {
        console.error("You have not given second parameter or passed variable has not been initialised");
        return;
    }

    //if extra parameter has been passed
    if(rest.length > 0) {
        console.error("You can not give more than 2 arguments");
        return;
        
    }
        if(isNaN(a) || isNaN(b)){
            console.error("Invalid Input Arguments can not be NaN");
            return;
        }
            

   if ( typeof a!== 'number' || typeof b!=='number'){
    console.error("You can give only numbers in the arguments");
    return;

   }

       return true; 
     

     
        




 






     

}

 validate(NaN);



