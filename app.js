const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, rest) => {
  res.send('<h1>Auto Scaling Demo App</h1> <h4>Message: Success</h4> <p>Version: 1.0.0</p>');
})

app.listen(port, () => {
  console.log(`Demo app is upand listening to port ${port}`);
})
