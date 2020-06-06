const fs = require("fs");

//This is a Sync function, so nodw wait to finish 
var files = fs.readdirSync('./');

//this is to do with carching the error , the same result
fs.readdir('./', (error, dir) => {
  if (error) {
    throw error;
  }
  console.log(dir)
});

console.log(files);

let archivo = fs.readFileSync('./shell.bat', 'UTF-8');

fs.readFile('./shell.bat', 'UTF-8', (error, file) => {
  if (error) {
    throw error;
  }
  console.log(file)

})

console.log(archivo)