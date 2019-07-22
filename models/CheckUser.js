const mongoose = require("mongoose");
const { Schema } = mongoose;
const checkUserSchema = new Schema({
    _users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    times: Date,
    room: { type: String, required: true },
    trash: { type: Number, default: 1 },
});


mongoose.model("CheckUser", checkUserSchema);

module.exports = checkUserSchema;