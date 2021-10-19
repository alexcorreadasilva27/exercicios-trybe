SELECT * FROM Movies;
-- 1
INSERT INTO Movies(title, director, `year`, length_minutes)
VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
	   ('Procurando Nemo', 'John Lasseter', 2003, 107),
       ('Os Incríveis', 'Brad Bird', 2004, 116),
       ('WALL-E', 'Pete Docter', 2008, 104 );

-- 2
SELECT * FROM BoxOffice;

INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES(9, 6.8, 450000000, 370000000);

-- 3
SET SQL_SAFE_UPDATES = 0;

UPDATE Movies
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';

SELECT * FROM Movies;

-- 4
UPDATE Movies
SEt title = 'Ratatouille', `year` = 2007
WHERE title = 'ratatui';

SELECT * FROM Movies;

-- 5
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES(8, 8.5, 300000000, 250000000),
	  (10, 7.4, 460000000, 510000000),
      (11, 9.9, 290000000, 280000000);
      
SELECT * FROM BoxOffice;

-- 6
DELETE FROM BoxOffice
WHERE movie_id = 11;


DELETE FROM Movies
WHERE title = 'WALL-E';

SELECT * FROM BoxOffice;
SELECT * FROM Movies;

-- 7
SELECT id FROM Movies
WHERE director = 'Andrew Staton';

DELETE FROM BoxOffice
WHERE movie_id IN(2, 9);

DELETE FROM Movies
WHERE director = 'Andrew Staton';

SELECT * FROM BoxOffice;
SELECT * FROM Movies;

-- 8
UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;

SELECT * FROM BoxOffice;
SELECT * FROM Movies;

-- 9
UPDATE BoxOffice
SEt rating = 6.0
WHERE international_sales < 300000000 AND domestic_sales > 200000000;

SELECT * FROM BoxOffice;
SELECT * FROM Movies;

-- 10
SELECT id FROM Movies
WHERE length_minutes < 100;

DELETE FROM BoxOffice
WHERE movie_id IN(1, 6, 7, 8);

DELETE FROM Movies
WHERE length_minutes < 100;

SELECT * FROM Movies;
SELECT * FROM BoxOffice;
