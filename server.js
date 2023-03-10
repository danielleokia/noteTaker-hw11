const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//setting server up
const app = express();
const PORT = process.env.PORT || 3001;


//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

module.exports = app;