import mongoose from "mongoose";
const connString = 'mongodb://localhost:27017/TASK-MANAGER';



const connectDB = (url) =>{
    return  mongoose.connect(connString)
}

export default connectDB;
