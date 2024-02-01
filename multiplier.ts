//siempre hay que darle el typo, es decir el tipo de dato o variable que va a recibir la funcion en typescrip, la razon: que javascript se come con patatas las variables y las ejecuta sin más.
const multiplicator = (a: number, b: number, printText: string) => { 
    console.log(printText, a * b)
}

multiplicator(2, 4, 'Multiplication numebers 2 and 4, the result is: ')