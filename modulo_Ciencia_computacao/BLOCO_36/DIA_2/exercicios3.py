# Exercício 3: Crie um algoritmo recursivo que encontre,
# em uma lista, o maior número inteiro.


def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_resto_da_lista = maiorinteiro_aux(lista, tamanho - 1)
        if maior_resto_da_lista > lista[tamanho - 1]:
            return maior_resto_da_lista
        else:
            return lista[tamanho - 1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


print(maiorinteiro([1, 21, 100, 4, 57]))
