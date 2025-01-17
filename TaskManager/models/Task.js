import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name:{type:String,
        required:[true, "Name cannot be blank"],
        maxlength:[20, "Task name cannot be more than 20 chars"],
        trim:true,
    },
    completed:{type:Boolean,
        default:false,
    },
})

export default mongoose.model('Task', TaskSchema)