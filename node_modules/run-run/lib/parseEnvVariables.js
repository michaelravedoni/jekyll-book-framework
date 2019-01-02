var merge = require('merge');

module.exports = function parseEnvVariables(args, pipedData) {
  var i = args.length - 1;
  var env = {};
  var variableValue;
  var pipedEnv = {};

  // parse args
  while(args[ i ]) {
    variableValue = getVariableAndValue(args[ i ]);

    // this is not a variable
    if(variableValue === null) {
      i--;
    // this was a variable
    } else {
      env[ variableValue[ 0 ] ] = variableValue[ 1 ];
      args.splice(i, 1);
    }
  }

  // if we have piped data
  if(pipedData) {
    try {
      pipedEnv = JSON.parse(pipedData);
    } catch(e) { }
  }

  return merge({}, pipedEnv, env);
};

function getVariableAndValue(arg) {
  var result = /(.+)=(.+)/.exec(arg);
  var rVal = null;

  if(result) {
    rVal = [ result[ 1 ], result[ 2 ] ];
  }

  return rVal;
}