const fs = require("fs");
const util = require("util");
const app = require("express").Router();
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//GET request
app.get("/notes", (req, res) =>  {
 readFileAsync("./develop/db/db.json", "utf8").then(function(data) {
    notes = [].concat(JSON.parse(data))
    res.json(notes);
 })

});


//POST request
app.post("/notes", (req, res) => {
  const note = req.body;
  readFileAsync("./develop/db/db.json", "utf8").then(function(data){
    const notes = [].concat(JSON.parse(data));
    note.id = notes.length + 1
    notes.push(note);
    return notes
  }).then(function(notes) {
    writeFileAsync("./develop/db/db.json", JSON.stringify(notes))
    res.json(note);
  })

});

//DELETE request
app.delete("/notes/:id", (req, res) => {
   const deleteId = parseInt(req.params.id);

}

)
