const array = [1, 2, 3, 4, 5];

//usando forEach

// const novoArray = [];

// array.forEach(item => {
//   novoArray.push(item * 2);
// })

//-------------------------------------------

//Diferente do forEach, o map pode retornar os itens do array
//modificados, por multiplicação ou divisão por exemplo


// const novoArray = array.map(item => {
//   return item * 2;
// });

const novoArray = array.map(item => {
  if (item % 2 === 0){
    return item * 10
  }

  return item
})

document.body.innerText = JSON.stringify(novoArray)

//o map sempre retorna um array do tamanho do original

