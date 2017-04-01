
module.exports = function (server, wss) {
  server.listen(process.env.WS_PORT, function listening () {
    console.log('Listening on %d', server.address().port)
  })
  wss.on('connection', function connection (ws) {
    // Incoming protocol
    ws.on('message', function incoming (message) {
      console.log('Received: %s', message)
    })
  })
}
