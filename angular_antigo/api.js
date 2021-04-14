

var router = require('./router');

var app = router(3412);

var operadoras = [
		{nome:"Oi", codigo:14, categoria:"Celular",preco:2},
		{nome:"Vivo", codigo:16, categoria:"Internet",preco:1},
		{nome:"Tigo", codigo:19, categoria:"Full",preco:3},
		{nome:"Tim", codigo:24, categoria:"I dont know",preco:6},
		{nome:"Claro", codigo:14, categoria:"Celular"},
		{nome:"Nextel", codigo:14, categoria:"Full"},
		{nome:"KOIKEN", codigo:90, categoria:"Full"}
];


var contatos = [
		{nome:"Douglas",data: new Date(),telefone:"973998515",codigo: 11,operadora: "",cor: "blue"},
		{nome:"Mathias",data: new Date(),telefone:"192729121",codigo: 15,operadora: "",cor: "purple"},
		{nome:"Juliane",data: new Date(),telefone:"191827126",codigo: 25,operadora: "",cor: "orange"},
	]

app.get('/operadoras', function(req,res){
	res.write(JSON.stringify(operadoras));
	res.end();
})

app.get('/contatos',function(req,res){
	res.write(JSON.stringify(contatos));
	res.end();
})

app.post('/contatos',function(req,res,next){
	res.write(JSON.stringify(contatos));
	res.end();
})

app.post('/operadoras',function(req,res,next){
	res.write(JSON.stringify(contatos));
	res.end();
})


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/', function(req, res, next) {
//   // Handle the get for this route
// });

// app.post('/', function(req, res, next) {
//  // Handle the post for this route
// });