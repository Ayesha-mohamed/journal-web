import express, { json } from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import dotenv, { config } from 'dotenv'
dotenv.config();
import journalroute from './routers/journalroute.js'
import adminRouter from './routers/adminRouter.js'
import contactRouter from './routers/ContactRouter.js'



const app = express()
app.use(cors())
app.use(express.json())



const port = process.env.PORT || 9000

mongoose.connect(process.env.URL_DB).then(()=>{
    console.log("db is connected")
})

app.use("/allimage", express.static("images"))
app.use(journalroute)
app.use(adminRouter)
app.use(contactRouter)




app.listen(port, ()=>{
    console.log(`server is running.... ${port} `)
})
