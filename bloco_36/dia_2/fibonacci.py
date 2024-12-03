def fibonacci_sem_recursividade(number):
    array = [0, 1]

    while len(array) < number:
        append_number = array[-1] + array[-2]
        array.append(append_number)
    return array


# Com recursividade
def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)


print(fibonacci(10))
