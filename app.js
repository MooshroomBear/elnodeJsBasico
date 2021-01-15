const { Console } = require('console');
const express=require('express');
const path=require('path');
const app=express();
const port=process.env.port || 3000;

app.use('/ti01',express.static(path.join(__dirname,'/public')));

app.listen(3000, ()=>{
    console.log("Servidor escuchando el puerto "+port);
})