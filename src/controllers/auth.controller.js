
const express = require("express");

const User1 = require("../models/user.model");

const jwt = require("jsonwebtoken");

const {body , validationResult} = require("express-validator");

require("dotenv").config();

const GenerateToken = (User) =>
{
    return jwt.sign({User}, process.env.JWT_SECRET_KEY);
}

const register = async(req, res) =>
{
    try
    {
        const errors = validationResult(req);
        if (!errors.isEmpty()) 
        {
            return res.status(400).json({ errors: errors.array() });
        }

        let User = await User1.create(req.body);

        const token = GenerateToken(User);

        return res.status(201).send({User : User, token : token});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
}

const login = (req, res) =>
{
    try
    {
        const errors = validationResult(req);
        if (!errors.isEmpty()) 
        {
            return res.status(400).json({ errors: errors.array() });
        }

        const User = await User1.findOne({email : req.body.email});

        const match = User.checkPassword(req.body.password);

        const token = GenerateToken(User);

        return res.status(201).send({User : User, token : token});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
}

module.exports = {register, login};