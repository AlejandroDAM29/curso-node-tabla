//Imprimir la tabla del 5 en otro archivo

//Ahora hago desestructuración de objetos para pillar la propiedad que quiera del módulo que he exportado
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./yargs/yargs');




console.clear();

//console.log(process.argv);


/* console.log(argv);
console.log('Base de Yargs: ', argv.base); */




//Desestructuración del arreglo de los procesos. También le agrego un valor por defecto
/* const [,,arg3 = 'base=5'] = process.argv;
const [,base = 5] = arg3.split('='); */
//console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
      .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
      .catch( err => console.log(err));

