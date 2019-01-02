module.exports = function flatten(packageJSON, script, isScript) {
  script = isScript ? script : packageJSON.scripts[ script ];

  var REGEX_NPM_SCRIPT = /npm +(run)? *([\w\-]+)/g;
  var result;

  // see if this script contains npm scripts
  if(REGEX_NPM_SCRIPT.test(script)) {
    REGEX_NPM_SCRIPT.lastIndex = 0;

    return script.replace(REGEX_NPM_SCRIPT, function(match, hasRun, scriptName) {
      return flatten(packageJSON, scriptName, false);
    });  
  // otherwise just return the script
  } else {

    return script;
  }
};