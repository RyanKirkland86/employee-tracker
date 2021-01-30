INSERT INTO department (name)
VALUES ("Human Resources"), ("Engineering"), ("Marketing"), ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES 
("HR Director", 140000.00, 1),
("HR Representative", 76000.00, 1),
("Engineering Manager", 180000.00, 2), 
("Web Developer", 105000.00, 2), 
("PR Director", 120000.00, 3),
("Research Analyst", 85000.00, 3),
("Sales Director", 145000.00, 4),
("Direct Sales Representative", 62000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Gladys", "Leeman", 1, null),
("Becky", "Leeman", 2, 1),
("Jerome", "Chenette", 3, null),
("Ryan", "Kirkland", 4, 3),
("Coleman", "Buffa", 4, 3),
("Annette", "Atkins", 5, null),
("Amber", "Atkins", 6, 5),
("Loretta", "Lynn", 7, null),
("Leslie", "Miller", 8, 7);
