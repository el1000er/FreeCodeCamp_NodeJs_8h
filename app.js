// --npm -global command, comes with node
//npm --version

//local dependency - use it noly in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g<packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, pres enter to skip)
//npm init -y (everything default)

const _=require('lodash');

const items =[1,[2,[3,[4]]]];
//lodas has a flattern the array of arrays
const newItems=_.flattenDeep(items);
console.log(newItems);