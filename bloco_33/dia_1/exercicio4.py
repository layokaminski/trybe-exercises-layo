names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def higher_name(lista):
    high_name = ""
    for name in lista:
        if len(name) > len(high_name):
            high_name = name
    return high_name


print(higher_name(names))
