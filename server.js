const express = require ("express")
const path = require("path")

const app = express()

app.use('/src',express.static("src"))

app.get("/", (req,res) =>{
    res.send("hello react dev")
})
app.listen(8080, () =>{
    console.log(`server started at port 3000`)
})