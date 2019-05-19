
DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(1) NOT NULL,
	product_name VARCHAR(40) NOT NULL,
	department_name VARCHAR(40) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(10) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES 
(1, "flashdrive", "electronics", 15, 12),
(2, "dvd", "movies", 19, 400),
(3, "cutlery", "kitchen", 50, 205),
(4, "rug", "home", 105, 16),
(5, "tennis shoes", "fashion", 40, 300),
(6, "biographical book", "books", 10, 45),
(7, "planter", "gardening", 14, 30),
(8, "tent", "outdoors", 450, 20),
(9, "mirowave", "appliances", 35, 10),
(10, "shampoo", "personal care", 10, 310)

