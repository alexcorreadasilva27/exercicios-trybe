-- 1
SELECT actor_id
FROM actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

-- 2
SELECT actor_id
FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN(8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

-- 3
DELETE FROM film_text
WHERE DESCRIPTION LIKE '%saga%';

-- 4
TRUNCATE film_actor;
TRUNCATE film_category;