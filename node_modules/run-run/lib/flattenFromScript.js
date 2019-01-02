var flatten = require('./flatten');

module.exports = function flattenNPMScript(packageJSON, script) {
  return flatten(packageJSON, script, true);
};