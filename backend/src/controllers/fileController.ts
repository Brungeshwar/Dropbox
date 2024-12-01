import { PrismaClient } from '@prisma/client';
import { File } from '../models/File.js';
import * as fileUtils from '../utlis/fileUtils.js';
import path from 'path';
import { prisma } from '../config/database.js';
import { fileURLToPath } from 'url';
import fs from 'fs/promises'; // For synchronous methods
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function uploadFile(req: any): Promise<File> {
  const file = req.file;
  console.log("file-",file)
  if (!file) throw new Error('No file uploaded');

  
  const filename = file.filename; // Original file name
  const uploadedFilePath = file.path; // Path to the uploaded file on disk
  // Read the file contents from disk
  //const fileBuffer = await fs.readFile(uploadedFilePath);
  //await fileUtils.saveFile(fileBuffer, filename);

  const newFile = await prisma.file.create({
    data: {
      filename,
      filepath:uploadedFilePath,
    },
  });

  return newFile;
}

export async function getAllFiles(): Promise<File[]> {
  return await prisma.file.findMany();
}

export async function getFileByName(filename: string): Promise<File | null> {
  return await prisma.file.findFirst({ where: { filename } });
}