import  { Router } from 'express'
import { emailPasswordValidator , registerValidator , loginValidator } from '../validation/auth.validator'
import { userLogin,  userRegister , getUsers, getApiKey, confirmEmail } from '../controllers/auth.controller'
import RequestAuthentication from '../middleware/auth'
import {generateKey} from '../middleware/keyServices'


const route = Router()


route.post('/register' , registerValidator, userRegister )

route.post("/login", loginValidator , userLogin)

route.get("/confirm/:id", confirmEmail)

route.use(RequestAuthentication)

route.get('/key', (req, res) =>{   res.send(generateKey()) })

route.get('/getkey/:id', getApiKey )

route.get("/getusers/:id", getUsers)


export default route;

