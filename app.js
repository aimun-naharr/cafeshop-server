import express from 'express';
import bodyParser from 'body-parser';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js'
import cors from 'cors'

const app=express()

// middlewares
// const corsOptions ={
//   origin:'*', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200,
//   methods: ['GET','PUT','DELETE', 'POST', 'PATCH'],
//   allowedHeaders: 'Content-Type,Authorization'
// }
app.use(cors())
app.use(bodyParser.json({limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true }))

app.get("/", (req, res) => {
   res.send("Route is working! YaY!");
 });
 app.use('/api/products', productRoute)
 app.use('/api/users', userRoute)
 
export default app