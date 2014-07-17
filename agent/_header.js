// Locate your certificate
var join = require('path').join;
var pfx = join(__dirname, '../_certs/pfx.p12');

// Create a new agent
var apnagent = require('apnagent');
var agent = module.exports = new apnagent.Agent();

// set the credentials
agent.set('pfx file', pfx);

// the credentials were for development
agent.enable('sandbox');

agent.connect(function(err){
  // handle any auth problems
  if (err && err.name === 'GatewayAuthorizationError'){
    console.log('Authentication Error: %s', err.message);
    process.exit(1);
  }
  else if (err) {
    //handle other errors
    throw err;
  } else {
    // it worked, don't be so surprised...
    var env = agent.enabled('sandbox') ? 'sandbox' : 'production';
    console.log('apnagent [%s] gateway connected', env);
  }
});
