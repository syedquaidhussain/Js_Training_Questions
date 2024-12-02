




// Approach 1
// const employees={
//     "employees": [
//       {
//         "employee_id": "E000",
//         "name": "John Doe",
//         "role": "Developer"
//       },
//       {
//         "employee_id": "E002",
//         "name": "Jane Smith",
//         "role": "Designer"
//       },
//       {
//         "employee_id": "E003",
//         "name": "Emily Davis",
//         "role": "Project Manager"
//       }
//     ]
//   }


//   const projects= {
//     "projects": [
//       {
//         "project_id": "P001",
//         "name": "Project Alpha",
//         "hours": [
//           { "employee_id": "E001", "hours_worked": 120 },
//           { "employee_id": "E002", "hours_worked": 80 }
//         ],
//         "rating": 4.5
//       },
//       {
//         "project_id": "P002",
//         "name": "Project Beta",
//         "hours": [
//           { "employee_id": "E001", "hours_worked": 150 },
//           { "employee_id": "E003", "hours_worked": 200 }
//         ],
//         "rating": 4.7
//       },
//       {
//         "project_id": "P003",
//         "name": "Project Gamma",
//         "hours": [
//           { "employee_id": "E002", "hours_worked": 50 },
//           { "employee_id": "E003", "hours_worked": 60 }
//         ],
//         "rating": 4.0
//       }
//     ]
//   }
  
//   // traversing Employee array
// const finalOutput =    employees["employees"].map(employee=>{
    
//       const ansProjectArray = []; // will store projects and its description for employees 
//        let ratingSum = 0;
//        let count = 0;
//        let totalWorkingHours=0;
      
//       //  traversing the input  project array
//     projects["projects"].forEach((projectDescription)=>{
        
//         ( {hours} = projectDescription);

//       const ans =  hours.find((arrayElement)=>employee.employee_id===arrayElement.employee_id);
       
//        if(ans!==undefined){ // employee did not do work on that project

//           ansProjectArray.push({

//            "project_id":projectDescription.project_id,
//             "name":projectDescription.name,
//            "hours_worked": ans.hours_worked,
//             "rating" : projectDescription.rating

//           });
          
//           ratingSum = ratingSum + projectDescription.rating; 
//           totalWorkingHours = totalWorkingHours + ans.hours_worked;
//           count++; //for this ratingSum/count
//         }
     
//     });
    
//     //If employee did not work on any project
//        if(ansProjectArray.length===0) {
//         return{
//           "employee_id": employee.employee_id,
//           "name":employee.name,
//           "role":employee.role,
//            "status":"Has not worked on any project"
          
//           }

//        }
//        else{

//          return {
//            "employee_id": employee.employee_id,
//             "name":employee.name,
//             "role":employee.role,
//             "total_hours_worked": totalWorkingHours,
//             "average_project_rating":Number((ratingSum/count).toFixed(2)), //tofixed coverts the number inti string so converting into number 
//             "projects":ansProjectArray
//         }
//       }
//       })


      

//   console.log(finalOutput);



  // Approach 2

const employeeProjectsMap = new Map();

projects["projects"].forEach((project) => {
  project.hours.forEach(({ employee_id, hours_worked }) => {
    if (!employeeProjectsMap.has(employee_id)) {
      employeeProjectsMap.set(employee_id, []);
    }
    employeeProjectsMap.get(employee_id).push({
      project_id: project.project_id,
      name: project.name,
      hours_worked: hours_worked,
      rating: project.rating,
    });
  });
});

// Processing employees
const finalOutput = employees["employees"].map((employee) => {
  const employeeProjects = employeeProjectsMap.get(employee.employee_id) || [];

  if (employeeProjects.length === 0) {
    return {
      employee_id: employee.employee_id,
      name: employee.name,
      role: employee.role,
      status: "Has not worked on any project",
    };
  }

  // Calculate total hours and average project rating
  const totalHours = employeeProjects.reduce((sum, project) => sum + project.hours_worked, 0);
  const averageRating = (
    employeeProjects.reduce((sum, project) => sum + project.rating, 0) / employeeProjects.length
  ).toFixed(2);

  return {
    employee_id: employee.employee_id,
    name: employee.name,
    role: employee.role,
    total_hours_worked: totalHours,
    average_project_rating: Number(averageRating),
    projects: employeeProjects,
  };
});

console.log(JSON.stringify(finalOutput, null, 2));

  