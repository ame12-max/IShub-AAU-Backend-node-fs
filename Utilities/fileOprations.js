

import fs from 'fs';

export const readFile = async (filePath) => {
    try {
        return await fs.promises.readFile(filePath, 'utf8');
    } catch (error) {
        throw new Error(`Error reading file: ${error.message}`);
    }
};

export const writeFile = async (filePath, data) => {
    try {
        await fs.promises.writeFile(filePath, data, 'utf8');
    } catch (error) {
        throw new Error(`Error writing file: ${error.message}`);
    }
};