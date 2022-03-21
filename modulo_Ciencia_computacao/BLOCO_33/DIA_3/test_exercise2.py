import pytest
from exercise2 import traduzindo_para_numeros


def test_deve_converter_abc_em_2():
    assert traduzindo_para_numeros("ABC") == "222"


def test_deve_converter_def_em_3():
    assert traduzindo_para_numeros("DEF") == "333"


def test_deve_converter_ghi_em_4():
    assert traduzindo_para_numeros("GHI") == "444"


def test_deve_converter_jkl_em_5():
    assert traduzindo_para_numeros("JKL") == "555"


def test_deve_converter_mno_em_6():
    assert traduzindo_para_numeros("MNO") == "666"


def test_deve_converter_pqrs_em_7():
    assert traduzindo_para_numeros("PQRS") == "7777"


def test_deve_converter_tuv_em_8():
    assert traduzindo_para_numeros("TUV") == "888"


def test_deve_converter_wxyz_em_9():
    assert traduzindo_para_numeros("WXYZ") == "9999"


def test_manter_0_e_1():
    assert traduzindo_para_numeros("0-1") == "0-1"


def test_deve_ter_pelo_menos_1_caractere():
    with pytest.raises(ValueError):
        traduzindo_para_numeros("")


def test_deve_ter_no_maximo_30_caracteres():
    long_expression = (
      "1111111111"
      "1111111111"
      "1111111111"
      "1"
    )
    with pytest.raises(ValueError):
        traduzindo_para_numeros(long_expression)


def test_caractere_invalido():
    with pytest.raises(ValueError):
        traduzindo_para_numeros("x#$blau")
