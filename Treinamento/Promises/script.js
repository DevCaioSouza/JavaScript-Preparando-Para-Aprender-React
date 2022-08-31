//Promises - Promessa de que algo irá acontecer
//Sua premissa é de que existe uma latência com o servidor
//Então ela procura executar tratativas em paralelo, enquanto
//aguarda a resposta da "promessa" 

//-----Exemplo_01-----

const somaNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(a + b);
    }, 2000);
  })
}

somaNumeros(1, 3)
  .then(soma => {
    document.body.innerText = soma
  })
  .catch (err => {
    console.log(err)
  })