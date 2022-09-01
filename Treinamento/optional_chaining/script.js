const jogador = {
  name: 'Romário',
  idade: 32,
  residencia: {
    cidade: 'Rio de Janeiro',
    bairro: 'Morada Real',
    rua: 'Severino Dutra',
    numero: 180,
    // zip: {
    //   cep: '12405-200',
    //   logradouro: 'Travessa Marisa Roma'
    // }
  },
};

//podemos acessar o objeto dessa forma
//document.body.innerText = jogador.residencia.rua

//caso o "residencia" não exista, precisamos programar alguma 
//resposta alternativa, usando optional chaining
// document.body.innerText = jogador.residencia ? jogador.residencia.rua : 'Não informado'
//se o residencia existir, mostramos o resultado após a "?"
//caso contrário, exibimos o que vem após o ":"

//podemos também usar uma versão reduzida, e usar nullish coaslescing
//o ponto de "?" indica que tal chave pode não existir 
document.body.innerText = jogador.residencia?.zip?.cep ?? 'Não informado';

//Para testar: remover o comentário do objeto "zip" (nesse commit funciona!)