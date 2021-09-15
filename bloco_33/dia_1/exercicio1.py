NUM_A = 5
NUM_B = 10


def higher_number(number_one, number_two):
    if number_one < number_two:
        return number_two
    return number_one


print(higher_number(NUM_A, NUM_B))
