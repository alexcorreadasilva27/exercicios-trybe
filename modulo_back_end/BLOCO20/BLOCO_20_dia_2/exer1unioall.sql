SELECT first_name, last_name, '-' AS 'staff_id' FROM actor
UNION ALL
SELECT first_name, last_name, staff_id FROM staff;