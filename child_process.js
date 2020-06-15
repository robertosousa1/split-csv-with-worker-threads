const fs = require('fs')
const worker_threads = require('./worker_threads')

async function writeToFile (csv, numberThreads) {
  for (let i = 0; i <= numberThreads; i++) {
    const positionsPerThread = Math.ceil(csv.length / numberThreads)

    const csvFraction = csv.splice(0, positionsPerThread)

    await worker_threads(
      csvFraction,
      (i + 1)
    )
  }

  return true;
}

/*
* Receives message from master process
*/

process.on('message', async ({ file }) => {
  console.log('Child process initialized')

  const numberThreads = 10

  try {
    const csvInArray = fs.readFileSync(file)
      .toString()
      .split('\n')
      .map(e => e.trim())
      .map(e => e.split(',').map(e => e.trim()));

    /*
    * Function to split CSV into smaller files via simultaneous threads
    */

    await writeToFile(csvInArray, numberThreads)

    /*
    * Send response to master process
    */

    process.send({ process: true });
  } catch (error) {
    process.send({ process: false });
  }
});