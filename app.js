const express = require("express")
const app = express()

const handlebars = require('express-handlebars').engine;
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars");

app.listen(8081, () => {
    console.log("http://localhost:8081");
})

app.get("/", (req, res) => {
    res.render("primeira_pagina")
})




// passando parametros
app.get("/produtos/:item/:quantidade", function(req,res){
    res.send("Item:" + req.params.item+"<br>Quantidade: " +req.params.quantidade)
})


app.get("/contato", function(req,res){
    res.send("contatino")
})

