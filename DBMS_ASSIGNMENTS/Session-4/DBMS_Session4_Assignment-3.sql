USE StoreFront;

# SQL query to create index in Product table
ALTER TABLE Product ADD INDEX Product_Index(Product_Id);
Show Index from Product;

# SQL query to create index in Orders table
ALTER TABLE Orders ADD INDEX Order_Index(Order_Id);
Show Index from Orders;

# SQL query to create index in Category table
ALTER TABLE Category ADD INDEX Category_Index(Category_Id);
Show Index from Category;

