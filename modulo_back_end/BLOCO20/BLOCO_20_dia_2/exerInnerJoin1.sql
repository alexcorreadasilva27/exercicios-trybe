SELECT A.actor_id, A.first_name, F.film_id FROM actor A
INNER JOIN film_actor F
ON A.actor_id = F.actor_id;