
const mongoose = require("mongoose");

const Connectdb = () =>
{
    return mongoose.connect("mongodb+srv://rahulr41180:Rahul12345@cluster0.jjbeq.mongodb.net/U4C4Evaluation?retryWrites=true&w=majority")
}

module.exports = Connectdb;