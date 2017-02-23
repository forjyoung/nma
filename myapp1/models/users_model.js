const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let UserSchema = new Schema({
    username : {type : String, unique : true},
    email : String,
    color : String,
    hashed_password : String
});
mongoose.model('User', UserSchema);