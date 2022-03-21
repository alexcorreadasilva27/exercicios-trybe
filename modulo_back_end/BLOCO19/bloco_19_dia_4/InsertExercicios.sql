-- 1
INSERT INTO staff 
(first_name, last_name, address_id, email, store_id, `active`, username, `password`)
VALUES
('Ezio', 'Auditore', 2, 'pegador_de_casadas@gmail.com', 1, 1, 'AssassinoEzio', 'pegaatesuamae');

-- 2
INSERT INTO staff 
(first_name, last_name, address_id, email, store_id, `active`, username, `password`)
VALUES
('Altair', "Ibn-La'Ahad", 2, 'oMentor@gmail.com', 1, 1, 'AssassinoAltair', 'amacadoedeneminha'),
('Edward', 'Kenway', 2, 'capitao_Kenway@gmail.com', 1, 1, 'AssassinoEd', 'reidospiratased');

-- 3
INSERT INTO actor(first_name, last_name)
SELECT first_name, last_name
FROM customer
ORDER BY customer_id
LIMIT 5;

-- 4
INSERT INTO category(name)
VALUES
('Ficação Cientifíca'),
('Fantasia'),
('Biografia');

-- 5
INSERT INTO store(manager_staff_id, address_id)
VALUES(3, 3);



