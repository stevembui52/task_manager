import express, { json } from 'express';
import routes from "./routes/tasks.js";
import connectDB from './db/connect.js';
import notFound from './middleware/notfound.js'
import errorHandler from './middleware/error-handler.js';

const PORT  = process.env.PORT
const URI = process.env.MONGO_URI
const app = express();

app.use(express.json())

app.use("/api/v1/tasks", routes);
app.use(notFound)
app.use(errorHandler)

app.get("/", (req, res)=>{
    res.json({App:"Task manager app"})
})


const spinServer = async () => {
    try {
        await connectDB(URI);
        app.listen(PORT, () =>{
            console.log(`server is running on port ${PORT}`)}); 
    } catch (error) {
        console.log(error);
        
    }
}

spinServer()
