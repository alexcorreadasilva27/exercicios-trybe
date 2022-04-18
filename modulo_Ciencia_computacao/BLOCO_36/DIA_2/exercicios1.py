# Exercício 1: Crie um algoritmo não recursivo
# para contar quantos números pares existem em uma sequência numérica (1 a n).

def count_pair(n):
    number_pair = 0
    for number in range(n+1):
        if number % 2 and number != 0:
            number_pair += 1
    return number_pair


print(count_pair(10))
