import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloundinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app= express();

await connectCloundinary();

app.use(cors({
    origin: [
        'https://vello-ai.vercel.app', 
        'https://velo-ai-server.vercel.app', 
        'http://localhost:3000',
        'http://localhost:5173',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'], 
}));
app.use(express.json());
app.use(clerkMiddleware());


app.get('/',(req,res)=>{
    res.send("Server is live")
})

app.use(requireAuth())

app.use('/api/ai',aiRouter)
app.use('/api/user',userRouter)


const port =process.env.PORT || 3000;


if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => console.log('Server started on port : ' + port));
}