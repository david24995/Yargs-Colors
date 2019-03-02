const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {


            let resu = i * base;
            data += `${base} * ${i} = ${resu}\r\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Tabla-${base}.txt`);
            }

        })

    });

}

// //#endregion

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            console.log('No es un número');
            return;
        }

        let data = '';

        console.log('========================'.green);
        console.log(`tabla de la base ${base}`.green);
        console.log('========================'.green);

        for (let i = 1; i <= limite; i++) {
            let resu = i * base;
            data += `${base} * ${i} = ${resu}\r\n`;
        }
        console.log(data);

    });

}

module.exports = {
    crearArchivo,
    listarTabla
};