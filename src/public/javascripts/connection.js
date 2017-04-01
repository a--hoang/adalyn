var ws = new WebSocket('ws://localhost:5001')

ws.onopen = function (event) {
  ws.send('Hello World')
}
