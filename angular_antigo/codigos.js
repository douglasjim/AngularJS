//na linha de baixo serve para dizer que existe o ng-app la do html
angular.module("helloWorld",[]);

//alem disso aqui estamos criando um modulo | e entre colchetes ali em cima iremos colocar o conjunto de modulos que queemos importar
//e é aqui onde podemos mostrar as coisas na tela la no html, porem para que o codigo a baixo seja mostrado no html temos que colocar dentro da tag um ng-controller e indicando qual o nome do do controller que escolhemos
//$scope quando criamos uma variavel com o scope queremos dizer que iremos usar-la la o html tambem compatilhar com eles caso a gente usar sem o scope vamos usar apenas dentro do arquivo JS mesmo

// angular.module("teste").controller("testeeeee", function($scope){

// });

angular.module("helloWorld").controller("helloWorldkk", function ($scope,$http){
	$scope.message = "helloWorld!";
	$scope.hello = "hello World2";
	$scope.algo = 10
	$scope.algo2 = '10'
	$scope.vdd = true
	$scope.lista = listao =[10,20,30]
	$scope.chaves ={
		50:"douglas",
		60:"mathias"
	};
	$scope.contatos = [
		{nome:"Douglas",data: new Date(),telefone:"973998515",codigo: 0,operadora: "",cor: "blue"},
		{nome:"Mathias",data: new Date(),telefone:"192729121",codigo: 0,operadora: "",cor: "purple"},
	]
	$scope.here2 = 9
	$scope.app = "nao"

	//licao de casa inserir no input uma cor para ser adiconado no array ali em cima

	$scope.operadoras = [
		{nome:"Oi", codigo:14, categoria:"Celular",preco:2},
		{nome:"Vivo", codigo:16, categoria:"Internet",preco:1},
		{nome:"Tigo", codigo:19, categoria:"Full",preco:3},
		{nome:"Tim", codigo:24, categoria:"I dont know",preco:6},
		{nome:"Claro", codigo:14, categoria:"Celular"},
		{nome:"Nextel", codigo:14, categoria:"Full"}
	];

	var init = function(){

	}

	var somaCodigo = function(operadora){
		
	}

	console.log(somaCodigo())

	//ATENCAO !!!
	//CRIAR UM OUTRO VALORES DE CHAVES PARA SIMUALR ESSA OPERADORA E TESTE NO HTML E ALEM DISSO TESTE O CONHECIEMNTO

	// $http({
 // 		method: 'GET',
 //  		url: 'http://localhost:3412/contatos'
	// }).then(function successCallback(response) {
	// 	console.log('sucess')
 //  	}, function errorCallback(response) {
 //  		console.log("error")
 //  	});

	// var carregarContatos = function (){
	// 	$http.get("http://localhost:3412/contatos").then(function (response) {
 //  			console.log("sucess")
	// 	});
	// };

	// carregarContatos()

	// Simple GET request example:
// $http({
//   method: 'GET',
//   url: 'http://localhost:3412/contatos'
// }).then(function successCallback(response) {
//     console.log("teste")
//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });



	function teste() {

	    let url = 'http://localhost:3412/contatos';
	    let xhr = new XMLHttpRequest();
	    let ok = xhr.open('GET', url, true);
	}
	teste()



	//

	//estranhamente essa funcao aqui de baixo ele consegue pegar os valores que estao la no input do html e inserir esses valores na aray de chaves
	$scope.adicionarContato = function (contatos,operadora){
		//push coloca um valor dentro de um array ou chaves
		// $scope.contatos.push({nome:nome, telefone:telefone});
		// console.log($scope.contatos[0].nome)
		//na linha de baixo com ou sem angular.copy() ele nao esta alterando os valores dentro da tabela
		$scope.contatos.push({nome:contatos.nome, telefone:contatos.telefone, codigo:operadora.codigo, operadora: operadora.nome, cor: contatos.cor, data: new Date()});
		// - limpe o campo o campo do input assim facilitando o usuario digitar algo
		delete $scope.contatos.nome;
		delete $scope.contatos.telefone;
		delete $scope.contatos.operadora;
		delete $scope.contatos.cor;
		$scope.contatoForm.$setPristine();
		console.log($scope.contatos)
	};

	//é referente ao ng-class
	//o ng-class esta buscando essas duas classes de baixo e essas duas classes de baixo esta procurando class com nome delas e é ai que entra a magica , se o css esta sendo importando na codigo html o class que esta buscando o css especifico dele sera usado la no ng-class

	//agora nessa funcao estamos excluindo o valor que esta no array de contatos!!!
	$scope.ApagarContatos = function (contatos){
		$scope.contatos = contatos.filter(function(contato){
			if (!contato.selecionado) return contato;
		});
	}

	//aqui quer dizer que quando nenhum do check box for selecionado o botao nao sera acionado
	//meio que estamos pegando a logica do caso esteja selecionado for true or false faca algo
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato){
			return contato.selecionado;
		});
	};

	$scope.here = function(){
		console.log("here click")
		return true
	}

	$scope.banksAccountType = [{"label":"Conta corrente","value":2,"raw":{"descricao":"Conta corrente","codigo":2}},{"label":"Conta poupança","value":0,"raw":{"descricao":"Conta poupança","codigo":0}}];

	//essa varaivel chamada (campo) é referente ao campo que estamos pedindo quando inserimos quando chamamos a funcao la no html, enao qualquer campo que for chamado sera adicionado nessa varaivel campo esta sendo solicitado aqui
	console.log($scope.direcaoOrOrdenacao)
	$scope.ordernarPor = function(nome){
		$scope.criterioDeOrdenacao = nome;
		console.log($scope.direcaoOrOrdenacao)
		$scope.direcaoOrOrdenacao = !$scope.direcaoOrOrdenacao;
		console.log($scope.direcaoOrOrdenacao)
	}


	//carregarContatos();


	//COISAS ALEATORIAS SOBRE JS

	const arrowfunc = () => {
 		console.log("olha a arrow function funfando")
 	}
 	
 	arrowfunc()

 	function name(name){
 		this.name = name
 		
 	}

 	const douglas = new name('Douglass')
 	console.log(douglas)

});


// funcao callback chamar a funcao de volta


// angular.module("olhaele",[]);
// angular.module("olhaele").controller("olhaelee", function($fulll){

// 	$fulll.olhala = "douglas";
// });
