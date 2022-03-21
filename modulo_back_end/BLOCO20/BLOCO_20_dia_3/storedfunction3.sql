USE sakila;
DELIMITER $$

CREATE FUNCTION GetCorrespondingFilm(id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
    DECLARE movie_title VARCHAR(500);
    SELECT distinct F.title
    FROM sakila.inventory I
    INNER JOIN sakila.film F
    ON F.film_id = I.film_id
    WHERE I.inventory_id = id INTO movie_title;
    RETURN movie_title;
END $$

DELIMITER ;

-- Como usar:

SELECT GetCorrespondingFilm(2);