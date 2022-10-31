/**
 * Required modules
 */
const express = require('express');
const handlers = require('./handlers');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 80;

app.get('/', handlers.homeHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
