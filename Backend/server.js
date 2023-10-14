import { log } from "node:console";
import http, { get } from "node:http";
import fs from "node:fs";


const server = http.createServer((req, res) => {
  if (req.url === "/auth/register" && req.method === "POST") {
    let body = "";
    req.on("data", (data)=>{
      body += data;
    });
    
    req.on("end", ()=>{
      body = JSON.parse(body);
      console.log(body);
    })
  }
  
});
server.listen(4000, () => {
  console.log("server running");
});
