process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    console.log('Welcome to Holberton School, what is your name?');
    process.stdout.write('Your name is: ' + chunk);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing \n');
});