const buttons = document.querySelectorAll("button")
console.log(buttons);

buttons.forEach((button)=> button.addEventListener("click",()=>{

    const input = button.previousElementSibling;
    if(!input.value) {
        alert("Enter the value");
        
    }
    else{
        const child = document.createElement("p")
        child.textContent = `Bid for ${input.name} is ${input.value} (Placed at  ${new Date().toLocaleString()}) `;
        const Bids_Area= document.getElementById("Bids_Area");

        Bids_Area.append(child);
     
        
        
    }


    }))