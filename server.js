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
            "Add Department",
            "View All Roles",
            "Add Role",
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "Quit"
        ]
    })
    .then((answer) => {
        switch (answer.choice) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "Add Role":
                addRole();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Quit":
                connection.end();
                break;
        }
    })
};

function viewAllDepartments() {
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    })
};

function addDepartment() {

};

function viewAllRoles() {

};

function addRole() {

};

function viewAllEmployees() {

};

function addEmployee() {

};

function updateEmployeeRole() {

};


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