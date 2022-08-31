//Objetos - cjts de dados onde armazenamos chaves e valores

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

// in: verifica se tal informação existe dentro do objeto
// document.body.innerText = ('residencia' in jogador)

//Object.keys() - retorna um vetor com todas as chaves do objeto
// document.body.innerText = Object.keys(jogador)

//Object.values() - retorna um vetor com todos os valores do objeto
// document.body.innerText = JSON.stringify(Object.values(jogador));

//Object.entries() retorna um vetor com vários vetores dentro
//cada um dos subvetores do vetor maior tem duas informações dentro,
//no caso a chave e o valor do objeto
// document.body.innerText = JSON.stringify(Object.entries(jogador));

//------------------------------------------------------------------------
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

// document.body.innerText = mostraIdade(jogador)

//-----------------------------------------------------------
//Rest Operator - É uma maneira de fazer desestruturação
const arr = [1,2,3,4,5,6,7,8,9,10];

//atribuição automática de first a 1 e second a 2
const [first, second, ...rest] = arr;

document.body.innerText = JSON.stringify({first, second, rest})













