USE sakila;
DELIMITER $$

CREATE PROCEDURE ChecandoSeOClienteEstaAtivo(
    IN client_email VARCHAR(200),
    OUT isActive BOOL
)
BEGIN
    SET isActive = (
        SELECT active
        FROM sakila.customer
        WHERE email = client_email
    );
END $$

DELIMITER ;

-- Como usar:

SELECT @ActiveStatus;
CALL ChecandoSeOClienteEstaAtivo('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;

