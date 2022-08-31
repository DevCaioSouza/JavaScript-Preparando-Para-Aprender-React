//Promises - Promessa de que algo irá acontecer
//Sua premissa é de que existe uma latência com o servidor
//Então ela procura executar tratativas em paralelo, enquanto
//aguarda a resposta da "promessa" 

//-----Exemplo_01-----

// const somaNumeros = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       resolve(a + b);
//     }, 2000);
//   })
// }

// somaNumeros(1, 3)
//   .then(soma => {
//     document.body.innerText = soma
//   })
//   .catch (err => {
//     console.log(err)
//   })

//-----Exemplo_02-----

fetch('https://api.github.com/users/manoCaioZ')
  .then(res => {
    res.json()
  .then(body => {
    console.log(body)
    })
  })
  .catch(err =>{
    console.log(err)
  })
  .finally(() =>{
    console.log('deu tudo certo')
  })

//res.text()-> o text() é uma promise, que irá retornar uma string
//podemos tambem usar json()

//vamos chamar o alinhamento dos .then() de tratativa da promessa
//o primeiro trata do formato da resposta, o subsequente utiliza
//esses dados de alguma forma

//o finally sempre será executado independente do sucesso ou não da promessa