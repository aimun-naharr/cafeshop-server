import app from "./app.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const PORT=process.env.PORT|| 5000


const CONNECTION_URL=`${process.env.URL}`
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
   .then(()=>app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`)
   })).catch((error)=>console.log(error.message))

   