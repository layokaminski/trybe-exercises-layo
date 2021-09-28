class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if 0 < canal < 99:
            self.__canal = canal
            return "Troca de canal feita"
        else:
            raise ValueError('Canal fora dos limites')

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


minha_tv = TV(30)
print(minha_tv.modificar_canal(10))
