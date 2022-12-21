const http = require("http");

const express = require ("express");
var path = require('path');

const port = 8089;

const app = express();

// app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'js')))

app.engine("html", require("ejs").renderFile);

app.get("/",function(req, res){
    res.render("password-field.html")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



// app.use(bodyParser.urlencoded({ extended: true }));
// require("./routes/main")(app);

// app.get("/",function(req, res){
//     res.render("index.html")
// });


// const bodyParser = require ("body-parser");
// app.set("view engine", "ejs");

// const db = require("./js/db.js");

// db.initialize();
// app.use(express.static(path.join(__dirname, 'views')))
// app.use(express.static(path.join(__dirname, 'js')))
// The index.js file of your application
// http
//   .createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Welcome to the mid-term application! \n\n");
//     res.write("This application must run on PORT 8089");
//     res.end();
//   })
//   .listen(8089, function() {
//     console.log("Node server is running...");
//   });
