import express from "express";

import userRoutes from "./routes/user.routes"

const app = express();

app.use(express.json())

app.use(userRoutes)

app.listen(4000,()=>{
    console.log('Server is listening on port 4000')
})