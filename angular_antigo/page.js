var http = require('http');

http.createServer(function (req,res) {
	res.write(
		'<html>'+
			'<head>'+
				'<title>Hello world</title>'+
			'</head>'+
			'<body>'+
				'<h1>Hello world</h1>'+
			'</body>'+
		'</html>'
	);
	res.end();
}).listen(3412);