 -- 1
    SELECT 'This is SQL Exercise, Practice and Solution';
    
    -- 2
    SELECT 1, 2, 3;
    
    -- 3
    SELECT 10 + 15;
    
    -- 4
    SELECT (3*2) + 20;
    
    -- 5
    SELECT * FROM Scientists;
    
    -- 6
    SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
    
    -- 7
    SELECT Name FROM Scientists ORDER BY Name;
    
    -- 8
    SELECT Name FROM Projects ORDER BY Name DESC;
    
    -- 9
    SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS Resultado FROM Projects;
    
    -- 10
    SELECT `Name`, Hours FROM Projects ORDER BY Hours LIMIT 3;
    
    -- 11
    SELECT DISTINCT Project from AssignedTo;
    
    -- 12
    SELECT Name, Hours FROM Projects
    ORDER BY Hours DESC
    LIMIT 1;
    
    -- 13
    SELECT Name, Hours FROM Projects
    ORDER BY Hours DESC
    LIMIT 1
    OFFSET 1;
    
    -- 14 
    SELECT * FROM Projects
    ORDER BY Hours ASC
    LIMIT 5;
    
    -- 15
    SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists;