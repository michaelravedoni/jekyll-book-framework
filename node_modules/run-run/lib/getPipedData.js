module.exports = function(callback) {
  var data = '';

  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function(chunk) {
    data += chunk;
  });

  process.stdin.on('end', function() {
    callback(null, data);
  });

  process.stdin.resume();
};