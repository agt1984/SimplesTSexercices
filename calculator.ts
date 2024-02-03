//ejercicio pqueño de Ts de calculadora

type Operation = 'multiply' | 'add' | 'divide' //operaciones de nuestra calculadora, definidas como typo para que puedan ser usadas en otros archivos
type Result    =  number                       //aqui definimos este type como number, con la idea de usar en la funcion de mas abajo

//en los parametros de la funcion colocamos tambien el tipo de operacion, atento a la sintaxis de abajo, esta funcion tiene un parametro adicional, vé el ":" y luego el Result, este se encarga de decirle a la funcion que solo atrapara y devolvera un number. Esto es considerado una buena practica, que una funcion devuelva un solo tipo de variable
const calculator = (a: number, b: number, op: Operation): Result => {  
    if (op === 'multiply') return a * b  //si op es igual a 'multiply' return multiplicacion de a por b
    if (op === 'add')      return a + b  //si op es igual a 'add' return suma de a por b

    if(op == 'divide') {                    
        if(a === 0 || b === 0) throw new Error('Cant divide by 0')
        return a/b
    }

    throw new Error('Operation is not valid')
}

console.log(process.argv) //todas las posiciones del array

//llamamos la funcion para que muestre el resultado por consola
console.log(calculator( 5, 2,'add'))
console.log(calculator( 5, 2,'divide'))
console.log(calculator( 5, 2,'multiply'))

