const information = require('./information');
var cowsay = require('cowsay');

console.log(cowsay.say({
	text : `Hi, my name is ${information.name} and I'm a student at ${information.campus}campus`,
	e : "oO",
	T : "U "
}));
