var fs = require('fs'),
    buffer, lines;

buffer = fs.readFileSync(process.argv[2], 'utf-8');
lines = buffer.split('\n').length - 1;

console.log(lines);
