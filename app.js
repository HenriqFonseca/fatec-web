const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const post = require("./model/post")
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
    post.create({
        nome: req.body.nome,
        celular: req.body.celular,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }).then(function(){
        console.log("dados cadastrados daquele jeito")
    }).catch(function(erro){
        console.log("erro ao cadastrar" + erro)
    })
})

// passando parametros
app.get("/produtos/:item/:quantidade", function(req,res){
    res.send("Item:" + req.params.item+"<br>Quantidade: " +req.params.quantidade)
})


app.get("/contato", function(req,res){
    res.send("contatino")
})

