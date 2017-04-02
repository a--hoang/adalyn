var motor = require('./motor')

module.exports = function (wss) {
  wss.on('connection', function connection (ws) {
    // Incoming protocol
    ws.on('message', function incoming (message) {
      console.log('Incoming Instruction %s', message)
      switch(message) {
        case 'up':
          motor.up()
        break;
        case 'left':
          motor.left()
        break;
        case 'right':
          motor.right()
        break;
        case 'down':
          motor.down()
        break;
        default: return;
      }
    })
  })
}
