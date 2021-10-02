import {Request, Response, NextFunction, ErrorRequestHandler} from 'express'
import { ValidationError, AuthenticationError } from './customError'
import { response } from './response'

 const errors = (error:Error , req: Request, res: Response , next: NextFunction) =>{

    if(error instanceof ValidationError){

        res.status(error.status || 400).send(response(false, error.message, null))
    }
    if(error instanceof AuthenticationError){
        res.status(error.status || 400).send(response(false, error.message, null))
    }
    if (error.name == "JsonWebTokenError") {
        res.status(400).send(response(false , error.message, null));
     }
    if (error.name == "SyntaxError") {
        res.status(400).send(response(false , error.message, null));
    } 
    else{
        res.status(500).send(response(false, error.message, null));
    }
}

export default errors;