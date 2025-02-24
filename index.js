const express = require("express");
const PORT = 5555;
const mongoose = require("mongoose")
const path = require("path");
const Registration = require("./models/details");


const app = express();
app.use(express.static(__dirname))

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/post', async (req, res) => {
    try{
    const { regNum, stdName, email, branch } = req.body;
    const reg = new Registration({
        regNum,
        stdName,
        email,
        branch,
    })
    await reg.save()
    console.log(reg);
    res.send('Form Submission Successfull');
}
    catch (e) {
        res.status(500).json({ message: e.message });
    }
})

mongoose.connect("mongodb://localhost:27017/college")
    .then(() => {
        console.log("successfully connected");

        app.listen(PORT, () => {
            console.log(`server is running on PORT : ${PORT}`);
        });
    })

    .catch(() => {
        console.log("cannot connect to the db");
    })







