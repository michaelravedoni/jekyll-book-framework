module.exports = function(script, args) {
  Object.keys(args).forEach(function(argName) {
    script = script.split('{' + argName + '}').join(args[ argName ]);
  });

  return script;
};