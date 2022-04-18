# Exercício 2: Transforme o algoritmo criado acima em recursivo.

def count_pair(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_pair(n - 1)
    else:
        return count_pair(n - 1)


print(count_pair(10))
