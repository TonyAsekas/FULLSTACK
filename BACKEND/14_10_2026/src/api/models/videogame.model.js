const mongoose = require("mongoose")

const GENRES = [
    "Action",
    "Adventure",
    "RPG",
    "Shooter",
    "Sports",
    "Racing",
    "Strategy",
    "Simulation",
    "Platform",
    "Puzzle",
    "Horror",
    "Indie",
    "Other",
]

const PEGI_VALUES =[3,7,12,16,18]

const videogamesSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    studio: {type: String, trim: true, default: "Unknown Studio"},
    releaseYear: {type: Number, required: false, min:1990, max:2100},
    genre:  {type: String, enum: GENRES, default: "Other"},
    pegi: {type: Number, enum: PEGI_VALUES, default: 12},
    price: {type: Double, min:0, default: 0},
    rating: {type: Double, min: 0, max: 109, default: 0},
    multioplayer: {type: Boolean, default: false},
    stock: {type: Number, min: 0, default: 0},
    console: [{type: mongoose.Schema.Types.ObjectId, ref: "Console" }],
    validate: {
        validator: (consoles) => comnsole.length > 0,
        message: "El videojuego tiene que estar disponible en al menos una consola",
    },
},
    {
    timestamps: true,
    versionKey: false,
    }
)
const Videogame = mongoose.model("Videogame", videogamesSchema)
module.exports = Videogame