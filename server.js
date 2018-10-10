var express = require('express');
var app = express();


var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) =>
	res.render('index'));

app.get('/itt', (req, res, next) =>
	res.render('itt'));

app.post('/result', (req, res, next) => {
	let majeur = +req.body.majeur
	let nombre = +req.body.nombre
	let taille = +req.body.taille
	let gene = +req.body.gene
	let dominant = req.body.dominant

	let result = (majeur+nombre+taille)*gene
	result = dominant=="checked"?result*2:result

	let jours = result<5?"0 à 2 jours":result<10?"2 à 4 jours":result<20?"4 à 6 jours":result<25?"10 à 12 jours":result<30?"12 à 14 jours":"15 jours ou plus"
	res.render('result',{jours:jours})
});

const PORT = process.env.PORT || 8080; 

app.listen(PORT , function(req,res){
	console.log('Connecté');
});