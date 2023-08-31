const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root","",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("conectado")
}).catch(function(erro){
    console.log("falha ao conectar" + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.TEXT
    }
})

// Agendamentos.sync({force:true})

Agendamentos.create({
    nome: "nome1",
    endereco: "endereco1",
    bairro: "bairro1",
    cep: "cep1",
    cidade: "cidade1",
    estado: "estado1",
    observacao: "observacao1"
})

