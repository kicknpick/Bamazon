USE Bamazon_DB;

CREATE TABLE products (
  item_id INT(20) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(8, 2) NOT NULL,
  stock_quantity INT(500) NOT NULL,
  PRIMARY KEY (item_id)
);
