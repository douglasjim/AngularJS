var router = require('./router');

var app = router(3412);

var operadoras = [
		{nome:"Oi", codigo:14, categoria:"Celular",preco:2},
		{nome:"Vivo", codigo:16, categoria:"Internet",preco:1},
		{nome:"Tigo", codigo:19, categoria:"Full",preco:3},
		{nome:"Tim", codigo:24, categoria:"I dont know",preco:6},
		{nome:"Claro", codigo:14, categoria:"Celular"},
		{nome:"Nextel", codigo:14, categoria:"Full"}
];


var contatos = [
		{nome:"Douglas",data: new Date(),telefone:"973998515",codigo: 0,operadora: "",cor: "blue"},
		{nome:"Mathias",data: new Date(),telefone:"192729121",codigo: 0,operadora: "",cor: "purple"},
	]

app.get('/operadoras', function(req,res){
	res.write(JSON.stringify(operadoras));
	res.end();
})

app.get('/contatos',function(req,res){
	res.write(JSON.stringify(contatos));
	res.end();
})