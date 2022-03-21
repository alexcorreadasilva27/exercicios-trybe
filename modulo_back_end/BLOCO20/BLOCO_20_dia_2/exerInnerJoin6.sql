SELECT 
      stf.first_name, 
      stf.last_name, 
      AVG(pay.amount) AS 'Media de pagamento'
      FROM staff stf
      INNER JOIN payment pay 
      ON stf.staff_id = pay.staff_id	
      WHERE 
      YEAR(pay.payment_date) = 2006
      GROUP BY stf.first_name, stf.last_name;
