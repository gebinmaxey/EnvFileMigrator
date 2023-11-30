const fs = require('fs').promises;
const path = require('path');
/// replace with your path
const parentDir = path.resolve(__dirname, '../');

async function createFolderIfNotExist(folderPath) {
    try {
        await fs.access(folderPath);
        console.log(`Folder already exists: ${folderPath}`);
    } catch {
        await fs.mkdir(folderPath, { recursive: true });
        console.log(`Folder created: ${folderPath}`);
    }
}


async function findEnvFiles(dir) {
    let items;
    try {
        items = await fs.readdir(dir, { withFileTypes: true });
    } catch (err) {
        console.error(`Error reading directory ${dir}:`, err);
        return;
    }
    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            // If it's a directory, recursively search this directory
            await findEnvFiles(fullPath);
        } else if (item.isFile() && item.name.endsWith('.env')) {
            // If it's a file and ends with .env, log the full path
            // I am saving files under folder in this directory called data
            let subFolderPath = path.join(__dirname, 'data', fullPath.replace(parentDir, '').replace(".env", ''))
            let filename = item.name
            let content = await fs.readFile(fullPath, 'utf8');
            let writeFilePath = path.join(subFolderPath, filename);
            await createFolderIfNotExist(subFolderPath)
            await fs.writeFile(writeFilePath, content, 'utf8');
            console.log(`Saved .env files from ${fullPath} to ${writeFilePath}`)
        }
    }
}

// Replace with your path
findEnvFiles(parentDir);