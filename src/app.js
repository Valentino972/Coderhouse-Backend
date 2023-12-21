import express from "express";
import mongoose from "mongoose";
import {engine} from "express-handlebars";
import __dirname from "./utils.js";
import userRoutes from "./routes/users.routes.js";
import viewRoutes from "./routes/views.router.js";

const PORT = 8080;
const app = express();

const MONGO = "mongodb+srv://User:user1234@cluster1.2wullsc.mongodb.net/CoderPractica"

const connection = mongoose.connect(MONGO);


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`))

const httpServer = app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
})

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");



app.use("/api/users", userRoutes);
app.use("/", viewRoutes);

