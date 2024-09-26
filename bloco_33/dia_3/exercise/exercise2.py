def transform_frase(frase):
    newFrase = ""
    for letter in frase:
        if letter in "ABC":
            newFrase += "2"
        elif letter in "DEF":
            newFrase += "3"
        elif letter in "GHI":
            newFrase += "4"
        elif letter in "JKL":
            newFrase += "5"
        elif letter in "MNO":
            newFrase += "6"
        elif letter in "PQRS":
            newFrase += "7"
        elif letter in "TUV":
            newFrase += "8"
        elif letter in "WXYZ":
            newFrase += "9"
        elif letter in "-01":
            newFrase += letter
    return newFrase
