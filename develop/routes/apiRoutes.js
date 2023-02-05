const fs = require("fs");
const util = require("util");
const router = require("./htmlRoutes");
const app = require("express").Router();
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//GET all notes
app.get("/notes", (req, res) =>  {
  
 readFileAsync("./db/db.json", "utf8").then(function(data) {
    notes = [].concat(JSON.parse(data))
    res.json(notes);
 })

});


//add a note
app.post("/notes", (req, res) => {
  const note = req.body;
  
  readFileAsync("./db/db.json", "utf8").then(function(data){
    const notes = [].concat(JSON.parse(data));
    note.id = notes.length + 1
    notes.push(note);
    return notes
  }).then(function(notes) {
    writeFileAsync("./db/db.json", JSON.stringify(notes))
    res.json(note);
  })

});

//DELETE a note
app.delete("/notes/:id", (req, res) => {
   const deleteId = parseInt(req.params.id);
   readFileAsync("./db/db.json", "utf8").then(function(data) {
    const notes = [].concat(JSON.parse(data));
    const newNotes = []
    for (let i = 0; i<notes.length; i++) {
        if(deleteId !== notes[i].id) {
            newNotes.push(notes[i])
        }
    }
     return newNotes
   }).then(function(notes) {
     writeFileAsync("./db/db.json", JSON.stringify(notes))
     res.send("success!");
   })

})

module.exports = app;