var readline = require('readline');
var util = require('util')

var rl = readline.createInterface(process.stdin, process.stdout);

var person = {
  name: '',
  coments: []
}
rl.question('Whats youre name?: ', (res) => {
  person.name = res;
  rl.setPrompt('coments?: ');
  rl.prompt();
});

rl.on('line', (input) => {
  if (input.trim() == 'exit') {
    var mensaje = util.format("You are %s and these are youre coments: %j", person.name, person.coments);
    console.log(mensaje);
    //if I write exit, the programs end
    process.exit()
  }
  person.coments.push(input.trim());
  rl.setPrompt('coments?: ');
  rl.prompt();
});