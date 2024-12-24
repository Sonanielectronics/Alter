var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  Mail: { type: String, required: true },

});

var User = mongoose.model('User', UserSchema); // 1

module.exports = { User };