SELECT name FROM Customers c
WHERE NOT EXISTS
(SELECT * FROM CarSales
WHERE 
CustomerID = c.CustomerId);