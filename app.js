const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine","ejs");

app.use("/ti01",express.static(path.join(__dirname,'/public')));

app.get("/",(req,res) =>{
	res.render("index",{titulo:"Estas en index"});
});


const pagAbout = {
	titulo:"Página de about",
	contenido:"Bienvenido, es una página que muestra los datos de la empresa",
}

app.get("/about",(req,res) =>{
	res.render("about",pagAbout);
});

const alumnos = [
	{expediente:1, alumno:"Fulanito", celular:"4271234567"},
	{expediente:2, alumno:"Menganito", celular:"4277654321"},
	{expediente:1, alumno:"Perenganito", celular:"4270000000"},
];
app.get("/alumnos",(req,res) => {
	// res.render("alumnos",{personas:alumnos});
	res.render("alumnos",{titulo:"Alumnos del TI01SM-19",personas:alumnos});
});


app.listen(port, () => {
	console.log("Servidor escuchando el puerto "+port);
});   