/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = valor => {
    return !!valor
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(false))
console.log(isTruthy(null))
console.log(isTruthy(undefined))
console.log(isTruthy(0))
console.log(isTruthy(NaN))
console.log(isTruthy(''))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy('g'))
console.log(isTruthy(true))
console.log(isTruthy(3))
console.log(isTruthy(Infinity))
console.log(isTruthy(45))
console.log(isTruthy('o'))
console.log(isTruthy("OLa"))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = new Object()

carro.marca = "Fiat"
carro.modelo = "Toro"
carro.placa = "ERT-2087"
carro.ano = 2020
carro.cor = "Preto"
carro.quantasPortas = 4
carro.assentos = 5
carro.quantidadePessoas = 0

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = cor => {
    carro.cor = cor
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => carro.cor

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = _ => carro.modelo

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = _ => carro.marca

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = _ => {
    return `Esse carro é um ${carro.marca} ${carro.modelo}`
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.entrarCarro = pessoas => {
    if (pessoas > 5) return "Só cabem 5 pessoas no carro"
    if (pessoas + carro.quantidadePessoas > 5) return `Só cabem mais ${5-carro.quantidadePessoas} pessoas`
    if (pessoas > 0) {
        if (carro.quantidadePessoas == 5) return "O carro já está lotado"
    }

    

    if((carro.quantidadePessoas += pessoas) < 0) return `Não é possivel tirar ${-pessoas} pessoas do carro`    

    carro.quantidadePessoas += pessoas
    let plural
    if (carro.quantidadePessoas == 1) plural = "pessoa"
    else plural = "pessoas"

    return `Já temos ${carro.quantidadePessoas} ${plural} no carro`
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro
*/
console.log(carro.obterCor())
//preto

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho")

// E agora, qual a cor do carro
console.log(carro.obterCor())
//vermelho


// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo")


// E agora, qual a cor do carro
console.log(carro.obterCor())
//verde musgo


// Qual a marca e modelo do carro
console.log(carro.obterModelo())


// Adicione 2 pessoas no carro.
//console.log(carro.entrarCarro(2))


// Adicione mais 4 pessoas no carro.
//console.log(carro.entrarCarro(4))

// Faça o carro encher.
//console.log(carro.entrarCarro(3))

// Tire 4 pessoas do carro.
console.log(carro.quantidadePessoas)

// Adicione 10 pessoas no carro.
//console.log(carro.entrarCarro(10))


// Quantas pessoas temos no carro
//console.log(carro.quantidadePessoas)
//1
