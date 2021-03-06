const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5055;

app.use(express.static('build'))

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
