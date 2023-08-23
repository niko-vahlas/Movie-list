const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Todo Backend API');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
