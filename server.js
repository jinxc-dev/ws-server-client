const WebSocket = require('ws').Server;

var wss = new WebSocket({port:9000})

wss.on('connection', function(socket) {
	console.log("New client connected!")

	socket.on('message', function() {
		wss.clients.forEach((client) => {
			client.send('data')
		})
	})

	socket.on('close', function(){
		console.log('Client closed')
	})
})