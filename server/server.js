const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, '..', "build");
const port = process.env.PORT || 5000;
var busboy = require('connect-busboy');
app.use(busboy()); 
const fileUpload = require("express-fileupload");
var fs = require('fs');

app.use(express.static(publicPath));


app.get('*', (res, req) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})

app.post('/upload', function(req, res) {
  var fstream;
  req.pipe(req.busboy);
  req.busboy.on('file', function (fieldname, file, filename) {
      console.log("Uploading: " + filename); 
      fstream = fs.createWriteStream(__dirname + '/files/' + filename);
  
      //buf.push(file.pipe())
      fstream.on('close', function () {
          res.end('You made a post request that sends a file to your command and contol server! Woohoo!');
      });
  });

});


//const server = await app.listen(${port})

app.listen(port, () => console.log(`App listening at port: ${port}`));


