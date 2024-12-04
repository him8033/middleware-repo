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

// app.use("/random",(req,res,next) => {                             //this type of middleware where path is define that means any of calling where path
//     console.log("I am only for random");                          //path is starting define path of middleware matches then this middleware perform 
//     next();                                                       //their tasks and if 'next()' is calling then forward to next middleware or their main request
// })

// app.use("/api",(req,res,next) => {                                  // this middleware is performing as access authenticator that means if user direct
//     let {token} = req.query;                                        // calling this api request then user found a page there send "Access Denied!" page
//     if(token==="giveaccess"){                                       // for getting the data user pass the query string where token value is "giveaccess"
//         next();                                                     // if users token value is "giveaccess" then this middleware calling next function
//     }else{                                                          // who's written in if condition and found their data are written in main api if 
//         res.send("Access Denied!");                                 // token value is wrong or empty user found "Access Denied!" page
//     }
// })

const checkToken = (req,res,next) => {                                  // if you not want to use that middleware in many of api,s then write these
    let {token} =req.query;                                             //  type of middleware in a function and pass these function in those
    if(token === "giveaccess"){                                         // particular api where you want to use these middleware
        next();
    }else{
        throw new Error ("Access Denied!");
    }
}

// app.get("/wrong",(req,res) => {                             //this is basic error whos generate default error whos written in express default error
//     abcd = abcd;                                            // handler who generate a 500 error
// })

app.get("/api",checkToken,(req,res) => {                                //write the middleware function after defining path
    res.send("data");
})

app.get("/",(req,res) => {
    res.send("This is root");
})

app.get("/random",(req,res) => {
    res.send("This is random");
})

// // Logger

// app.use((req,res,next) => {
//     req.time = Date.now();
//     console.log(req.method,req.hostname,req.path,req.time);                     // these some Api 'req' references
//     // console.log(req);
//     next();
// })

app.use((req,res) => {                                              // this type of middleware we are written in the last of all middleware 
    res.status(404).send("Page not found!");                        //if above middleware is not working perform then this execute and perform 
})                                                                  //those page you are searched is not found

app.listen(port,() => {
    console.log("Server is listining on port:",port);
})
