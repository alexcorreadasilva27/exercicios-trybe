# exercicio 1
# Faça um programa que solicite o nome de uma pessoa usuária e
# imprima-o na vertical.

NAME = input("Insira seu nome:")
for letter in NAME:
    print(letter)


# Exercício 2:
# Escreva um programa que receba vários números naturais e calcule a soma
# desses valores. Caso algum valor da entrada seja inválido, por exemplo uma
# letra, uma mensagem deve ser exibida, na saída de erros, no seguinte formato:
# "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve
# imprimir a soma dos valores válidos.

num = input("Insira valores aqui, separados por espaço:")

numArr = num.split(" ")

sum = 0
for num in numArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)
print(f"A soma dos valores é: {sum}")


# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que lê todas essas informações e filtre mantendo somente
# as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo.
# A nota miníma para aprovação é 6.

recuStudents = []
with open("arquivo3.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)
