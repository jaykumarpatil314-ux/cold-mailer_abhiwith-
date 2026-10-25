import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"
import fileRoutes from "./routes/file.routes.js"
import mailRoutes from "./routes/mail.routes.js"

const app=express()

const port=5000
app.use(express.json())
app.listen(port,()=>{
    console.log("Server is running on port "+port)
})

connectDB()
app.use("/api/mail",mailRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/files",fileRoutes);

app.get('/',(req,res)=>{
res.send("Cold Mailer API is running...")
})