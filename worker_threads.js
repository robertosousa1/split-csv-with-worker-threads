const { Worker, isMainThread, parentPort } = require('worker_threads');
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');

if (isMainThread) {
  module.exports = function parseJSAsync (csv, numberThread) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: fs.writeFile(
          path.resolve(__dirname, 'output', `${uuid.v4()}.txt`),
          csv,
          function (err) {
            if (err) return console.log(err);
            console.log(`Process on thread ${numberThread} completed`);
          })
      });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };
} else {
  parentPort.postMessage('Completed thread processes');
}