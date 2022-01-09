const fs = require('fs');
const colors = require('colors');


//Si la persona no manda la base, será 5 por defecto
const crearArchivo = async (base = 5, listar = false, hasta) => {
    
   
    
    let salida = '';
    
    for(let i=1; i<=hasta;i++){
        salida += (`${base} x ${i} = ${base * i}\n`).brightCyan;
    }
    
    if(listar){
        console.log('==================='.bgRed.black);
        console.log(`   TABLA DEL ${base}`.rainbow);
        console.log('==================='.bgRed.black);
        console.log(salida);
    }
    
    
    //Si no ponemos el path, se tomará como base la carpeta donde se encuentre el archivo
    /* fs.writeFile(`tabla_del_${base}.txt`, salida, (err)=>{
        if (err) throw err;
        console.log(`El archivo tabla_del_${base}.txt ha sido creado.`)
    }) */
    
    let nombre = `tabla_del_${base}.txt`;
    try{
        fs.writeFileSync('tablas/'+nombre, salida); //Para atrapar el error con este método sería con el try/catch
        return nombre;
    }catch(error){
        throw error;
    }
}


module.exports = {
    crearArchivo
}