import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './db/conn.mjs';
import foodRoutes from './controllers/food.mjs';
import userRoutes from './controllers/user.mjs';
import drinkRoutes from './controllers/drink.mjs';

// creating express application and other variables
const app = express();
const PORT = process.env.PORT || 5050;

// app.use(express.json());

// ================ Set up view engine ================
//
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


// ================ Middleware ================
//
app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

// ================ Routes ================
//

app.use("/drinks", drinkRoutes);
app.use("/foods", foodRoutes);
app.use("/users", userRoutes);

app.get('/', (req, res) => {
    res.send(
        `<div>
     This is my Main Page <br/>
        <a href='/users'>user</a><br/>
        <a href='/foods'>food</a><br/>
        <a href='/drinks'>drink</a>
        </div>`
       
    );
});

app.listen(PORT, () => {
    console.log(`listening`);
});