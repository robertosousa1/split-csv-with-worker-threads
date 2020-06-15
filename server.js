const { fork } = require('child_process');
const { resolve } = require('path');
const fs = require('fs');

/*
* Open child process
*/
const process = fork('./child_process.js');

const file = resolve(__dirname, 'file.csv');
process.send({ file });


process.on('message', async (message) => {  
  await fs.writeFileSync(resolve(__dirname, 'output', 'DONE.txt'), '');

  console.log('Master process completed.')
});
