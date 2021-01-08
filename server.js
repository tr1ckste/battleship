'use strict';

const http = require('http');
const fs = require('fs');

const httpError = (res, status, message) => {
  res.statusCode = status;
  res.end(`"${message}"`);
};

http.createServer(async (req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const [ first, second ] = url.substring(1).split('/');
  if (first === 'screens') {
    const path = `./screens/${second}`;
    const screen = await require(path);
    res.end(JSON.stringify(screen));
  } else {
    const path = `./static/${first}`;
    try {
      const data = await fs.promises.readFile(path);
      res.end(data);
    } catch (err) {
      httpError(res, 404, 'File is not found');
    }
  }
}).listen(8000);
