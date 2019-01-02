module.exports = function(script, env) {
  // loop through all environment variables and replace values in scripts
  Object.keys(process.env).forEach(function(envKey) {
    script = script.split('{' + envKey + '}').join(process.env[ envKey ]);
  });

  // loop through passed environment variables and inject those
  Object.keys(env).forEach(function(envKey) {
    script = script.split('{' + envKey + '}').join(env[ envKey ]);
  });

  return script;
};