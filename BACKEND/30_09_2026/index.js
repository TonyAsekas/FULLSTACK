const fs = require("fs")

fs.writeFile("arichivoNuevo.txt", 
    " Hola bienvenidos a Backend con NodeJS, scripting y JS",
     "utf8",
      (error) => {
        if (error) {
            console.error("Error al escribir el archivo:")
            }
         console.log("Archivo creado correctamente")
})

fs.readFile("arichivoNuevo.txt", "utf8", (error, data) => {
    if (error) {
        console.error("Error al leer el archivo:", error)
        return;
         }
   
    const newDataA = data.replaceAll("a", "o")
    const newDataB = data.replaceAll("e", "o")
    const newDataC = data.replaceAll("i", "o")
    const newDataD = data.replaceAll("u", "o")

    console.log(newDataD)
    
})