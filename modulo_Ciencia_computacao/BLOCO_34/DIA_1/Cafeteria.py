class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def alterar_preco(self, novo_preco):
        self.preco = novo_preco


class Pedido:
    def __init__(
        self, cliente, itens_consumidos, forma_de_pagamento, desconto
    ):
        self.cliente = cliente
        self.itens_consumidos = itens_consumidos
        self.forma_de_pagamento = forma_de_pagamento
        self.desconto = desconto

    def calcular_total(self):
        total = 0
        for item in self.itens_consumidos:
            total = total + item.preco

        return total

    def calcular_total_com_descontos(self):
        return self.calcular_total() * (1 - self.desconto)


sanduba = Item("x-tudo", 16.9)
guarana = Item("Guarana", 5.9)
fritas = Item("Batata Frita", 10)

pedido_mesa_1 = Pedido(
    "Gil do Vigor", [sanduba, guarana, fritas], "Cartão", 0.1
)

print("O total é: R$%.2f" % pedido_mesa_1.calcular_total())
print(
    "O total com desconto é: R$"
    + str(pedido_mesa_1.calcular_total_com_descontos())
)
