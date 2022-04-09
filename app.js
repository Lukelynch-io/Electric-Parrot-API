const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        test: "hello World"
    });
})


app.listen(port, function () {
    console.log(`Listening on ${port}.`);
});