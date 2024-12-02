
class EventEmitter {

    constructor() {
        // Your code here
        this.events = {};


    }

    on(event, listener) {
        // Your code here
        if(!this.events.hasOwnProperty(event)) {
            console.log("Hi",listener);

            //this.events[event] = [].push(listener)

            this.events[event] = [listener];
        }
        else{
            this.events[event].push(listener);
            console.log(this.events);
            
        }

    }

    emit(event, ...args) {
        // Your code here
        if(!this.events.hasOwnProperty(event)) {
              console.error("You have not included event listener for this event");
              return;
          
        }
        else{
            this.events[event].forEach(callBack => {
                callBack(...args);
            });
        }

    }
            


    off(event, listener) {
        // Your code here
        if(!this.events.hasOwnProperty(event)){
            console.error("You cannot remove the listener of the event for which  you did not included any event listener");
            return;
        }
        else if(this.events[event].filter((callBack)=>callBack===listener).length===0){
            console.log(`The listener function that you want to delete does not exist for this event ${event}`);
            return;
            
        }
        else{
           this.events[event] =  this.events[event].filter(callBack=> callBack!==listener)
        }
    }
}

const emitter = new EventEmitter();

// console.log(JSON.stringify(emitter));
const greet = (name) => console.log(`Hello, ${name}`);
emitter.on('greet', greet);
emitter.on('greet', ()=>{
    console.log("Nahi");
    
});
// console.log(JSON.stringify(emitter));
emitter.emit('greet', 'Alice'); // Output: Hello, Alice
emitter.off('greet', greet);
emitter.off('greet', greet);
emitter.emit('greet', 'Bob'); // No output
