const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')

var admin = require("firebase-admin");

var serviceAccount = require("./projetonodejs-16161-firebase-adminsdk-uffxm-050ae7210c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = getFirestore()

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", function(req, res){
    res.render("primeira_pagina")
})

app.get("/consulta", function(req, res){
    res.render("consulta")
    })
    

app.get("/editar/:id", function(req, res){
})

app.get("/excluir/:id", function(req, res){
    var resultDelete = db.collection('agendamentos').doc('teste').delete()
    .then(function(){
        console.log('excluido com sucesso')
        res.redirect('/')
    })
})

app.post("/cadastrar", function(req, res){
    var result = db.collection('agendamentos').doc('teste').add({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }).then(function(){
        console.log('Added document');
        res.redirect('/')
    })
})

app.post("/atualizar", function(req, res){
    var resultUpdate = db.collection('agendamentos').doc('teste').update({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }).then(function(){
        console.log('Documento atualizado');
        res.redirect('/')
    })

})

app.listen(8081, function(){
    console.log("Servidor ativo!")
})