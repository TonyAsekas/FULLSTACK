const mongoose = require("mongoose");

// Nuestro string de conexion con MongoAtlas viene de nuestra variable de entorno MONGO:URI
const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión a la base de datos establecida");
    }catch(error){
        console.error("Error al conectar a la base de datos:", error.message);
    }
}
module.exports = connect;