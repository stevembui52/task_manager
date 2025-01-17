import express from 'express';
import { getAllTasks, createTasks, getTask, updateTask, deleteTask } from '../controllers/tasks.js';

const routes = express.Router()

routes.get("/", getAllTasks)
routes.post("/", createTasks)
routes.get("/:id", getTask)
routes.patch("/:id", updateTask)
routes.delete("/:id", deleteTask)


export default routes;