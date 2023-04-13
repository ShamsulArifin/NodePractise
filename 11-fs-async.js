const { readFile, writeFile } = require('fs');
console.log('start');
//you have to setup callback to get the result from 'readFile' and 'writefile'
readFile('./content/first.txt', 'utf8', (err, result) => {
  //provide encoding ('utf8' or something else) or else you will get buffer instead of text
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting next task');
