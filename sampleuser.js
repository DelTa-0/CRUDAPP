const mongoose=require('mongoose');
mongoose.connect(`mongodb://localhost:27017/practice`);
const userSchema=mongoose.Schema({
    name:String,
    age:String,
    email:String
})

module.exports=mongoose.model('user',userSchema);