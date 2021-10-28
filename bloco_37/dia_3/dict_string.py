count_chars = {}
str = "bbbbaaaacccaaaaaaddddddddccccccc"

for char in str:
    if char not in count_chars:
        count_chars[char] = 1
    else:
        count_chars[char] += 1

print(count_chars)
