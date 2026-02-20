// ============================================================
// SE3040 - Lab 03: Introduction to Node.js
// ============================================================

// -----------------------------------------------------------
// Example 1: Read File
// -----------------------------------------------------------
const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log('--- Example 1: Read File ---');
    console.log(data);
});

// -----------------------------------------------------------
// Example 2: Write to File
// -----------------------------------------------------------
fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) throw err;
    console.log('--- Example 2: Write to File ---');
    console.log('File saved!');
});

// -----------------------------------------------------------
// Example 3: Creating a Web Server
// -----------------------------------------------------------
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!');
    res.end();
}).listen(8080);

console.log('--- Example 3: Web Server ---');
console.log('Server running at http://localhost:8080');

// -----------------------------------------------------------
// Example 4: Making an HTTP Request
// -----------------------------------------------------------
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        console.log('--- Example 4: HTTP Request ---');
        console.log(JSON.parse(data));
    });
}).on('error', (err) => {
    console.log('Error: ' + err.message);
});

// -----------------------------------------------------------
// Example 5: Using a Module
// -----------------------------------------------------------
const myModule = require('./my-module.js');

console.log('--- Example 5: Using a Module ---');
console.log(myModule.myFunction());

// -----------------------------------------------------------
// Example 6: Promises
// -----------------------------------------------------------
const condition = true;

const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});

myPromise
    .then((result) => {
        console.log('--- Example 6: Promises ---');
        console.log(result);
    })
    .catch((error) => {
        console.log('--- Example 6: Promises ---');
        console.log(error);
    });

// -----------------------------------------------------------
// Example 7: Async/Await
// -----------------------------------------------------------
async function myFunction() {
    try {
        const result = await myPromise;
        console.log('--- Example 7: Async/Await ---');
        console.log(result);
    } catch (error) {
        console.log('--- Example 7: Async/Await ---');
        console.log(error);
    }
}

myFunction();
