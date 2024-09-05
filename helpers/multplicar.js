const fs = require('fs');
const colors = require('colors')
const crearArchivo = (base = 5, limit = 10, listar = false, hasta = 10) => {
  try {
    let salida = '';
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
    }
    if (listar) {

      console.log(colors.red.underline('#################'))
      console.log(`## Tabla del ${base} ##`.green)
      console.log(colors.red.underline('#################'))
      console.log(salida.blue);
    };


    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return (`tabla-${base}.txt creado`);
  } catch (err) {
    throw (err)
  }
}


module.exports = {
  crearArchivo
};
