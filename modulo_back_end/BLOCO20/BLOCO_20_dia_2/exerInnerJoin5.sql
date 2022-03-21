SELECT 	c.first_name, COUNT(a.address) AS 'quantidade de endereço'
FROM customer c
INNER JOIN 
address a 
ON a.address_id = c.address_id
WHERE
c.active = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC;