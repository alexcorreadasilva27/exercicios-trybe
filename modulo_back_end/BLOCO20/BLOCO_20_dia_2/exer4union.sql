(SELECT first_name AS Nome, last_name AS Sobrenome FROM customer
ORDER BY Nome, Sobrenome LIMIT 60)
UNION
(SELECT first_name AS Nome, last_name AS Sobrenome FROM actor
ORDER BY Nome, Sobrenome LIMIT 60)
ORDER BY Nome, Sobrenome LIMIT 15 OFFSET 45;