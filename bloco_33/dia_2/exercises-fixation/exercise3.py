read_alunos = open("alunos.txt", mode="r")
nao_aprovados = open("nao_aprovados.txt", mode="w")

for line in read_alunos:
    print(line)
    nota = line.split()
    if int(nota[1]) < 6:
        nao_aprovados.write(f"{nota[0]}\n")


read_alunos.close()
nao_aprovados.close()
