SELECT first_name FROM actor
WHERE first_name LIKE '%je%'
UNION
SELECT first_name FROM customer
WHERE first_name LIKE '%tracy%';