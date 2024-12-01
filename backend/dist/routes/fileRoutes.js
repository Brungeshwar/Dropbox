import express from 'express';
import path from 'path';
//import fs from 'fs/promises';
import fs from 'fs'; // For synchronous methods
import * as fileController from '../controllers/fileController.js';
import multer from 'multer';
import { fileURLToPath } from 'url';
const router = express.Router();
/**
 * Route: POST /
 * Upload a file.
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadDir = path.join(__dirname, 'uploads');
            // Create uploads directory if it doesn't exist
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir);
            }
            cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname);
        },
    }),
});
router.post('/', upload.single('file'), async (req, res) => {
    console.log("post");
    try {
        const uploadedFile = await fileController.uploadFile(req);
        res.status(200).json({
            message: 'File uploaded successfully',
            file: uploadedFile,
        });
    }
    catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({
            error: 'Failed to upload file',
        });
    }
});
/**
 * Route: GET /
 * Fetch all files.
 */
router.get('/', async (req, res) => {
    try {
        console.log("dhoni");
        const files = await fileController.getAllFiles();
        res.status(200).json(files);
    }
    catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).json({
            error: 'Failed to fetch files',
        });
    }
});
/**
 * Route: GET /:filename
 * Download a file by filename.
 */
router.get('/:filename', async (req, res) => {
    const { filename } = req.params;
    try {
        const file = await fileController.getFileByName(filename);
        if (!file) {
            return res.status(404).json({
                error: 'File not found',
            });
        }
        if (!file.filepath) {
            return res.status(404).json({ error: 'File path not found' });
        }
        res.download(file.filepath, filename);
    }
    catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).json({
            error: 'Failed to download file',
        });
    }
});
router.get('/file-content/:filename', async (req, res) => {
    console.log("yes");
    const { filename } = req.params;
    const file = await fileController.getFileByName(filename);
    if (!file) {
        return res.status(404).json({
            error: 'File not found',
        });
    }
    if (!file.filepath) {
        return res.status(404).json({ error: 'File path not found' });
    }
    const filePath = path.join(__dirname, 'uploads', filename);
    fs.readFile(filePath, null, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file.');
        }
        res.send(data);
    });
    // Check if file exists
});
export default router;
