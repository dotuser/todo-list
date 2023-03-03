const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4444;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        month: "short",
        day: "numeric"
    }
    let day = today.toLocaleString("en-US", options);

    res.render('list', {day: day});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});