const express= require ("express");
const app= express();
const port= process.env.PORT || 6969;

app.use(express.static('build'));

app.use(`/api`, (req,res)=> {
    res.send("hi!")
})

app.listen(port, ()=> {
    console.log("server listening at "+port)
})