SELECT id, title FROM Books AS b
WHERE NOT EXISTS
( SELECT * FROM Books_Lent
WHERE b.id = book_id);