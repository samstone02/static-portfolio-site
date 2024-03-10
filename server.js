const express = require('express');
const path = require('path');
const app = express();

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.ico': 'image/png',
};

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '/dist/angular_portfolio_site/browser/index.html');
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(filePath);
});

app.get('/*', (req, res) => {
  const filePath = path.join(__dirname, '/dist/angular_portfolio_site/browser/', req.url);
  const ext = path.extname(filePath);

  const contentType = mimeTypes[ext];

  res.setHeader('Content-Type', contentType);
  res.sendFile(filePath);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
