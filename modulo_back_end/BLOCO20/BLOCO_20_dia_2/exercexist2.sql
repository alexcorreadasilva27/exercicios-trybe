SELECT id, title FROM Books AS b
WHERE EXISTS
( SELECT * FROM Books_Lent
WHERE b.id = book_id AND b.title LIKE '%lost%');