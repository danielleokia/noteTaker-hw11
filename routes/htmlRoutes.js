const router = require("express").Router();
const path = require("path");
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./develop/public/notes.html"));
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./develop/public/index.html"));
});

module.exports = router;