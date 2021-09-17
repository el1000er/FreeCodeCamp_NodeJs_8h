const path=require('path');

//Separator property  will return \ (Platform specific separator)
console.log(path.sep);

const filePath= path.join('/content/','subfolder','test.txt');
//We will get the normalize path \content\subfolder\test.txt
console.log(filePath);

const base=path.basename(filePath);
//will return test.txt
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
//this will get the absoulte path to a file, usefull when this is deployed to some repo and we need to
//have the route
console.log(absolute);