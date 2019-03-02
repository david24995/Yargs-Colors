const parametros = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', parametros)
    .command('crear', 'Crea una tabla con los parametrs base y limite', parametros)
    .help()
    .argv;

module.exports = {
    argv
};