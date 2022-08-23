// comece a criar a sua função add na linha abaixo


// descomente a linha seguinte para testar sua função
//console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');
function add (n1, n2) {
  return n1 + n2
}

// comece a criar a sua função multiply na linha abaixo
function multiply (n1 , n2) {
    let contador = 0 
    for ( let i = 0 ; i < n2 ; i++) {
        contador = add(n1,contador)
    }
    return contador

}

// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (x , n) {
    let potencia = 1
    for (i=0; i < n; i++) {
        potencia = multiply(x, potencia)
    }
    return potencia
}

// descomente a linha seguinte para testar sua função
 //console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (a) {

    let fatorial = 1

    for (let i=1; i <= a; i++) {
        

        fatorial = multiply(i,fatorial)

        
    }
    return fatorial
}

// descomente a linha seguinte para testar sua função
 //console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
