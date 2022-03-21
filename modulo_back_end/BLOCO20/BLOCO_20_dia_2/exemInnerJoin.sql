SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;