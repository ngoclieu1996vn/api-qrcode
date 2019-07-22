//import { IsMatchPassword } from '../utils/bcrypt' //
let auth = require('../utils/bcrypt')
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const userSchema = new Schema({
    email: { type: String, index: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    key: { type: String, default: "" },
    access_token: { type: String, default: "" },
    trash: { type: Number, default: 1 },
    role: { type: Number, default: 1 } // 1: Admin
});

// class User {
//     IsMatchPassword(candidatePassword) {
//         return auth.IsMatchPassword(candidatePassword, this.password)
//     }
// }
// userSchema.loadClass(User);
// update ko chạy, phải sử dụng hàm presave 
mongoose.model("User", userSchema);

module.exports = userSchema;