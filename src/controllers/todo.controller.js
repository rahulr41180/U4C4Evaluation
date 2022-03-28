
const express = require("express");

const router = express.Router();

const Todo1 = require("../models/todo.model");

const authenticate = require("../middlewares/authenticate");

router.post("",authenticate, async(req,res) =>
{
    try
    {
        const Todo = await Todo1.create(req.body);

        return res.status(201).send({Todo : Todo});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

router.get("",authenticate, async(req,res) =>
{
    try
    {
        const Todo = await Todo1.find();

        return res.status(200).send({Todo : Todo});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

router.get("/:id",authenticate, async(req,res) =>
{
    try
    {
        const Todo = await Todo1.findById(req.params.id);

        return res.status(201).send({Todo : Todo});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

router.patch("/:id",authenticate, async(req,res) =>
{
    try
    {
        const Todo = await Todo1.findByIdAndUpdate(req.params.id, req.body, {new : true});

        return res.status(201).send({Todo : Todo});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

router.delete("/:id",authenticate, async(req,res) =>
{
    try
    {
        const Todo = await Todo1.findByIdAndDelete(req.params.id);

        return res.status(200).send({Todo : Todo});
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

module.exports = router;