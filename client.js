var Websocket = require('ws');

const ws = new Websocket('ws://localhost:9000/');

ws.onmessage = function(event) {
	console.log(event);
}

ws.onclose = function() {
	console.log('server close');
}