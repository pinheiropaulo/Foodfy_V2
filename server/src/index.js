const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  return res.json({ message: 'Hello' });
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
