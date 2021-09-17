//Local
const secret ='SUPER SECRET';
//Share
const john = 'john';
const peter='peter';

//this will show what the module object has
// console.log(module);

//As this is ES6 we don't need to type john:john, peter:peter
//module.exports is needed for this to be shared
module.exports ={john,peter};
// this is very familiar to the export default ES6
