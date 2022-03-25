class Circulo:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return self.PI * self.raio * self.raio

    def calcular_perimetro(self):
        return 2 * self.PI * self.raio


Circulo1 = Circulo(5)
print(Circulo1.calcular_area())
print(Circulo1.calcular_perimetro())
