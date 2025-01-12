import express from "express";

const getAllTasks = (req, res)=>{
    res.send({Msg:"get all tasks"});
}


const createTasks = (req, res)=>{
    res.send({Msg:"create a task"});
}

const getTask =(req, res)=>{
    res.send({Msg:"get one task"});
}


const updateTask =(req, res)=>{
    res.send({Msg:"update one task"});
}

const deleteTask =(req, res)=>{
    res.send({Msg:"delete one task"});
}


export {getAllTasks, createTasks, getTask, updateTask, deleteTask}