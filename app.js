require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT ||  8003;
const cors = require("cors");
const router = require("./routes/router");
require("./db/conn");
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/",(req,res)=>{
    res.json("server start")
})

app.listen(port , ()=>{
    console.log(`server is started at port number : ${port}`);
})