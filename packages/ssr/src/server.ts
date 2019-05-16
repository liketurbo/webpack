import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';

const SSR = require('../dist');

const renderMarkup = (html: string) => {
  return `<!DOCTYPE html>
<html>
<head>
<title>Webpack SSR Demo</title>
<meta charset="utf-8" />
</head>
<body>
<div id="root">${html}</div>
<script src="./index.js"></script>
</body>
</html>`;
};

const server = (port: string) => {
  const app = express();
  app.use(express.static(path.join(__dirname, '..', 'dist')));
  app.get('/', (_, res) =>
    res.status(200).send(renderMarkup(renderToString(SSR)))
  );
  app.listen(port, () => console.log("I'm listening 😏"));
};

server(process.env.PORT || '8080');
