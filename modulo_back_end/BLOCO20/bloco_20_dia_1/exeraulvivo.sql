-- 1
SELECT language_id, MAX(replacement_cost) AS 'MAX'
  FROM film 
  GROUP BY language_id;

-- 2
SELECT rating, SUM(replacement_cost) AS `SUM`
FROM film
GROUP by rating
ORDER BY `SUM` DESC
LIMIT 1;


-- 3
SELECT customer_id, 
AVG
(TIMEDIFF
(return_date, rental_date)) AS
`Time` FROM rental
GROUP BY customer_id
ORDER BY `Time` 
LIMIT 1;  
  


 