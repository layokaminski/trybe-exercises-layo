NAME = "LAYO"

def inverted_ladder(word):
    for remove_letter in range(len(word)):
        for letter in range(len(word) - remove_letter):
            print(word[letter], end="")
        print()

 
print(inverted_ladder(NAME))
