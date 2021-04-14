//na linha de baixo serve para dizer que existe o ng-app la do html
angular.module("helloWorld",[]);

//alem disso aqui estamos criando um modulo | e entre colchetes ali em cima iremos colocar o conjunto de modulos que queemos importar
//e é aqui onde podemos mostrar as coisas na tela la no html, porem para que o codigo a baixo seja mostrado no html temos que colocar dentro da tag um ng-controller e indicando qual o nome do do controller que escolhemos
//$scope quando criamos uma variavel com o scope queremos dizer que iremos usar-la la o html tambem compatilhar com eles caso a gente usar sem o scope vamos usar apenas dentro do arquivo JS mesmo


// var url = $location.url();
// 		var absurl = $location.absUrl();
// 		var protocol = $location.protocol();
// 	}

// angular.module("teste").controller("testeeeee", function($scope){

// });

angular.module("helloWorld").controller("helloWorldkk", function ($location,$window,$scope,$http,operadorasAPI){
	$scope.message = "helloWorld!";
	$scope.hello = "hello World2";
	$scope.algo = 10
	$scope.algo2 = '10'
	this.kac = "testedoug"
	$scope.mim = "tstenaodouglas"
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

	var vm = this
	vm.douglassantos = 9000000
	vm.douglassantos2 = vm.douglassantos

	vm.olhaoclick = function(a){
		alert("TESTEI" + a)
		vm.douglassantos2 = 812761521
	}

	//licao de casa inserir no input uma cor para ser adiconado no array ali em cima

	$scope.operadoras = [
		{nome:"Oi", codigo:14, categoria:"Celular",preco:2},
		{nome:"Vivo", codigo:16, categoria:"Internet",preco:1},
		{nome:"Tigo", codigo:19, categoria:"Full",preco:3},
		{nome:"Tim", codigo:24, categoria:"I dont know",preco:6},
		{nome:"Claro",digo:14, categoria:"Celular"},
		{nome:"Nextel", codigo:14, categoria:"Full"}
	];

	var init = function(){

	}

	// $scope.KAIO = factory.teste2
	// console.log($scope.KAIO)

	$scope.LOL = operadorasAPI.teste
	console.log("LOL " + $scope.LOL)

	var somaCodigo = function(operadora){
		
	}

	console.log(somaCodigo())

	//ATENCAO !!!
	//CRIAR UM OUTRO VALORES DE CHAVES PARA SIMUALR ESSA OPERADORA E TESTE NO HTML E ALEM DISSO TESTE O CONHECIEMNTO


 	$scope.lok = undefined
	var carregarContatos = function (){
		operadorasAPI.getOperadoras().then(function (data,status) {
  			var lok = data.data;
  			console.log(lok)
  			$scope.contatos = lok
  			console.log($scope.contatos)

		},function myError(data,status) {
    		$scope.myerror = "teste";
    		console.log(status)
		});
	};

	console.log($scope.myerror)

	var carregarOperados = function (){
		$http.get("http://localhost:3412/operadoras").then(function (data,status) {
  			var lok = data.data;
  			console.log(lok)
  			$scope.operadoras = lok
  			console.log($scope.contatos)

		});
	};


	//NAO ESQUECE QUE PODEMOS COLOCAR O CODIGO PARA FECHAR OU ABRIR MODAL OU QUALQUER COISA DENTRO DA FUNCAO !!!!!
	//USAR parseInt para colocar em int(pesquisar como se usa)
	carregarContatos()
	carregarOperados()

	//estranhamente essa funcao aqui de baixo ele consegue pegar os valores que estao la no input do html e inserir esses valores na aray de chaves
	$scope.adicionarContato = function (contatos){
		//push coloca um valor dentro de um array ou chaves
		// $scope.contatos.push({nome:nome, telefone:telefone});
		// console.log($scope.contatos[0].nome)
		//na linha de baixo com ou sem angular.copy() ele nao esta alterando os valores dentro da tabela
		//usavamos isso anteriomente o push, agora usamos o post do http
		//$scope.contatos.push({nome:contatos.nome, telefone:contatos.telefone, codigo:operadora.codigo, operadora: operadora.nome, cor: contatos.cor, data: new Date()});
		contatos.data = new Date();
		$http.post("http://localhost:3412/contatos", contatos).then(function(data,status){
			delete $scope.contatos;	 //agora esse delete faz a mesma coisa dos deletes ali de baixo
			$scope.contatoForm.$setPristine();
			console.log($scope.contatos)
			carregarContatos();
		});
		// - limpe o campo o campo do input assim facilitando o usuario digitar algo
		// delete $scope.contatos.nome;
		// delete $scope.contatos.telefone;
		// delete $scope.contatos.operadora;
		// delete $scope.contatos.cor;
		
	};

	//é referente ao ng-class
	//o ng-class esta buscando essas duas classes de baixo e essas duas classes de baixo esta procurando class com nome delas e é ai que entra a magica , se o css esta sendo importando na codigo html o class que esta buscando o css especifico dele sera usado la no ng-class
	$scope.classe1="selecionado";
	$scope.classe2= "negrito";
	$scope.classe3=true ;


	//agora nessa funcao estamos excluindo o valor que esta no array de contatos!!!
	$scope.ApagarContatos = function (contatos){
		$scope.contatos = contatos.filter(function(contato){
			if (!contato.selecionado) return contato;
		});
	}

	//aqui quer dizer que quando nenhum do check box for selecionado o botao nao sera acionado
	//meio que estamos pegando a logica do caso esteja selecionado for true or false faca algo
	// $scope.isContatoSelecionado = function (contatos) {
	// 	return contatos.some(function (contato){
	// 		return contato.selecionado;
	// 	});
	// };

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

	function Pessoa(nome,idade){
		this.nome = nome;
		this.idade = idade;
	};

	// AULAS ANGULARJS DA FACUL !!!

	vm.listao = [
	{nome:"silva",tel:900,status:"aprovado"},
	{nome:"sousa",tel:8000,status:"aprovado"},
	{nome:"CAAAA",tel:12981,status:"reprovado"},
	{nome:"POIP",tel:88988},
	];

	vm.teste = function(){
		alert("primeirafuncao")
	}

	$scope.teste2 = function(){
		alert("segundafuncao")
	}

	vm.verificarStatus = function(status){
		return{
			finalizado: status != null,
			pendente: status == null,
			aprovado: status == "aprovado",
			reprovado: status == "reprovado",
		}
	}

	vm.aluno9;
	vm.kak;
	vm.kak2

	vm.submit1 = function(){
		//vm.aluno9 = { nome: a.nome, curso: a.curso}
		vm.aluno9 = {nome: aluno9.nome}
		vm.aluno9 = {nome: aluno9.curso}
		alert("Dados do primeiro formulario  " + angular.toJson(vm.aluno9))
	}


	// existe esse metodo de  printar os valores de um objeto
	// MEIO QUE CRIAMOS UMA VARIAVEL LA NO HTML NESSE SUBMIT2 FICAMOS MEIO PERDIDO
	//JA NO SUBMIT1 FICA MAIS EXPLICITO ONDE ESTA A VARAIVEL QUE ESTA CONVERSANDO COM HTML ONDE ESTA SENDO CRIADA
	//ASSIM NAO FICAMOS PERDIDO SOOBRE A VARIAVEL
	vm.submit2 = function(){
		alert(vm.aluno9.nome);
		alert(vm.aluno9.curso);
		alert(angular.toJson(vm.aluno9))
		alert(angular.toJson(vm.listaa))
		alert(angular.toJson(vm.listaaa))
	}



	vm.teste111 = function(){
		console.log("comeca agora")
		var url = $location.url();
		var absurl = $location.absUrl();
		var protocol = $location.protocol();
		console.log(url)
		console.log(absurl)
		console.log(protocol)
		
	}
	console.log(vm.teste111())



	var ok = new Pessoa(20,30)
	//AQUI ESTAMOS PEGANDO O RETORNO QUE ESTA EM JSON E ESTAMOS VENDO OQUE TEM DENTRO DESSE OBJETO
	console.log("teste " + angular.toJson(ok))


	//COISAS ALEATORIAS SOBRE JS


	//com a promisse conseguimso mandar varios negocios juntos criar um json !	
	//e com seguranca
	var teste11 = 90000
	function teste9(ppp){
		return new Promise((resolve,reject) => {
			if (ppp == "koook"){
				resolve({
					success: true,
					nome:ppp,
					msg: ppp + "is really?",
					aaa: teste11

				})}
			else{
					reject({
					success: false,
					msg: "ERROR not found",
				});
			}
		})
	}

	function teste10(response){
		return new Promise((resolve,reject) => {
			if (response.success) {
				resolve("look my scripts" + resolve.nome + angular.toJson(response))
			}else{
				reject("rejeitado !")
			}
		})
	}

	//com uma fucao assicrono temos a certeza que receber todos os valore que aguardamos ou da o erro 
	//isso por causa do await
	async function Todo(){
		try{
			const teste9s = await teste9("koook")
			console.log(teste9s)
			const teste10s = await teste10(teste9s)
			console.log(teste10s)
		}catch(err){
			console.log("opa" + angular.toJson(err))
		}
	}

	Todo()


	

	const person = {
		name: "doug",
		age:23
	}

	console.log(person)
	delete person.age
	console.log(person)

	const arrowfunc = () => {
 		console.log("olha a arrow function funfando")
 	}
 	
 	arrowfunc()

 	function name(name){
 		this.name = name
 		
 	}

 	const douglas = new name('Douglass')
 	console.log(douglas)

 	"VALORES QUE POR PADRAO SAO CONSIDERADOS FALSO NA PROGRAMACAO"

 	var kaioken = "";
 	var kaioken1 = 0
 	var kaioken2 = -0
 	var kaioken3 = null
 	var kaioken4 = undefined
 	var kaioken5 = NaN
 	console.log(kaioken ? "true" : "false")
 	console.log(kaioken1 ? "true" : "false")
 	console.log(kaioken2 ? "true" : "false")
 	console.log(kaioken3 ? "true" : "false")
 	console.log(kaioken4 ? "true" : "false")
 	console.log(kaioken5 ? "true" : "false")

 	"VALORES QUE POR PADRAO SAO CONSIDERADOS TRUE NA PROGRAMACAO"

 	var kaioken6 = {}
 	var kaioken7 = []
 	var kaioken8 = 1
 	var kaioken9 = 3.23
 	var kaioken10 = "0"
 	var kaioken11 = "false"
 	var kaioken12 = "algo2"
 	var kaioken13 = -1
 	var kaioken14 = -10
 	var kaioken15 = Infinity
 	var kaioken16 = -Infinity
 	console.log(kaioken6 ? "true" : "false")
 	console.log(kaioken7 ? "true" : "false")
 	console.log(kaioken8 ? "true" : "false")
 	console.log(kaioken9 ? "true" : "false")
 	console.log(kaioken10 ? "true" : "false")
 	console.log(kaioken11 ? "true" : "false")
 	console.log(kaioken12 ? "true" : "false")
 	console.log(kaioken13 ? "true" : "false")
 	console.log(kaioken14 ? "true" : "false")
 	console.log(kaioken15 ? "true" : "false")
	console.log(kaioken16 ? "true" : "false")



	//ANGULAR DOCUMENTACAO !!!!!!!!!!! ANGULAR DOCUMENTACAO!!!!!!!!!!!!!!!!!


	// $scope.user1 = {};
 //  	$scope.user2 = {};
 //  	$scope.compare = function() {
 //    	$scope.result = angular.equals($scope.user1, $scope.user2);
 //    	alert($scope.result)
 //  	};


 //pega os valores de uma lista e coloca na outra basicamente
	var values = {name: 'misko', gender: 'male'};
	var log = [];
	angular.forEach(values, function(value, key) {
	  this.push(key + ': ' + value);
	}, log);

	console.log("PPPPP" + log)

	// esse nome que colocamos entre parentese apos o novo controller que criamos é chamada de depedencia, geralmente é um servico
	// um outro arquivo que iremos usar nessa funcao

}).controller('segundo', function($scope,ItemService){
	$scope.mensagem99 = 'segundo controller'
	console.log("NOVO CONTROLLER !!!!!!!!!!!!!!!!")
	var values = {name: 'misko', gender: 'male'};
	var log = [];
	angular.forEach(values, function(value, key) {
	  this.push(key + ': ' + value);
	}, log);

	console.log("PPPPP" + log)

	function(ItemService){
		this.lista = function(){
			return ItemService.lista();
		};
	

	this.adicionar = function(){
		ItemService.adicionar({
			id: this.lista().length + 1,
			descricao: 'Item' + this.lista().length
		})
	}
	};

}).factory('ItemService'), [function(){
	var item = [
	{id: 1, descricao:'Item 0'},
	{id: 2, descricao:'Item 2'}
	]

	return{
		lista: function(){
			return item
		}

		adicionar: function(item){
			item.push(item)
		}
	}
}]


// maik
// trhorw 
// try 
// catch

// funcao callback chamar a funcao de volta
// funcao construtora


// angular.module("olhaele",[]);
// angular.module("olhaele").controller("olhaelee", function($fulll){

// 	$fulll.olhala = "douglas";
// });
