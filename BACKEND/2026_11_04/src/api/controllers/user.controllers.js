const User = require('../models/user.model');
const createError = require('../../utils/createError');


const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
    }catch (error) {
        next(createError(400, error.message));
    }
}