import json


with open("books.json") as file:
    books = [json.loads(line) for line in file]


categories = {}
for book in books:
    for category in book["categories"]:
        if not categories.get(category):
            categories[category] = 0
    categories[category] += 1

book_total_len = len(books)
category_porcentagem = {}
for category, quantity in categories.items():
    category_porcentagem[category] = (quantity / book_total_len) * 100


print(category_porcentagem)
