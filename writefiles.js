const fs = require("fs");
const file = 'writingfile.txt'

//validate is file exist
if (fs.existsSync(file)) {
  console.log('ExistsSync: File exists');
} else {
  console.log('ExistsSync: File dosent exists');
}

//Diferent way to verify
fs.access(file, fs.constants.F_OK, (err) => {
  if (err) {
    console.log('Access: File dosent exists')
  }
  else {
    console.log('Access: File exists');
  }
});

//write file sync mode or rewrite also
const content = 'Hello world!!!!';
fs.writeFileSync(file, content);
console.log('Sync write Succes');

//Async mode
fs.writeFile(file, content, (err) => {
  if (err) {
    throw err;
  }
  console.log('Aync write Success')
})


//for add text to the same file

const addContent = '\nHola Mundo!!';
fs.appendFile(file, addContent, (err) => {
  if (err) {
    throw err;
  }
  console.log('Add content success')
})
