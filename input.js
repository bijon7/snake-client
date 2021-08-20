const { connect } = require('./client');
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', function handleUserInput(key) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      conn.write('Move: down');
    }
    
    
    
  });
  

  return stdin;
}

module.exports = { setupInput };