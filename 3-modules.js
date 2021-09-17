//ComonJS, every file is module (by default)!!!!!!!!!!!!
//Modules - Encapsulated COde (Only Share minimum, we decide what goes in them!!!)

//In order to access a module
//destructuring the imported object
const {john,peter} = require('./4-firstModuleNames');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
// console.log(data);
// console.log(names);

// sayHi("Susan");

// //accessing the names within imported names object 
//(without destructuring)->    const names = require('./4-firstModuleNames');
// sayHi(names.john);
// sayHi(names.peter);


// //using the properties from the destructured import
// sayHi(john);
// sayHi(peter);

