const bodyParser = require("body-parser")
const express = require("express")
const app = express()


const handlebars = require('express-handlebars').engine;
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars");

app.listen(8081, () => {
    console.log("http://localhost:8081");
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("primeira_pagina")
})


app.post("/cadastrar",function(req,res){
    res.send(req.body.nome)
})

// passando parametros
app.get("/produtos/:item/:quantidade", function(req,res){
    res.send("Item:" + req.params.item+"<br>Quantidade: " +req.params.quantidade)
})


app.get("/contato", function(req,res){
    res.send("contatino")
})

