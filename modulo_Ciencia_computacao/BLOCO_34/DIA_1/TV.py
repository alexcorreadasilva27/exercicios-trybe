class TV:
    def __init__(self, tamanho_em_polegadas):
        self.volume = 5
        self.canal = 21
        self.taxa_de_aumento_do_volume = 2
        self.tamanho = tamanho_em_polegadas
        self.ligada = False

    def aumenta_volume(self):
        self.volume += self.taxa_de_aumento_do_volume

    def diminuir_volume(self):
        self.volume -= self.taxa_de_aumento_do_volume

    def modificar_canal(self, novo_canal):
        self.canal = self.novo_canal

    def ligar_ou_desligar(self):
        self.ligada = not self.ligada


tv_da_sala = TV(42)
tv_da_sala.aumenta_volume()
print(tv_da_sala.volume)


tv_da_sala.diminuir_volume()
tv_da_sala.diminuir_volume()
print(tv_da_sala.volume)

tv_da_sala.ligar_ou_desligar()
print(tv_da_sala.ligada)
