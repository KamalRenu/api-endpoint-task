const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/create-file', (req, res) => {
    let date = new Date();
    let time = date.getTime().toString();
    let dateTime = `${date.getDate()}-${(date.getMonth()+1)}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;
    let finalTime = (`${dateTime} ${".txt"}`);
    fs.writeFile(`./textfiles/${finalTime}`, timestamp, function (err){
        if(err) throw err;
        res.send('File successfully created')
    })
})

app.get("/get-files", (req, res) => {
    fs.readdir("./textfiles", function(err, files) {
        if(err) throw err;
        res.json({files})
    })
})

app.listen(port.at, () => console.log(`Server running on port ${port}`));