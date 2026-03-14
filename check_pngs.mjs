import fs from 'fs';
import { walk } from 'node-os-walk'; // I'll use a simpler way

async function checkPng(path) {
    try {
        const buffer = fs.readFileSync(path);
        if (buffer.length < 8) return false;
        // Check PNG signature: 89 50 4E 47 0D 0A 1A 0A
        const signature = buffer.slice(0, 8);
        const expected = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
        if (!signature.equals(expected)) return false;
        return true;
    } catch (e) {
        return false;
    }
}

// Simple walk
function getFiles(dir, files_) {
    files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (const i in files) {
        const name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

const allFiles = getFiles('e:/1920s/src');
for (const file of allFiles) {
    if (file.endsWith('.png')) {
        checkPng(file).then(valid => {
            if (!valid) console.log(`INVALID: ${file}`);
            else console.log(`VALID: ${file}`);
        });
    }
}
