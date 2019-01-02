module.exports = function(command) {
  var commandSplit = command.split(' ');

  // combine elements which are inside a string
  for(var i = 0; i < commandSplit.length; i++) {
    var word = commandSplit[ i ];
    var quoutedString;

    if(word.charAt(0) === '"' || word.charAt(0) === "'") {
      for(var j = i + 1; j < commandSplit.length; j++) {
        word = commandSplit[ j ];

        if(word.charAt(word.length - 1) === '"' || word.charAt(word.length - 1) === "'") {
          quoutedString = commandSplit.slice(i, j + 1).join(' ');

          commandSplit.splice(i, (j + 1) - i, quoutedString);

          break;
        }
      }
    }
  }

  // now combine everything after the --
  // var idxDashDash = commandSplit.indexOf('--');
  // var commandPart;
  // var endIdx;

  // if(idxDashDash > 0) {
  //   for(var i = idxDashDash; i < commandSplit.length; i++) {
  //     commandPart = commandSplit[ i ];

  //     if(commandPart === ';' || commandPart === '&&' || commandPart === '||') {
  //       break;
  //     }

  //     endIdx = i;
  //   }

  //   commandSplit.splice(idxDashDash, (endIdx + 1) - idxDashDash, commandSplit.slice(idxDashDash, endIdx + 1).join(' '));
  // }


  return commandSplit.map(function(cur) {
    return cur.replace(/['"]/g, '');
  });
};