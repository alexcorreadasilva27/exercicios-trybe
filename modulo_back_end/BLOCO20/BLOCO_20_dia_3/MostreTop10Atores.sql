USE sakila;
DELIMITER $$
CREATE PROCEDURE MostreTop10Atores()
BEGIN
SELECT first_name, actor_id, COUNT(*) AS 'quantiddade de filmes'
FROM film_actor
GROUP BY actor_id
ORDER BY COUNT(*) DESC 
LIMIT 10;
END $$

DELIMITER ;