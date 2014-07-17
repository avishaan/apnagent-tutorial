// import our header (connection details) and device (token)
// just by requiring the _header, we autoconnect to the APN
var agent = require('./_header');
var device = require('../device');

agent
.createMessage()
.device(device)
.alert('Hello Jello!')
.send();
