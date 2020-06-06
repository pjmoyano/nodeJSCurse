const exec = require('child_process').exec

exec('shell.bat', (err, res) => {
  if (err) {
    throw err;
  }
  console.log('Command executed');
  console.log(res)
});