import http from "http";

const server = http.createServer((req, res) => {
   // ✅ CORS headers (REQUIRED)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Handle preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url == "/api/greet") {
    res.writeHead(200, { "Content-Type": "application/json" });

    const responseData = {
      message: "Hello! Good Morning!!🙏🙏",
      status: "success",
    };
    res.write(JSON.stringify(responseData));
  } else {
    res.end("end point not exists");
    return;
  }
  res.end();
});

const startServer = (port) => {
  server.listen(port, () => {
    console.log(`server is up and running on port: ${port}`);
  });
};

startServer(3000);
