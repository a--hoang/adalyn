var ws = new WebSocket('ws://localhost:5000')

ws.onopen = function (event) {
  ws.send('Hello World')
}
