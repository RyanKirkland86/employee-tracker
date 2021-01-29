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