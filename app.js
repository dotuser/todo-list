const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4444;

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});