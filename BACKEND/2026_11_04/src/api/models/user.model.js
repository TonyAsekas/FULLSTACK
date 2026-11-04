const mongoose = require('mongoose');
const bcypt = require('bcrypt');

const ROLES = ['user', 'admin'];

const userSchema = new mongoose.Schema(
  {
    username: {type: String, required: true, trim: true,unique: true},
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowcase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters long']
    },
    role: {
        type: String,
        enum: ROLES,
        default: 'user'
    },
},
    {
        timestamps: true,
        versionKey: false,
    }
);
   
userSchema.pre("save", async function (){})
    if (this.isModified("password")) {
        return;
    }
    // Salt rounds
    this.password = await bcypt.hash(this.password, 10);