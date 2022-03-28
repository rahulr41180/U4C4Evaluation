
const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    title : {type : String, required : true},
    UserId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
    }
},
{
    timestamps : true,
    versionKey : false

});



const Todo1 = mongoose.model("todo", TodoSchema);