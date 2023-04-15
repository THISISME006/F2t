/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  window.PrintDeveloperbyMap = function() {
    //Write your code here , just console.log
    const developers = employees.filter(employee => employee.profession === "developer");
    const names = developers.map(developer => developer.name);
    console.log(names);
  }
  
  window.PrintDeveloperbyForEach = function() {
    //Write your code here , just console.log
    employees.forEach(employee => {
        if(employee.profession === "developer") {
          console.log(employee);
        }
    });
  }
  
  window.addData = function() {
    //Write your code here, just console.log
    const newEmployee = {id:5, name:"David", age:"30", profession:"developer"};
    employees.push(newEmployee);
    console.log(employees);

  }
  
  window.removeAdmin = function() {
    //Write your code here, just console.log
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
  }
  
  window.concatenateArray = function() {
    //Write your code here, just console.log
    const newArray = [
        {id:6, name:"Lisa", age:"25", profession:"designer"},
        {id:7, name:"Peter", age:"38", profession:"manager"},
        {id:8, name:"Sarah", age:"27", profession:"developer"}
      ];
      const combinedArray = employees.concat(newArray);
      console.log(combinedArray);

  }
