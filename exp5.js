let employees = [];


function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = document.getElementById("salary").value;
    let dept = document.getElementById("dept").value;

    if (name === "" || id === "" || salary === "" || dept === "") {
        alert("Please fill all fields!");
        return;
    }

    let emp = {
        name: name,
        id: id,
        salary: Number(salary),
        department: dept
    };

    employees.push(emp);

    alert("Employee Added!");


    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}


function displayEmployees() {
    let output = "<h2>All Employees</h2>";

    for (let emp of employees) {
        output += `<p>${emp.name} | ID: ${emp.id} | ₹${emp.salary} | ${emp.department}</p>`;
    }

    document.getElementById("output").innerHTML = output;
}


function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "<h2>Salary > 50000</h2>";
    filtered.forEach(emp => {
        output += `<p>${emp.name} | ₹${emp.salary}</p>`;
    });

    document.getElementById("output").innerHTML = output;
}


function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.getElementById("output").innerHTML =
        `<h2>Total Salary: ₹${total}</h2>`;
}


function averageSalary() {
    if (employees.length === 0) return;

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        `<h2>Average Salary: ₹${avg}</h2>`;
}


function countDepartment() {
    let dept = prompt("Enter Department:");

    let count = employees.filter(emp =>
        emp.department.toLowerCase() === dept.toLowerCase()
    ).length;

    document.getElementById("output").innerHTML =
        `<h2>${dept} Employees: ${count}</h2>`;
}