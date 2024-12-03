def sum_recursive(n):
    if n == 1:
        return 1

    else:
        return n + sum_recursive(n - 1)


print(sum_recursive(4))
