numbers = input("Insira seus valores, separados por espaço:")

list_numbers = numbers.split(" ")

total = 0

for number in list_numbers:
    if number.isdigit():
        total += int(number)
    else:
        print(f"Erro ao somar valores, {number} é um valor inválido")


print(f"O total dos valores é: {total}")
