import express from 'express'
import cors from 'cors'

import routes from './src/routes/auth.route'


const app = express();
app.use(cors());



app.get('/' , (req, res) => {
    res.send("Hello World")
})

app.use("v1"  , routes)

const PORT = process.env.PORT || 8080

app.listen(PORT , () =>{
    console.log(`port running at ${PORT}`)
})