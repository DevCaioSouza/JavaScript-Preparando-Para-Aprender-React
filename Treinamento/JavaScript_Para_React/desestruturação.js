const jogador = {
  name: 'Romário',
  idade: 32,
  residencia: {
    cidade: 'Rio de Janeiro',
    bairro: 'Morada Real',
    rua: 'Severino Dutra',
    numero: 180
  },
};

//Desestruturação
//Remover parte do objeto p/ uma variável a parte

// const residencia = jogador.residencia
//podemos fazer tambem:
// const {residencia, idade} = residencia;

//podemos também renomear os atributos
// const {residencia: residence, idade: age} = jogador
//não podemos esquecer de passar o novo parâmetro na chamada tb

//tb conseguimos atribuir valores padrão para variáveis
//o "apelido" só será exibido caso ele não conste no objeto original
// const {residencia: residence, idade: age, apelido = 'Baixinho'} = jogador
// document.body.innerText = JSON.stringify({residence, age, apelido})

//Desestruturação pode ser usado em qualquer lugar que utilize objetos, 
//como parâmetro de funções, variáveis, consultores, métodos de classes, etc;
// function mostraIdade(jogador){
//   return jogador.idade
// }

//desestruturando o parâmetro
function mostraIdade({idade}){
  return idade
}

document.body.innerText = mostraIdade(jogador)