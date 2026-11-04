const jwt = require("jsonwebtoken");

const createToken = (id, email) => {
  // Creamos un token con el id y el email del usuario
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    
  });
}