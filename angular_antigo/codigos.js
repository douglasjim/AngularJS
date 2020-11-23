//na linha de baixo serve para dizer que existe o ng-app la do html
angular.module("helloWorld",[]);

//alem disso aqui estamos criando um modulo | e entre colchetes ali em cima iremos colocar o conjunto de modulos que queemos importar
//e é aqui onde podemos mostrar as coisas na tela la no html, porem para que o codigo a baixo seja mostrado no html temos que colocar dentro da tag um ng-controller e indicando qual o nome do do controller que escolhemos
angular.module("helloWorld").controller("helloWorldkk", function ($scope){
	$scope.message = "helloWorld!";
	$scope.hello = "hello World2";
	$scope.algo = 10
	$scope.vdd = true
	$scope.lista = listao =[10,20,30]
	$scope.chaves = chave={
		50:"douglas",
		60:"mathias"
	};
	$scope.contatos = [
		{nome:"Douglas",telefone:"973998515",codigo: 0,operadora: "",cor: "blue"},
		{nome:"Mathias",telefone:"192729121",codigo: 0,operadora: "",cor: "purple"},
	]
	$scope.here2 = 10

	//licao de casa inserir no input uma cor para ser adiconado no array ali em cima

	$scope.operadoras = [
		{nome:"Oi", codigo:14, categoria:"Celular"},
		{nome:"Vivo", codigo:16, categoria:"Internet"},
		{nome:"Tigo", codigo:19, categoria:"Full"},
		{nome:"Tim", codigo:24, categoria:"I dont know"},
		{nome:"Claro", codigo:14, categoria:"Celular"},
		{nome:"Nextel", codigo:14, categoria:"Full"}
	];
	//estranhamente essa funcao aqui de baixo ele cosngue pegar os valores que estao la no input do html e inserir esses valores na aray de chaves
	$scope.adicionarContato = function (contatos,operadoras){
		//push coloca um valor dentro de um array ou chaves
		// $scope.contatos.push({nome:nome, telefone:telefone});
		// console.log($scope.contatos[0].nome)
		//na linha de baixo com ou sem angular.copy() ele nao esta alterando os valores dentro da tabela
		$scope.contatos.push({nome:contatos.nome, telefone:contatos.telefone, codigo: contatos.operadora.codigo,operadora: contatos.operadora.nome});
		// - limpe o campo o campo do input assim facilitando o usuario digitar algo
		delete $scope.contatos.nome;
		delete $scope.contatos.telefone;
		delete $scope.contatos.operadora;
		console.log($scope.contatos)
	};

	//é referente ao ng-class
	//o ng-class esta buscando essas duas classes de baixo e essas duas classes de baixo esta procurando class com nome delas e é ai que entra a magica , se o css esta sendo importando na codigo html o class que esta buscando o css especifico dele sera usado la no ng-class
	$scope.classe1="selecionado";
	$scope.classe2= "negrito";

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


});



// angular.module("olhaele",[]);
// angular.module("olhaele").controller("olhaelee", function($fulll){

// 	$fulll.olhala = "douglas";
// });
