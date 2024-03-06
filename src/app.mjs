import express from "express";
import router from "./routes/index.mjs"
import mongoose from "mongoose";

const app = express();
mongoose.connect("mongodb://localhost/restaurantapp")
        .then(()=> console.log("Database connected"))
        .catch((err) => console.log(`Error:${err}`));

app.use(express.json());

app.use(router);




module.exports = app;