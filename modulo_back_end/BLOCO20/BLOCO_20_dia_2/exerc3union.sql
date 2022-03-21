(SELECT first_name AS Nome FROM actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT UCASE(first_name) AS Nome FROM staff LIMIT 1)
UNION
(SELECT first_name AS Nome FROM customer LIMIT 5 OFFSET 15)
ORDER BY Nome;


 

