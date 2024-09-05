const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    demandOption: true,
    describe: 'Muestra la tabla en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Muestra hasta que numero llega la Multiplicacion'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'la base tiene que ser un numero entero'
    }
    return true;
  })
  .argv;

module.exports = argv;
