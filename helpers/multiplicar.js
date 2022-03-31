const fs = require('fs')

const crearArchivo = async(base = 5, listar = false, hasta = false) => {
    
    try {
    

    let salida = ''

    for(let i = 1; i <= hasta; i++){
    salida += `${base} x ${i} = ${base * i}\n`
    }

    if(listar){
        console.log('======================')
        console.log('   Tabla del:', base   )
        console.log('======================')
        console.log(salida)
    }
    
    
    fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida)


    return `tabla-${base}.txt`
    
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}

    // console.log('======================')
    // console.log('   Tabla del:', base   )
    // console.log('======================')

    // let salida = ''

    // for(let i = 1; i <= 10; i++){
    // salida += `${base} x ${i} = ${base * i}\n`
    // }

    // console.log(salida)
    
    // fs.writeFileSync(`tabla-${base}`, salida)

    // console.log(`tabla-${base}.txt creada.`);