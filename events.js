const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Persona = function (nombre) {
  this.nombre = nombre;
}

//Person hereda de EventEmitter
util.inherits(Persona, eventEmitter);

let persona = new Persona('Bob');

// Creo el evento hablar, que es esa funcion anonima
persona.on('hablar', (mensaje) => {
  console.log(`${persona.nombre}: ${mensaje}`);
});
//llamo al emento hablar 
persona.emit('hablar', 'Hoy es un gran día');

