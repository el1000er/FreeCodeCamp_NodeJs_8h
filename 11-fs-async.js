const { readFile, writeFile } = require("fs");
console.log('Start');
//(err,result)=> {} is the callback function  // in the future we will use promises and async/await to avoid callback hell
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result)
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(result)
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the async result part 11-fs-async.js: ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Done with this async task buddy');
      }
    );
  });
})
console.log('Starting next task');

//if we dont provide the format like utf8, we will get the buffer as a result:
//<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
