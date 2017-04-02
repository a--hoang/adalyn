var spawn = require('child_process').spawn

module.exports.left = function () {
  var child = spawn('python', ['./left.py'])
  setTimeout(function () {
    child.kill('SIGINT')
  }, 400)
}

module.exports.up = function () {
  var child = spawn('python', ['./forward.py'])
  setTimeout(function () {
    child.kill('SIGINT')
  }, 400)
}

module.exports.down = function () {
  var child = spawn('python', ['./down.py'])
  setTimeout(function () {
    child.kill('SIGINT')
  }, 400)
}

module.exports.right = function () {
  var child = spawn('python', ['./right.py'])
  setTimeout(function () {
    child.kill('SIGINT')
  }, 400)
}
