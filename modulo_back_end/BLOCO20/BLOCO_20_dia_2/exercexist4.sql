SELECT cus.name, car.name FROM Cars As car
INNER JOIN
Customers As cus
WHERE
EXISTS
( SELECT * FROM CarSales
WHERE
CustomerID = cus.CustomerId
AND CarID = car.ID);