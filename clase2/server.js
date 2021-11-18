let asyncForLoop = require('@arteysoft/asyncforloop');
let express = require('express');
let {EOL} = require('os');
let _ = require('underscore')
let nodemon = require('nodemon')

const mysql = require('mysql')
const myConnection  = require('express-myconnection')

let app = express()
app.use(express.json())

app.use(express.static('public'))
app.use('/static', express.static(__dirname + '/public'))
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'contraseña',
    port:'3306',
    database:'lossopranos'

},'single'))

app.get('/procesar', (req,res)=>{
    res.setHeader('Content-Type','application/json')
    res.status(200).send({res:'ok'})
})


app.listen(3000, (err) => {
    console.log('escuchando el puerto 3000')
})