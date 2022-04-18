def factorial_recursive(n):  # nome da função e parâmetro
    if n == 1:  # condição de parada
        return 1

    else:
        # chamada de si mesma com um novo valor
        return n * factorial_recursive(n - 1)


def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i

    return fact


print(iterative_factorial(5))
print(factorial_recursive(5))
