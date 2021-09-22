//importing env variables
require("dotenv").config();

//libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

//database connection
import ConnectDB from "./database/connection";



zomato.get("/",(req,res) => res.json({message:"Setup succes"}));

zomato.listen(4000,()=>
ConnectDB()
.then( () => console/log("Server is running")) 
.catch(() => console.log("server is running but database connection failed")));