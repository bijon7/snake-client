const net = require('net');

/**
 * Establishes connection with the game server
 */
 const { IP, PORT } = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    ip : IP,
    port : PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write('Successfully connected to server!');
    conn.write('Name: ZM\n');
    conn.write('Say: Hello everyone!');
  })

  return conn;
}

module.exports = { connect }