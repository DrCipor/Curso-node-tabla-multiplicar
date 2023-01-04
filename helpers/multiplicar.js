const fs = require('fs');
require('colors');


const crearTabla = async (base = 5, listar = false, hasta = 10) => {


    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.red} ${base * i}\n`;
        }

        if (listar) {
            console.log('======================='.green);
            console.log(`   Tabla del: ${base}  `.grey);
            console.log('======================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/table-${base}.txt`, salida);

        return `tabla-${base}.txt`.rainbow;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearTabla,
}