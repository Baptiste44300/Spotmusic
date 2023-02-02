require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = require("express")()


app.use(cors());
app.use(express.json())

const musicRoute = require("./routes/music.route")

app.use("/music" ,musicRoute)


app.listen(5004, () => {
    console.log("Server listening on port 5004")
});

module.exports=express;