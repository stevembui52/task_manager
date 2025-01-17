import express from "express";
import Task from "../models/Task.js"
import asyncWrapper from "../middleware/async.js";
import { customError } from "../error/custom-error.js";

const getAllTasks = asyncWrapper (async (req, res)=>{
        const done = await Task.find()
        res.status(200).json({tasks:done})
})


const createTasks = asyncWrapper (async(req, res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task});
})

const getTask = asyncWrapper ( async(req, res, next)=>{
        const { id:taskId } = req.params
        const task = await Task.findOne({_id : taskId})
        if (!task){
                return next(customError(`task with id ${taskId} not found`, 404))
        }
        res.status(200).json({task})
})


const updateTask = asyncWrapper (async (req, res)=>{
        const {id:taskId} = req.params
        const task = await Task.findOneAndUpdate({_id:taskId}, req.body,
        {       new:true,
                runValidators:true,
        })
        if (!task){
                return customError(`task with id ${taskId} not found`, 404)
        }
        res.status(200).json({task})
})

const deleteTask = asyncWrapper( async(req, res)=>{
        const {id:taskId} =  req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if (!task){
                return customError(`task with id ${taskId} not found`, 404)
        }
        res.status(200).json({msg:`task with id ${taskId} deleted successifuly`})
})


export {getAllTasks, createTasks, getTask, updateTask, deleteTask}