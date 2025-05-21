import express from 'express'
import dotenv from 'dotenv'
import {connectDb} from './config/db.js'
import productroutes from './routes/product.route.js'
import Product from './models/product.model.js'

dotenv.config();


const app=express();
app.use(express.json());
app.use("/api/products",productroutes);
await connectDb();
app.listen(5000,() => {
    console.log("Server Started at http://localhost:5000");
});

