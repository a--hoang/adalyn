
module.exports = function (wss) {
  wss.on('connection', function connection (ws) {
    // Incoming protocol
    ws.on('message', function incoming (message) {
      console.log('Received: %s', message)
    })
  })
}
