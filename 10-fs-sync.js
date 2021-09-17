const{readFileSync,writeFileSync, write}=require('fs');
console.log('start');
// // the destructure is same as :
// const fs =require('fs');
// fs.readFileSync

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// console.log(first,second);

// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result :${first},${second}`
// )

//To append something to a file  {flag:'a'}
writeFileSync(
    './content/result-sync.txt',
    `Here is the result part 11-fs-async.js: ${first},${second}`,
    {flag:'a'}
)
 

console.log('done wiith this task');
console.log('Starting the next task');
