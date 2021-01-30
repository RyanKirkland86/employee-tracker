# Employee Database Tracker

## Project:

This is a command line application that allows a business owner to view and manage the departments, roles, and employees of their company so that they can better organize and plan their business.

![Image](https://github.com/RyanKirkland86/employee-tracker/blob/main/Assets/EmployeeTrackerDEMO.gif)
<br>

[Video DEMO](https://github.com/RyanKirkland86/employee-tracker/blob/main/Assets/EmployeeTrackerVIDEO.mov)

<br>

## Technologies Used:
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)
- [MySQL](https://www.mysql.com/)
- [console.table](https://www.npmjs.com/package/console.table)
- [JSON](https://www.json.org/json-en.html)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation:

MySQL must be used to upload and manipulate the database files (schema.sql and seeds.sql). To install the necessary dependencies, these lines of code must be run in the command line:

```
npm install mysql

npm install inquirer

npm install console.table
```

## Process:

After the user has installed the necessary dependencies, run this in the command line:

```
node server.js
```

The application begins by starting a runSearch function. The user is presented with a series of prompts to select what they'd like to do.

```javascript
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
            "Quit"
        ]
```

If they choose the view options, the application will present a table populated with relevant information. These tables will cross-reference each other and dynamically display information that they share in common.

```javascript
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
```

The user may also select an option that allows them to add information to a table that will then dynamically update to the rest of the application. Here is an example of that:

```javascript
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
```

## Authors:
- Ryan Kirkland
- [GitHub](https://github.com/RyanKirkland86)
- [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:
This project is licensed under the MIT License.

## Acknowledgements:
Thank you to UCB Extension for the help with this project.