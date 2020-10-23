const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${ base } * ${ index } = ${ base * index }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }-al-${ limite }.txt`);
            }
        });
    });
};

let listarTabla = (base, limite = 10) => {
    for (let index = 1; index <= limite; index++) {
        console.log(`${ base } * ${ index } = ${ base * index }`);
    }
};

module.exports = {
    crearArchivo,
    listarTabla
};