const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type : String,
        required : true
    }
});

userSchema.plugin(passportLocalMongoose); // Adds username, hash, salt, etc.

module.exports = mongoose.model("User", userSchema);