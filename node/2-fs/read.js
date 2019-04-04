const fs = require('fs');
const path = require('path');
//*file
fs.readFile(__filename, 'utf-8', (err, file) => {
    if (err) {
        console.log('error: ', err);
        return
    }
    console.log('async readFile', file.lenght);
    
});

const file = fs.readFileSync(__filename, 'utf-8');
console.log('sync readFile', file.lenght);


//Directiry
fs.readdir(__dirname, (err, dir) =>{
    console.log('async dir', dir);
    
});
const dir = fs.readdirSync(__dirname)
console.log('sync readdir', dir);
