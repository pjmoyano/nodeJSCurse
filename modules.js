//Import module path
var path = require('path');
var util = require('util');


console.log(path.basename(__filename));
//Return modules.js 

console.log(path.join('c:', 'cmder', 'plugins'));
// Returns: 'c:/cmder/plugins

console.log(util.isBoolean(true))
// Return true because is a boolean

var name = 'Day';
var yr = 18;
var txt = util.format("Hi %s, you are %d years old", name, yr);
console.log(txt)
//Returns Hi Day, you are 18 years old  // %s for String %d for Number
