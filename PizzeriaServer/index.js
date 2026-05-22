import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/database.js';

import pizzaRoute from './routes/pizza.Route.js';
import ingredientRoute from './routes/ingredient.Route.js';
import cartRoute from './routes/cart.Route.js'

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());

const corsOption={
    origin:'http://localhost:5173',
    credentials:true
};
app.use(cors(corsOption));

app.use("/api/v1/pizzas", pizzaRoute);
app.use('/api/v1/ingredients', ingredientRoute);
app.use('/api/v1/cart', cartRoute);



app.listen(PORT, async ()=>{
  await connectDB();
  console.log(`server listening at PORT ${PORT}`)
})