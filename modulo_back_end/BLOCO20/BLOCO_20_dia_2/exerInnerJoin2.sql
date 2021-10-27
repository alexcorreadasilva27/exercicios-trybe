SELECT S.first_name Nome, S.last_name Sobrenome, A.address Endereço FROM staff S
INNER JOIN address A ON S.address_id = A.address_id;
