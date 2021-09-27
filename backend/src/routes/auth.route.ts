import  { Router } from 'express'


const route = Router()

route.post('/register' , (req, res) =>{

    res.send("registration side is reached")
})

route.post("/login" , (req, res) =>{
    res.send("login part is reached")
})

export default route;

