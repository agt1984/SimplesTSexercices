//ejercicio pqueño de Ts de calculadora

type Operation = 'multiply' | 'add' | 'divide' //operaciones de nuestra calculadora, definidas como typo para que puedan ser usadas en otros archivos

//en los parametros de la funcion colocamos tambien el tipo de operacion
const calculator = (a: number, b: number, op: Operation) => {  
    if (op == 'multiply') return a * b  //si op es igual a 'multiply' return multiplicacion de a por b
    if (op == 'add')      return a + b  //si op es igual a 'add' return suma de a por b

    if(op == 'divide') {                    
        if(a === 0 || b === 0) return 'cant divide by cero' //si b es igual a cero
        return a/b
    }
}

//llamamos la funcion para que muestre el resultado por consola
console.log(calculator( 5, 2,'add'))
console.log(calculator( 5, 2,'divide'))
console.log(calculator( 5, 2,'multiply'))

