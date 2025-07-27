// main.js
import fs from 'fs';

try {
    // Read input file
    const data = fs.readFileSync('input.txt', 'utf8');
    const lines = data.split(/\r?\n/).filter(line => line.trim() !== '');
    
    let validOutput = '';
    let invalidOutput = '';
    let inputCount = 0;
    let validCount = 0;
    let invalidCount = 0;

    for (let line of lines) {
        inputCount++;
        const tokens = line.trim().split(/\s+/);
        
        // Skip lines that don't have exactly 3 parts
        if (tokens.length !== 3) {
            invalidOutput += line + '\n';
            invalidCount++;
            continue;
        }

        const [name, email, phone] = tokens;

        // Convert name from "First_Last" to "First Last"
        const formattedName = name.replace(/_/g, ' ');
        
        // Validation: email must contain '@', phone must start with '+'
        if (email.includes('@') && phone.startsWith('+')) {
            validOutput += `${formattedName} ${email} ${phone}\n`;
            validCount++;
        } else {
            invalidOutput += line + '\n';
            invalidCount++;
        }
    }

    // Write output files
    fs.writeFileSync('valid.txt', validOutput.trim());
    fs.writeFileSync('invalid.txt', invalidOutput.trim());
    
    // Display counts
    console.log(`Input: ${inputCount}, Valid: ${validCount}, Invalid: ${invalidCount}`);
    console.log('Processing completed. Output saved to valid.txt and invalid.txt');

} catch (err) {
    console.error('Error:', err.message);
}