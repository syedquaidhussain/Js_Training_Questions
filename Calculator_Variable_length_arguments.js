class Calculator{

    sum(...args){
        return  this.#validate(args) ? args.reduce((acc,curr)=> acc+curr ,0) : `You have not given valid numbers`;
    }
        
        
    sub(...args){

        return this.#validate(args) ? args.reduce((acc,curr)=> acc-curr ) : `You have not given valid numbers`;

    }
        

    mul(...args){
   return this.#validate(args) ? args.reduce((acc,curr)=> acc*curr ) : `You have not given valid numbers`;
    }

    div(...args){
        
        args.forEach(element =>{
            if(element<=0) {

                console.log(element);
                return ("Number can not be zero or negative");
            }
        })
                
   return this.#validate(args) ? args.reduce((acc,curr)=> acc/curr ) : `You have not given valid numbers`;
    }

    mod(...args){
   return this.#validate(args) ? args.reduce((acc,curr)=> acc%curr) : `You have not given valid numbers`;
    }
    //  Made it private
    #validate (args) {
        
        args.forEach(element => {
            if( typeof element !== 'number' || !isFinite(element)) {
                
                
                return false ;
            }
     
             
        });
        return true;
    
    }
}

const c = new Calculator;

console.log("sum ",c.sum(1,2,3));
console.log("sub ",c.sub(1,2,3));
console.log("mul ",c.mul(0,2,3));
console.log("div ",c.div(1,2,-3));
console.log("mod ",c.mod(1,2,3));
