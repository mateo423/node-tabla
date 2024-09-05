const { crearArchivo } = require('./helpers/multplicar');
const argv = require('./config/yargs');

console.clear()

try {

  const nombreArchivo = crearArchivo(argv.b, 10, argv.l, argv.h)
  console.log(nombreArchivo)
} catch (err) {
  console.log(err);
};


//const [, , arg3 = 'base=5', arg4 = 'limit=10'] = process.argv;
//const [, base = 5] = arg3.split('=')
//const [, limit = 10] = arg4.split('=')

//crearArchivo(base, limit)
// .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
// .catch(err => console.log(err));

