from pymongo import MongoClient

# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI

category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])
