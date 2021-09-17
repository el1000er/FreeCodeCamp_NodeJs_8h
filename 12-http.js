const http = require("http");

//req -> incoming request
//res -> what we send back
const server = http.createServer((req, res) => {
  //if we refresh the localhost at port 5000 this console log will provide the req object (really big one)
  // console.log(req)
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
 else if (req.url === "/about") {
    //end the request
    res.end("Welcome to our About page");
  }else{
    res.end(`
    <h1>Ooops!!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
  }
 
});

//to which port we are listening (arbitrary)
server.listen(5000);
