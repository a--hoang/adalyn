var spawn = require('child_process').spawn

module.exports.left = function () {
  var child = spawn('python', ['./left.py'])
}

module.exports.up = function () {
  var child = spawn('python', ['./forward.py'])
}

module.exports.down = function () {
  var child = spawn('python', ['./down.py'])
}

module.exports.right = function () {
  var child = spawn('python', ['./right.py'])
}
