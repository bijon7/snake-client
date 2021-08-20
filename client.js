const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write('Successfully connected to server!');
    conn.write('Name: ZM');
  })
//   conn.on('connect', () => {
//      conn.write('Name: ZM');
//   });
//   conn.on('connect', () => {
//     conn.write("Move: up");
//  });
//  conn.on('connect', () => {
//   conn.write("Move: up");
// });
  return conn;
}

module.exports = { connect }