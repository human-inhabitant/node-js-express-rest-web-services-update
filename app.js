const express = require('express');

const app = express();
const port = process.env.PORT || 3e3;

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});
app.listen(port, () => {
  console.info('Start: %s', new Date());
  console.info('Listening on port: %d', port);
});
