# Exercício 5: Escreva um algoritmo recursivo
# que identifica se um número é primo.


def temdivisor(x, y, z):
    if y > z:
        return False
    elif x % y == 0:
        return True
    else:
        return temdivisor(x, y + 1, z)


def prime_number(x):
    return x > 1 and not (temdivisor(x, 2, x - 1))


print(prime_number(14))
