const $ = require('jquery');
let sayHello = name => console.log(`Hello ${name}!`);

sayHello('Mykel');
sayHello('Millie');

$('h1').css('background-color', 'blue');
$('body').css('background-color', 'red');
$('h5').css('background-color', 'green');

//require name variable setup in req.js file
const name = require('./req.js');
console.log(name);