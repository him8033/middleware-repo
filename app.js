const express = require("express");
const app = express();
const port = 3000;

app.use((req,res) => {                                  // if middleware not specified any path that means he performs any of request
    let {query} = req.query;                            // middleware is properly work normal requests he accepts parameters,queries and etc
    console.log(query);
    console.log("This is Middleware");
    res.send("This is Middleware");
})

app.get("/",(req,res) => {
    res.send("This is root");
})

app.get("/random",(req,res) => {
    res.send("This is random")
})

app.listen(port,() => {
    console.log("Server is listining on port:",port);
})
