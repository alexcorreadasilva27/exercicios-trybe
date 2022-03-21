from exercise1 import fizzbuzz


def test_fizzbuzz_deve_retornar_lista_de_numeros():
    assert fizzbuzz(2) == [1, 2]


def test_fizzbuzz_divisivel_por_3_deve_ser_fizz():
    assert fizzbuzz(3)[-1] == "Fizz"


def test_fizzbuzz_divisivel_por_5_deve_ser_buzz():
    assert fizzbuzz(5)[-1] == "Buzz"


def test_fizzbuzz_divisivel_por_3_e_5_deve_ser_buzz():
    assert fizzbuzz(15)[-1] == "FizzBuzz"
