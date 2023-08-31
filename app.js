const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("bom di")
})

app.get("/", function(req,res){
    res.sendFile(__dirname +"/html/index.html")
})

// passaando parametros
app.get("/produtos/:item/:quantidade", function(req,res){
    res.send("Item:" + req.params.item+"<br>Quantidade: " +req.params.quantidade)
})


app.get("/contato", function(req,res){
    res.send("contatino")
})

