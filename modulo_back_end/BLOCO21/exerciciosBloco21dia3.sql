-- VIEW 
-- 1
CREATE VIEW film_with_categories AS
SELECT f.title AS Titulo, fc.category_id AS IDCategoria, c.`name` AS Nome FROM film_category fc
INNER JOIN category AS c ON fc.category_id = c.category_id
INNER JOIN film AS f ON fc.film_id = f.film_id
ORDER BY title;

-- 2
CREATE VIEW film_info AS
SELECT fa.actor_id,
	   CONCAT(a.first_name, ' ', a.last_name) AS actor,
       f.title
FROM film_actor AS fa
INNER JOIN actor AS a ON fa.actor_id = a.actor_id
INNER JOIN film AS f ON fa.film_id = f.film_id
ORDER BY actor;

-- 3
CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, c.city_id, c.city
FROM address AS a
INNER JOIN city AS c ON a.city_id = c.city_id
ORDER BY city;

