const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, '..', "build");
const port = process.env.PORT || 5000;
app.use(express.static(publicPath));
app.get('*', (res, req) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})
app.post('/', function requestHandler(req, res) {
    res.end('You made a post request to your command and contol server. Beep boop!');
});

//const server = await app.listen(${port})

app.listen(port, () => console.log(`App listening at port: ${port}`));


