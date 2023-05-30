const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  if (input === 'b') {
    process.stdout.write('\x07');
  } else if (Number(input) >= 1 && Number(input) <= 9) {
    console.log(`Setting timer for ${input} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(input) * 1000);
  }
});

rl.on('SIGINT', () => {
  console.log('Thanks for using me, ciao!');
  rl.close();
});