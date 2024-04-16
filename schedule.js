

class Employee {
    constructor(name, locations, regSched, satSched){
        this.name = name;
        this.locations = [locations];
        this.regSched = regSched;
        this.satSched = satSched;
    }
}

let employees = []
const addEmployee = (name, locations, regSched, satSched)=>{
    let newEmployee = new Employee(name, locations, regSched, satSched)
    employees.push(newEmployee)
    return newEmployee
}


window.addEventListener("DOMContentLoaded", ()=>{
    const add = document.createElement('button')

})