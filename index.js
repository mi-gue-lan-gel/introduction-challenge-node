const myObject = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Hi :-) my name is ${myObject.someObject.name} from the ${myObject.someObject.campus} campus.`,
    e: 'oO',
    T: 'U '
}));
