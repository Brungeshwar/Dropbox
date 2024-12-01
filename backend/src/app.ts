import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs/promises';
import { PrismaClient } from '@prisma/client';
import fileRoutes from './routes/fileRoutes.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true })); // Parses URL-encoded requests

const prisma = new PrismaClient();


app.use('/api/files', fileRoutes);

app.use(errorHandlerMiddleware);
console.log("Code ran without any errors")
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
