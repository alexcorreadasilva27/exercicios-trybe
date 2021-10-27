SELECT 
    A.actor_id, A.first_name, F.film_id, F.title
FROM
    actor A
    INNER JOIN
    film_actor FA ON A.actor_id = FA.actor_id
    INNER JOIN
    film F ON F.film_id = FA.film_id;
