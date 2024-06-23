import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import jobRouter from './routes/jobRouter.js';
import userRouter from './routes/userRouter.js';
import applicationRouter from './routes/applicationRouter.js';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './middlewares/error.js';


const app = express();
dotenv.config()

app.use(cors({
    origin: process.env.FRONTEND_URL
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
    }));

app.use('/api/user', userRouter);
app.use('/api/job', jobRouter);
app.use('/api/application', applicationRouter);

dbConnection();

app.use(errorMiddleware)

export default app;