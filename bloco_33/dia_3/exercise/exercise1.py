def fizzBuzz(numbers):
    newList = []
    for number in numbers:
        if number % 3 == 0 and number % 5 == 0:
            newList.append("FizzBuzz")
        elif number % 3 == 0:
            newList.append("Fizz")
        elif number % 5 == 0:
            newList.append("Buzz")
        else:
            newList.append(number)
    return newList


print(fizzBuzz([1, 5, 9, 7]))
