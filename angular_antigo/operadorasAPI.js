angular.module("helloWorld").service("operadorasAPI", function($http) {
	this.getOperadoras = function (){
		return $http.get("http://localhost:3412/contatos")
	}

	var teste = 9000
	console.log(teste)
} );