$(document).ready(function() {
  $(document).keydown(function (e) {
    switch(e.which) {
        case 37: // left
          console.log('left')
          ws.send('left')
        break;

        case 38: // up
          console.log('up')
          ws.send('up')
        break;

        case 39: // right
          console.log('right')
          ws.send('right')
        break;

        case 40: // down
          console.log('down')
          ws.send('down')
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });
});
