import express from 'express';
import routes from "./routes/tasks.js";
import connectDB from './db/connect.js';

const PORT  = process.env.PORT
const app = express();

app.use("/api/v1/tasks", routes);

app.get("/", (req, res)=>{
    res.json({App:"Task manager app"})
})


const spinServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () =>{
            console.log(`server is running on port ${PORT}`)}); 
    } catch (error) {
        console.log(error);
        
    }
}

spinServer()
