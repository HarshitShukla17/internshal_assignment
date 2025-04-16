import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const readJSON = async (filePath) => {
  const fullPath = path.join(__dirname, '..', '..', filePath);
  const data = await fs.readFile(fullPath, 'utf-8');
  return JSON.parse(data);
};

export const writeJSON = async (filePath, data) => {
  const fullPath = path.join(__dirname, '..', '..', filePath);
  await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
};
