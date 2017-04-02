var spec = {
  dcs: ['M1', 'M2', 'M3', 'M4']
}
var motorHat = require('motor-hat')(spec)

module.exports.left = function () {
  motorHat.dcs[0].run('fwd')
  motorHat.dcs[0].setSpeed(50)
  motorHat.dcs[1].run('fwd')
  motorHat.dcs[1].setSpeed(50)
  setTimeout(function () {
    motorHat.dcs[0].stop()
    motorHat.dcs[1].stop()
  }, 100)
}

module.exports.up = function () {
  motorHat.dcs[0].run('fwd')
  motorHat.dcs[0].setSpeed(50)
  motorHat.dcs[1].run('fwd')
  motorHat.dcs[1].setSpeed(50)
  motorHat.dcs[2].run('fwd')
  motorHat.dcs[2].setSpeed(50)
  motorHat.dcs[3].run('fwd')
  motorHat.dcs[3].setSpeed(50)
  setTimeout(function () {
    motorHat.dcs[0].stop()
    motorHat.dcs[1].stop()
    motorHat.dcs[2].stop()
    motorHat.dcs[3].stop()
  }, 100)
}

module.exports.down = function () {
  motorHat.dcs[0].run('back')
  motorHat.dcs[0].setSpeed(50)
  motorHat.dcs[1].run('back')
  motorHat.dcs[1].setSpeed(50)
  motorHat.dcs[2].run('back')
  motorHat.dcs[2].setSpeed(50)
  motorHat.dcs[3].run('back')
  motorHat.dcs[3].setSpeed(50)
  setTimeout(function () {
    motorHat.dcs[0].stop()
    motorHat.dcs[1].stop()
    motorHat.dcs[2].stop()
    motorHat.dcs[3].stop()
  }, 100)
}

module.exports.right = function () {
  motorHat.dcs[2].run('fwd')
  motorHat.dcs[2].setSpeed(50)
  motorHat.dcs[3].run('fwd')
  motorHat.dcs[3].setSpeed(50)
  setTimeout(function () {
    motorHat.dcs[2].stop()
    motorHat.dcs[3].stop()
  }, 100)
}
