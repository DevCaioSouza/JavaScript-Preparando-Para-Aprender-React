//O nullish coalescing operator é pra fazer com que o zero 
//não seja interpretado como valor nulo pelo JavaScript

//lembrando que os seguintes valores são considerados não válidos
// 0, '', [], false, undefined, null => 'falsy'

const idade = 0;

//dessa forma com || mesmo se colocado valor zero continua 
//passando não informado
// document.body.innerText = 'A idade de Caio é ' + (idade || 'Não Informado' );

//porém se usarmos o nullish coalescing operator, o zero será valor válido
document.body.innerText = 'A idade de Caio é ' + (idade ?? 'Não Informado' );
