//siempre hay que darle el typo, es decir el tipo de dato o variable que va a recibir la funcion en typescrip, la razon: que javascript se come con patatas las variables y las ejecuta sin más.
const multiplicator = (a: number, b: number, printText: string) => { 
    console.log(printText, a * b)
}

const parseArguments = (args): Array<number> => {
    if (args.length =! 4) throw new Error ('Wrong number of arguments') 

    const firstNumber  = Number(args[2])
    const secondNumber = Number(args[3])

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [
            firstNumber, 
            secondNumber
        ]
    } 
    throw new Error('Provided values were not numbers')
    
}

const cleanArguments = parseArguments(process.argv)

const a: number = Number(cleanArguments[0]) //aqui se le esta forzando su transformacion a un numero
const b: number = Number(cleanArguments[1])

multiplicator(a, b, 'Multiplied ${a} and ${b} and the result is: ')