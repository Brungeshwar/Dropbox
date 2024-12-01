import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function saveFile(fileBuffer, filename) {
    console.log("virat");
    if (!fileBuffer || !filename) {
        throw new Error('Data or filename is missing');
    }
    await fs.writeFile(path.join(process.cwd(), '../../uploads', filename), fileBuffer);
    // await fs.writeFile(path.join(__dirname, '../../uploads', filename), fileBuffer);
}
