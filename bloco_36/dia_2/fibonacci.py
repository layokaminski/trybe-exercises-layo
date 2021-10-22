def fibonacci(number):
    array = [0, 1]

    while len(array) < number:
        append_number = array[-1] + array[-2]
        array.append(append_number)
    return array


print(fibonacci(10))
