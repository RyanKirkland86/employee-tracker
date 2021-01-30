//Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var conTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("WELCOME TO EMPLOYEE MANAGER!!!")
    runSearch();
});

function runSearch() {
    inquirer
    .prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            // "Update Employee Role",
            "Quit"
        ]
    })
    .then((answer) => {
        switch (answer.choice) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            // case "Update Employee Role":
            //     updateEmployeeRole();
            //     break;
            case "Quit":
                connection.end();
                break;
        }
    })
};

function viewAllDepartments() {
    connection.query("SELECT * FROM departments", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    })
};

function viewAllRoles() {
    connection.query(
        "SELECT departments.Department, roles.Title, roles.Salary FROM roles INNER JOIN departments ON (departments.id = roles.department_id) ORDER BY departments.Department",
        function(err, res) {
            if (err) throw err;
            console.table(res);
            runSearch();
        })
};

function viewAllEmployees() {
    var query = "SELECT employees.first_name, employees.last_name, roles.Title, roles.Salary FROM employees INNER JOIN roles ON (roles.id = employees.role_id) ORDER BY employees.id";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    })
};

function addDepartment() {
    inquirer
    .prompt({
        type: "input",
        message: "What Department would you like to add?",
        name: "name"
    })
    .then((answer) => {
        connection.query("INSERT INTO departments SET ?", { Department: answer.name }, function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " Department has been added to the list");
            console.log("============================");
            viewAllDepartments();
        })
    })
};

function addRole() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the Title of the role you would like to add?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the Salary of the role you would like to add?",
            name: "salary"
        },
        {
            type: "number",
            message: "Enter the number of the department. 1)Human Resources 2)Engineering 3)Marketing 4)Sales",
            name: "depId"
        }])
        .then((answer) => {
            var query = ("INSERT INTO roles SET ?");
            connection.query(query,
                {
                    Title: answer.title,
                    Salary: answer.salary,
                    department_id: answer.depId
                },
                function(err, res) {
                    if(err) throw err;
                    console.log(res.affectedRows + " Role has been added to the list");
                    console.log("============================");
                    viewAllRoles();
                })
        })
};

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "lastName"
        },
        {
            type: "number",
            message: "What is the number of the employee's role? 1)HR Director 2)HR Representative 3)Engineering Manager 4)Web Developer 5)PR Director 6)Research Analyst 7)Sales Director 8)Direct Sales Representative",
            name: "roleId"
        },
        // {
        //     type: "number",
        //     message: "What is the number of the employee's manager ID? 1-4",
        //     name: "managerId"
        // }
    ])
        .then((answer) => {
            var query = ("INSERT INTO employees SET ?");
            connection.query(query, 
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.roleId,
                    // Manager: answer.managerId
                },
                function(err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " Employee added to the list");
                    console.log("============================");
                    viewAllEmployees();
                })
        })
};

// function updateEmployeeRole() {

// };


/* FUTURE DEVELOPMENT

function viewAllEmployeesByDepartment() {

};

function viewAllEmployeesByManager() {

};

function removeEmployee() {

};

function updateEmployeeManager() {

};

function removeRole() {

};

function removeDepartment() {

};
*/