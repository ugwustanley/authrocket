import { NextFunction, Request, Response } from "express";

export async function userRegister (req: Request, res: Response){

    const { email, password , payload } = req.body

    
    res.status(200).send("registeration successful")
    
}

export async function userLogin (req: Request, res: Response){


}