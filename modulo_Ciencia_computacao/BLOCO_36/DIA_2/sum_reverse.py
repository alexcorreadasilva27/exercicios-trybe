def sum_reverse(n):
    if n == 0:  # condição de parada
        return 0

    else:
        # chamada de si mesma com um novo valor
        return n + sum_reverse(n - 1)


print(sum_reverse(4))
