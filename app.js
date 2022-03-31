const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Valor de la base'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Número de iteraciones'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw 'La base debería recibir un número'
                }

                return true
            })
            .argv

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))