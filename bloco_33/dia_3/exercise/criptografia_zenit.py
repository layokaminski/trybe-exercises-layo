# função criptografia recebe uma string como parametro,
# e altera as letras de Z E N I T,
# para P O L A R

def criptografia(string):
    newString = ""
    for letter in string:
        if letter in "Zz":
            newString += "p" if letter.islower() else "P"
        elif letter in "Ee":
            newString += "o" if letter.islower() else "O"
        elif letter in "Nn":
            newString += "l" if letter.islower() else "L"
        elif letter in "Ii":
            newString += "a" if letter.islower() else "A"
        elif letter in "Tt":
            newString += "r" if letter.islower() else "R"
        else:
            newString += letter
    return newString

# função descriptografia recebe uma string como parametro,
# e altera as letras de P O L A R,
# para Z E N I T


def descriptografia(string):
    newString = ""
    for letter in string:
        if letter in "Pp":
            newString += "z" if letter.islower() else "Z"
        elif letter in "Oo":
            newString += "e" if letter.islower() else "E"
        elif letter in "Ll":
            newString += "n" if letter.islower() else "N"
        elif letter in "Aa":
            newString += "i" if letter.islower() else "I"
        elif letter in "Rr":
            newString += "t" if letter.islower() else "T"
        else:
            newString += letter
    return newString


print(criptografia("Z1EEENIT"))
print(descriptografia("PoLAaarRR"))
