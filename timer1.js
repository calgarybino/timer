const args = process.argv.slice(2);

function beepAfterDelay(delay) {
  if (delay > 0 && !isNaN(delay)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay * 1000);
  }
}

for (let i = 0; i < args.length; i++) {
  beepAfterDelay(Number(args[i]));
}