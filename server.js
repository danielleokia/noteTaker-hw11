const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//setting server up
const app = express();
const PORT = process.env.port || 3001;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("./develop/public"));

//HTML Routes
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
