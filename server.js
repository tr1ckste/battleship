'use strict';

const http = require('http');
const fs = require('fs');

const httpError = (res, status, message) => {
  res.statusCode = status;
  res.end(`"${message}"`);
};

const receiveLogin = async req => new Promise(resolve => {
  const body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', async () => {
    const data = body.join('');
    const login = JSON.parse(data);
    resolve(login);
  });
});

const getScreen = async (req, path) => {
  const login = await receiveLogin(req);
  const fn = require(path);
  return await fn(login);
}

http.createServer(async (req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const [ first, second ] = url.substring(1).split('/');
  if (first === 'screens') {
    const path = `./screens/${second}`;
    const screen = await getScreen(req, path);
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
