import {Request , Response , NextFunction} from 'express'
import {validationSchema} from '../models/validate.models'
import { ValidationError} from '../middleware/customError';


export const emailPasswordValidator = async (req: Request , res: Response , next: NextFunction) =>{

    const requestData  = req.body;

    try {

        const data = await validationSchema.validateAsync( requestData)
        if(data){
            next();
        }
        
    } catch (error) {
        
     //throw new ValidationError(error.message, 400, requestData)
       next(error)
    }

}