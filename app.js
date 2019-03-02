const colors = require('colors');
const { argv } = require('./config/yargs');


let { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let op = argv._[0];


switch (op) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivoName => console.log(`El archivo ${archivoName.green} ha sido creada`))
            .catch(console.log);
        console.log('crear');
        break;

    default:
        console.log('comando no reonocido');
}

// let parametros = argv[2];
// let base = parametros.split('=')[1];

// console.log(argv.base, argv.limite);