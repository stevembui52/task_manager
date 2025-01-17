import { CustomAPIError } from "../error/custom-error.js"
const errorHandler = (err, req, res, next) =>{
    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg : err.message})
    }
    return res.status(400).json({msg : err.message})
}

export default errorHandler