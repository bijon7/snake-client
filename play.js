//This program lauches the game.

const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const conn = connect();

connect();

setupInput(conn);

module.exports = { connect };

