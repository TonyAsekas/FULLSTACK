const mongoose = require("mongoose")

// Creamos enums
const BRANDS = ["Sony", "Microsoft", "Valve", "Nintendo", "Other"];
const CONSOLE_TYPES = ["Home", "Portable", "Hybrid"]
const MEDIA_FORMAT = ["Digital","Disc","Cartridge","Mixed"]

// Creamos el esquema 
const consoleSchema = new mongoose.Schema({
    name:{type: String, required: true, trim: true, unique: true},
    brand: {type: String, required: true, enum: BRANDS},
    releaseYear: {type: Number, required: false, min: 1990, max: 2100},
    type: {type: String,  enum: CONSOLE_TYPES, default: "Home"},
    mediaFormat: {type: String, enum: MEDIA_FORMAT, default: "Mixed"},
    storageGB: {type: Number, min: 0, default: 500},
    image: {type: String, trim: true}
},
{
    timestaps: true,
    versionKey: false,
})

const Console = mongoose.model("Console",consoleSchema)
module.exports = Console 