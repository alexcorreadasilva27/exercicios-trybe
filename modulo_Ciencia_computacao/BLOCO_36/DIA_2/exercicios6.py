# Exercício 6: Escreva um algoritmo recursivo
# que resolva o problema da torre de hanoi, seguindo as instruções:
# A torre deve conter 3 discos, e três colunas;
# Os discos começam alinhados na primeira coluna,
#  e devem ser organizados respeitando a ordem de tamanho, na última coluna.


def torres_hanoi(number_disc, a, b, c):
    if number_disc == 1:
        print("Move disco %d de %s para %s" % (number_disc, a, c))
    else:
        torres_hanoi(number_disc - 1, a, c, b)
        print("Move disco %d de %s para %s" % (number_disc, a, c))
        torres_hanoi(number_disc - 1, b, a, c)


print(torres_hanoi(3, a="primerio", b="meio", c="fim"))
