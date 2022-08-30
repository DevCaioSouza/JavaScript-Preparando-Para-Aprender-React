//Objetos - cjts de dados onde armazenamos chaves e valores

const jogador = {
  name: 'Romário',
  idade: 32,
  origem: {
    cidade: 'Rio de Janeiro',
    bairro: 'Morada Real',
    rua: 'Severino Dutra',
    numero: 180
  },
};

// in: verifica se tal informação existe dentro do objeto
// document.body.innerText = ('origem' in jogador)

//Object.keys() - retorna um vetor com todas as chaves do objeto
// document.body.innerText = Object.keys(jogador)

//Object.values() - retorna um vetor com todos os valores do objeto
// document.body.innerText = JSON.stringify(Object.values(jogador));

//Object.entries() retorna um vetor com vários vetores dentro
//cada um dos subvetores do vetor maior tem duas informações dentro,
//no caso a chave e o valor do objeto
document.body.innerText = JSON.stringify(Object.entries(jogador));




