
<h3 align="center">
	Mobile Life Guard
</h3>
<h4 align="center">
Development of applications in distributed systems and cloud computing
</h4>
<p align="left">
To perform a simulation of receiving and storing data in a NoSQL database,
a distributed system is implemented that, from the execution of a master process, another child process is executed.

The child process reads a text file, each line is composed of 8 fields.

After reading the file and storing it in main memory, the child process triggers n threads (consider n = 10 for your tests).

Each thread, executes in parallel, obtaining a fraction of lines and writes to a text file, whose name must be its ID, (simulating the sending of this data to a repository
NoSQL in parallel and distributed form).

As soon as the processes are synchronized, the child process ends and the parent process writes an empty text file called DONE.txt
</p>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/robertosousa1/split-csv-with-worker-threads.svg">  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/robertosousa1/split-csv-with-worker-threads.svg">
  </a>
  <a href="https://github.com/robertosousa1/split-csv-with-worker-threads/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/robertosousa1/split-csv-with-worker-threads.svg">
  </a>
</p>

<p align="center">
  <a href="#ballot_box_with_check-prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#up-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#pencil2-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## [](#prerequisites):ballot_box_with_check: Prerequisites
-   [Node.js](https://nodejs.org/en/)
-   [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## [](#getting-started):up: Getting started

-   Clone this repo
-  Enter the folder `split-csv-with-worker-threads`
-  Run `yarn` or `npm install` to install the dependencies
- Run `node server.js` to run the code

## [](#how-to-contribute):pencil2: How to contribute

-   Make a fork;
-   Create a branck with your feature:  `git checkout -b my-feature`;
-   Commit changes:  `git commit -m 'feat: My new feature'`;
-   Make a push to your branch:  `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.


## [](#license):memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/robertosousa1/split-csv-with-worker-threads/blob/master/LICENSE) for more information.

----------

Made with by Roberto Sousa  👋  [Get in touch!](https://www.linkedin.com/in/robertosousa01/)
