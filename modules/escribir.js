const fs = require('fs');
const escribir = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2))
   
module.exports = escribir;