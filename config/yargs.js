const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de nultiplicar', opts)
    .command('crear', 'Crea un archivo de una tabla con base y limite', opts)
    .help().argv;

module.exports = {
    argv
};