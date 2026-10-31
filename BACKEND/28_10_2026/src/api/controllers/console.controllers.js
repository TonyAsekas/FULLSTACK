const createError = require('../utils/createError');
const Console = require('../models/console.model');

const getAllConsoles = async (req, res, next) => {
  try {
    const consoles = await Console.find()
    res.status(200).json(consoles);
  } catch (error) {
    return next(createError("no se pudo obtener las consolas", 404))
  }
} 