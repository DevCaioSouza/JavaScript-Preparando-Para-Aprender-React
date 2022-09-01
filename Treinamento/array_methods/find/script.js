const array = [1, 2, 3, 4, 5]

const pares = array.find(item => item % 2 === 0);

// document.body.innerText = JSON.stringify(pares)

//o find retorna apenas o primeiro item que case com a descrição
//depois de percorrer o array do começo ao fim

//para achar o índice aonde o elemento foi encontrado 
//utilizamos findIndex

const parIndex = array.findIndex(item => item % 2 === 0)

document.body.innerText = JSON.stringify(parIndex)
