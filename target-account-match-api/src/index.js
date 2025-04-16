import express ,{urlencoded}from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

import authRoutes from './routes/authRoutes.js';
import accountRoutes from './routes/accountRoutes.js';





const app=express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());




const port = process.env.PORT || 3000;


// Define routes
app.use('/login', authRoutes);
app.use('/accounts', accountRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}   );

