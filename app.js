const express = require("express");
const app = express();
const port = 3000;

// app.use((req,res) => {                                  // if middleware not specified any path that means he performs any of request
//     let {query} = req.query;                            // middleware is properly work normal requests he accepts parameters,queries and etc
//     console.log(query);
//     console.log("This is Middleware");
//     res.send("This is Middleware");
// })

// app.use((req,res,next) => {                                 // middleware define next function for executing next middleware or run main searched route
//     console.log("this is 1st middleware");
//     next();                                                 //after calling 'next()' this command call next middleware or calling route
//     console.log("after running middleware");                //if we write any command after calling 'next()' that is also running but this is not best way 
//     // return next();                                          // some of user preventing this situation we write return before calling 'next(); function this return stop all the command after writing 'next()' function"
// })

// app.use("/",(req,res,next) => {
//     console.log("this is 2nd middleware");
//     next();
// })

app.use((req,res,next) => {
    console.log(req.method,req.hostname,req.path);
    next();
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
