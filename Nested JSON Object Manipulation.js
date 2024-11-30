const jsonObject = {
         "company": {
           "departments": [
             {
               "name": "Engineering",
               "employees": [
                 { "id": 1, "name": "Alice", "role": "Engineer" },
                 { "id": 2, "name": "Bob", "role": "Senior Engineer" }
               ]
             },
             {
               "name": "HR",
               "employees": [
                 { "id": 3, "name": "Carol", "role": "HR Manager" }
               ]
             }
           ]
         }
       };


       function addEmployee(json,departmentName,employee){

        //Nested destructuring for getting department array
        const {company:{departments}}= json;

        const departmentToBeUpdated =  departments.find((element)=>{
            
        return element.name === departmentName;

        });

        departmentToBeUpdated.employees.push(employee);
         console.log("Nested",JSON.stringify(json))


//    Note->  Destructuring does shallow copy 
      
}



       function removeEmployee(json,departmentName,employee){

        //Nested destructuring for getting department array
        const {company:{departments}}= json;

        const department =  departments.find((element)=>{
            
            
                return element.name === departmentName  ;
             
            
        });

            const {employees:employeeArary} = department;
            
           const index =  employeeArary.findIndex((element)=>{
                return element.id === employee.id
                })
                    
            console.log("index to be deleted",index);
            
                if(index !== -1){
                    employeeArary.splice(index,1);

                }
                else{
                    console.log("Your employee does nit exist ");
                    
                }


            
                console.log("Nested",JSON.stringify(jsonObject))
            
        
       
            }


            function updateEmployee(json,departmentName,employee) {
                const {company:{departments}}= json;

             const department =  departments.find((element)=>{
                
            
                return element.name === departmentName  ;
             
            
        });

            const {employees:employeeArary} = department;
            
           const index =  employeeArary.findIndex((element)=>{
                return element.id === employee.id
                })
                    
            
                if(index !== -1){
                    employeeArary.splice(index,1,employee);

                }
                else{
                    console.log("Your employee does not exist ");
                    
                }


            
                console.log("Nested",JSON.stringify(jsonObject))
            

            }

            function findEmployee(json,departmentName) {
                const {company:{departments}}= json;

                const department =  departments.find((element)=>{
                   
               
                   return element.name === departmentName  ;
                
               
           });
           
           console.log("Total are ", department.employees)
            
          }
       
       
                  
       function manageCompany(json,operation,departmentName,employee) {

          if(operation === 'add') {
             addEmployee(json,departmentName,employee);
          }
          if(operation === 'remove') {
            removeEmployee(json,departmentName,employee)

       }
          if(operation === 'update') {
            updateEmployee(json,departmentName,employee)

       }
          if(operation === 'find') {
            findEmployee(json,departmentName)

       }

       }




       console.log("Original json is ",JSON.stringify(jsonObject))
    //    manageCompany(jsonObject,"add","HR",{ "id": 4, "name": "Carol", "role": "HR Manager" });
    //    manageCompany(jsonObject,"remove","HR",{ "id": 4 });

//    manageCompany(jsonObject, "update", "Engineering", { "id": 2, "name": "Robert", "role": "Lead Engineer" });
manageCompany(jsonObject, "find", "Engineering");
