const alunos = ['Victor', 'João', 'Marcela', 'Gabriela', 'Pedro', 'Cecília']

const alunosNotas = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        nota: ''
    }
})

for (let i = 0; i < alunosNotas.length; i++) {
    const notas = [4, 5, 7, 9, 8, 8]
    alunosNotas[i].nota = notas[i]
}

console.log(alunosNotas)

function alunosAprovados() {
    const aprovados = alunosNotas.filter(function(item) {
        return item.nota >= 6
    })
    console.log(aprovados)
}

alunosAprovados()