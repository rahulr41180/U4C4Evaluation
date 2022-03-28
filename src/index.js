
const express = require("express");

const app = express();

app.use(express.json());

const {body, validationResult} = require("express-validator");

const {register, login} = require("./controllers/auth.controller");

const UserController = require("./controllers/user.controller");

const TodoController = require("./controllers/todo.controller");

const User1 = require("./models/user.model")

app.use("/user", UserController);

app.post("register",
body("firstName").trim().not().isEmpty().withMessage("First Name Cannot be Empty"),
body("email").isEmail().custom((value) =>
{
    const User = await User1.findOne({email : value})

    if(User)
    {
        throw new Error("Email is already taken");
    }
    return true;
}),
register);

app.post("login", login);

app.use("/todos", TodoController);

module.exports = app;