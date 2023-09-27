function Festival(nome, tipo, local) {
    this.nome = nome
    this.tipo = tipo
    this.local = local
}

function FestivalDeMúsica(nome) {
    Festival.call(this, nome, 'musical', 'Autódromo de Interlagos')
}

function FestivalDeComida(nome) {
    Festival.call(this, nome, 'gastronômico', 'Memorial da América Latina')
}

const festival1 = new FestivalDeMúsica('Primavera Sound')
const festival2 = new FestivalDeComida('Sampa no Prato')
const festival3 = new FestivalDeMúsica('Lolapalloza')

console.log(festival1)
console.log(festival2)
console.log(festival3)