SELECT employee_id, first_name,
    LEFT(hire_date, 4) 'hire_year'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    MID(hire_date, 1, 4) 'hire_year'
FROM hr.employees;