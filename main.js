// main.js
import fs from 'fs';

try {
    // Read input file
    const data = fs.readFileSync('input.txt', 'utf8');
    const lines = data.split(/\r?\n/);
    
    let validOutput = '';
    let invalidOutput = '';

    for (let line of lines) {
        line = line.trim();
        if (!line) continue;

        const tokens = line.split(/\s+/);
        
        // Skip lines that don't have exactly 3 parts
        if (tokens.length !== 3) {
            invalidOutput += line + '\n';
            continue;
        }

        const [name, email, phone] = tokens;

        // Simplified validation:
        // - Email must contain '@'
        // - Phone must start with '+'
        if (email.includes('@') && phone.startsWith('+')) {
            validOutput += `${name} ${email} ${phone}\n`;
        } else {
            invalidOutput += line + '\n';
        }
    }

    // Write output files
    fs.writeFileSync('valid.txt', validOutput.trim());
    fs.writeFileSync('invalid.txt', invalidOutput.trim());
    console.log('Processing completed. Output saved to valid.txt and invalid.txt');

} catch (err) {
    console.error('Error:', err.message);
}