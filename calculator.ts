//ejercicio pqueño de Ts de calculadora
const operations = ['multiply', 'add', 'divide'] //operaciones de nuestra calculadora

const calculator = (a: number, b: number, op: string) => {
    if (operations.includes(op)) {
        console.log('This operation is not defined')
    }

    if (op == 'multiply') return a * b  //si op es igual a 'multiply' return multiplicacion de a por b
    if (op == 'add')      return a + b  //si op es igual a 'add' return suma de a por b

    if(op == 'divide') {                    
        if(a === 0 || b === 0) return 'cant divide by cero' //si b es igual a cero
        return a/b
    }
}

