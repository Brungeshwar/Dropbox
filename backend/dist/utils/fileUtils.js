import path from 'path';
import fs from 'fs/promises';
export async function saveFile(fileBuffer, filename) {
    await fs.writeFile(path.join(__dirname, '../../uploads', filename), fileBuffer);
}
