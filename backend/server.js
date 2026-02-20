import http from "http";
const port = 3000;

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.end( "Welcome to home page!!");
  }
  else if(req.url === "/about"){
    res.end("It's my about page!!")
  }
  else if(req.url === "/contact"){
    res.end("It's my contact page!!")
  }

  if(req.url === "/api/user")
  {
    const user = {
        name:"Vishal",
        from:"JSR",
        role:"sde"
    }
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(user));
  }

  else {
    res.end("Endpoint not found");
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});