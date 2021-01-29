//Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var conTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3600,
    user: "root",
    password: "password",
    database: "employees_db"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

function runsearch() {
    inquirer
    .prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View All Roles",
            "Add Role",
            "Remove Role",
            "View All Departments",
            "Add Department",
            "Remove Department",
            "Quit"
        ]
    })
    .then((answer) => {
        switch (answer.choice) {
            case "View All Employees":

                break;
            case "View All Employees By Department":

                break;
            case "View All Employees By Manager":

                break;
            case "Add Employee":

                break;
            case "Remove Employee":

                break;
            case "Remove Employee":

                break;
            case "Update Employee Role":

                break;
            case "Update Employee Manager":

                break;
            case "View All Roles":

                break;
            case "Add Role":

                break;
            case "Remove Role":

                break;
            case "View All Departments":

                break;
            case "Add Department":

                break;
            case "Remove Department":

                break;
            case "Quit":
                connection.end();
                break;
        }
    })
};