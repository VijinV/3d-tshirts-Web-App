import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();
app.use(express.json({limit:"50mb"}));
app.use(cors());


app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello world"})
})


app.use('/api/v1/dalle',dalleRoutes)

app.listen(3000,()=>console.log("server listening on port 3000"))