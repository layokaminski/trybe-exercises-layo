def reverse_list(lista):
    lista.reverse()
    return lista


print(reverse_list([2, 3, 5, 7]))


# Iterativo
def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


print(reverse([2, 3, 5, 7]))


# Recursiva
def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]
