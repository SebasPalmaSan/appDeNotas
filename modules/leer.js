const fs = require('fs');
const leer = file => JSON.parse(fs.readFileSync(file, 'utf8'))
    
module.exports = leer
