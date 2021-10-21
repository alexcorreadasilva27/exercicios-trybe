-- SELECT city AS Cidade FROM city ;
-- SELECT first_name AS Nome, last_name AS Sobrenome FROM customer;
-- SELECT * FROM rental;
-- SELECT * FROM film;
-- SELECT title, description, release_year FROM film;
-- SELECT * FROM actor;
-- SELECT * FROM address;
-- SELECT * FROM category;
-- SELECT * FROM city;
-- SELECT * FROM country;
-- SELECT * FROM customer;
-- SELECT * FROM film;
-- SELECT * FROM film_actor;
-- SELECT * FROM film_category;
-- SELECT * FROM Filme;
-- SELECT * FROM film_text;
-- SELECT * FROM inventory;
-- SELECT * FROM language;
-- SELECT * FROM payment;
-- SELECT * FROM rental;
-- SELECT * FROM staff;
-- SELECT * FROM store;

SELECT CONCAT(first_name,' ', last_name) AS 'Nome Completo' FROM actor;
SELECT CONCAT(title,' ', release_year) AS 'Lançamento do Filme' FROM film;
SELECT CONCAT(title,' ', rating) AS Classifição FROM film;
SELECT CONCAT(address,' ', district) AS Endereço from address;
SELECT COUNT(password) FROM staff;
SELECT * FROM staff;
SELECT COUNT(*) FROM staff;
SELECT COUNT(email) AS Email FROM staff;
SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental;
# Query + LIMIT quantidade_de_resultados
SELECT * FROM sakila.rental LIMIT 10;
# Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
SELECT * FROM actor LIMIT 10 OFFSET 5;
SELECT * FROM film;
SELECT title, release_year, rating FROM film;
SELECT COUNT(*) FROM film;
SELECT DISTINCT last_name FROM actor;
SELECT COUNT(DISTINCT last_name) FROM actor;
SELECT * FROM actor
ORDER BY last_name, first_name DESC;
SELECT * FROM language LIMIT 5 OFFSET 1;
SELECT release_year, length, rating, replacement_cost FROM film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;
SELECT now();