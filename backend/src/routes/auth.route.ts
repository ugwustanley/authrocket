import  { Router } from 'express'
import { emailPasswordValidator } from '../validation/auth.validator'


const route = Router()

route.post('/register' , emailPasswordValidator,  (req, res) =>{

    res.send("registration side is reached")
})

route.post("/login", emailPasswordValidator, (req, res) =>{
    res.send("login part is reached")
})

export default route;

