DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT default 10,
  stock_quantity INT default 10,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("flashdrive", "electronics", "15", "12");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dvd", "movies", "19", "400");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cutlery", "kitchen", "50", "205");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rug", "home", "105", "16");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tennis shoes", "fashion", "40", "300");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("biographical book", "books", "10", "45");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("planter", "gardening", "14", "30");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tent", "outdoors", "450", "20");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mirowave", "appliances", "35", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shampoo", "personal care", "10", "310");

