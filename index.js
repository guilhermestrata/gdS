const express = require ('express')
const app = express()
const mongoose = require('mongoose')


const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:felicidade2233@fiaptecnico.73xj5.mongodb.net/test')
}
app.set('views','./')

app.listen(3050,()=>{
    console.log('http://localhost:3050')
})

app.get('/',(req,res)=>{
    conexao()
    res.render('index.ejs', {nome:"Tept horrivel",
    turma:"2EMIA",disciplina:"LP2"})
})
